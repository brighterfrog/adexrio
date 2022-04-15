'use strict';

import { API, graphqlOperation, GraphQLResult } from '../../library/amplify-bootstrapper/bootstrap-amplify';

import { CreateApiPoolAttributesInput, CreateLotteryPoolAttributesInput, CreatePoolInput, CreatePoolMutation, CreatePoolPlayerInput, CreateUserWalletInput, CreateUserWalletMutation, LotteryPoolAttributes, PlayerStatus, Pool, PoolCategory, poolType, UserWallet } from '../../library/codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed,  } from '../../library/graphql/queries';
import { createPool, createUserWallet } from '../../library/graphql/mutations';

import { ApiPoolAttributesService } from '../core/api-pool-attributes-service';
import { PoolPlayerService } from '../core/pool-player-service';
import { PoolService } from '../core/pool-service';
import { UserWalletService } from '../core/user-wallet-service';
import { BlockChainService } from '../../library/backend/blockchain/blockchain-service';
import { DecodedGameEntity } from '../../library/backend/models/all-models';
import { LotteryPoolAttributesService } from '../core/lottery-pool-attributes-service';

import { GAME_STATUS_COMPLETE, IEventLogProcessor } from './models'

export class CreatePoolService implements IEventLogProcessor {

    userWalletService: UserWalletService;
    apiPoolAttributesService: ApiPoolAttributesService;
    poolPlayerService: PoolPlayerService;
    poolService: PoolService;
    legacyBlockchainService: BlockChainService;
    lotteryPoolAttributesService: LotteryPoolAttributesService

    constructor(
        userWalletService: UserWalletService,
        apiPoolAttributesService: ApiPoolAttributesService,
        poolPlayerService: PoolPlayerService,
        poolService: PoolService,
        lotteryPoolAttributesService: LotteryPoolAttributesService,
        legacyBlockchainService: BlockChainService      
    ) {
        this.userWalletService = userWalletService;
        this.apiPoolAttributesService = apiPoolAttributesService;
        this.poolPlayerService = poolPlayerService;
        this.poolService = poolService;
        this.lotteryPoolAttributesService = lotteryPoolAttributesService;
        this.legacyBlockchainService = legacyBlockchainService;      
    }

    async handleEventRecord(eventRecord): Promise<any> {
        console.log('handleEventRecord', eventRecord)

        /* UserWallet */        
        //TODO: Add creation on user sign in to UI if it doesnt exist
        const poolCreatorUserWallet = await getOrCreateUserWallet(eventRecord.dynamodb.NewImage.decodedPlayer.S, this.userWalletService);
    
        /* Pool */
        //TODO: Contract Update. New contract will have EVENTS contain poolJsonData: { poolType: {} } to check for pool type among other fields   
        /* default to ONLY create lottery pools to accomodate v1 contract */
        if (isContractLegacy()) {         
            const handleLegacyContractCreateEventResult = await this.handleLegacyContractEvent(eventRecord, poolCreatorUserWallet);
        }
        else {
            /* ApiPoolAttributes */
            /* create */
            //TODO: UI update. apiPoolAttributes created in the UI prior to game creation              

            const handleContractCreateEventResult = await this.handleContractEventV2(eventRecord, poolCreatorUserWallet);
        }

        async function getOrCreateUserWallet(decodedPlayer, userWalletService) {
            let poolCreatorUserWallet: UserWallet;

            let existingUserWallet = await userWalletService.getUserWalletByWalletAddressIndex(decodedPlayer) as UserWallet;
            if (doNotHaveExistingWallet(existingUserWallet)) {
                poolCreatorUserWallet = await userWalletService.createUserWallet({
                    wallet: decodedPlayer,
                    nickname: null,
                    chatlogo: null                       
                } as CreateUserWalletInput);
            }
            else {
                poolCreatorUserWallet = existingUserWallet;
            }
            return poolCreatorUserWallet;
        }

        function isContractLegacy(): Boolean {
            const isLegacy = eventRecord.dynamodb.NewImage?.poolJsonData?.S ? false : true;
            console.log('isContractLegacy', isLegacy);
            return isLegacy;
        }

        function doNotHaveExistingWallet(existingUserWallet) {
            return existingUserWallet === null || existingUserWallet === 'undefined';
        }    
    }

    async handleContractEventV2(eventRecord, poolCreatorUserWallet): Promise<any> {
        throw new Error('ERROR handleContractEventV2')
    }    

    async handleLegacyContractEvent(eventRecord, poolCreatorUserWallet): Promise<any> {
        const crypto = await import('crypto');
        const createdPoolId = crypto.randomUUID();
        const createdLotteryPoolAttributesId = crypto.randomUUID();

        const decodedGameId = eventRecord.dynamodb.NewImage.decodedGameId.N;           

        const existingPool =  await this.poolService.getPoolByPoolIdIndex(decodedGameId);
        console.log('existingPool', existingPool);

        if(existingPool) {
            console.log('existing pool not found, processing...', decodedGameId);
            console.log('calling getGameById with value of', decodedGameId);
  
            const blockchainGameDetails = await this.legacyBlockchainService.getGameById(decodedGameId); 

            const blockchainGameDetailsDecoded = {
                gameId: parseInt(blockchainGameDetails.decoded.gameId),
                gameStatus: blockchainGameDetails.decoded.gameStatus,
                gameTotalWagers: blockchainGameDetails.decoded.gameTotalWagers,
                gameWinningPayout: blockchainGameDetails.decoded.gameWinningPayout,
                gameWinnerAddress: blockchainGameDetails.decoded.gameWinnerAddress,
                gameTotalEligiblePlayers: blockchainGameDetails.decoded.gameTotalEligiblePlayers,
                gcsMinGamePlayers: blockchainGameDetails.decoded.gcsMinGamePlayers,
                gcsGameBetSize: blockchainGameDetails.decoded.gcsGameBetSize,
                gcsIsAuditEnabled: blockchainGameDetails.decoded.gcsIsAuditEnabled
            } as DecodedGameEntity;
               
            const createdPool = await this._createPool(blockchainGameDetailsDecoded, createdPoolId, decodedGameId, createdLotteryPoolAttributesId, poolCreatorUserWallet);
            const lotteryPoolAttributes = await this._createLotteryPoolAttributes(createdPool, blockchainGameDetailsDecoded);               
            const poolPlayerServiceResult = await this._createPoolPlayer(createdPool, poolCreatorUserWallet); 
            
            
        }
        else {
            console.log('Existing Pool found matching this pool id, skipping processing for ', existingPool);
        }        
    }    

    private async _createLotteryPoolAttributes(createdPool: Pool, blockchainGameDetails: DecodedGameEntity): Promise<LotteryPoolAttributes> {
       
        const lotteryPoolAttributesInput = {
            auditRecordDrawId: null,
            isAuditEnabled: blockchainGameDetails.gcsIsAuditEnabled,
            randomOrgUrlForResults: null, 
            lotteryPoolAttributesPoolId: createdPool.id,
            poolId: createdPool.id      
        } as CreateLotteryPoolAttributesInput;

        console.log('lotteryPoolAttributesInput with', lotteryPoolAttributesInput);

        const createdLotteryPoolAttributesResult = await this.lotteryPoolAttributesService.createLotteryPoolAttributes(lotteryPoolAttributesInput);

        console.log('createdLotteryPoolAttributesResult', createdLotteryPoolAttributesResult);

        return createdLotteryPoolAttributesResult as LotteryPoolAttributes;    
         
    }

    private async _createPoolPlayer(createdPool: any, poolCreatorUserWallet: any) {

        const poolPlayerInput = {
            status: PlayerStatus.joined,
            userWalletId: poolCreatorUserWallet.id,
            poolPlayerUserWalletId: poolCreatorUserWallet.id,
            poolPlayersId: createdPool.id,
            poolId: createdPool.id          
        } as CreatePoolPlayerInput;
        
        console.log('poolplayerserivce createpool player with', poolPlayerInput);

        const createdPoolPlayerResult = await this.poolPlayerService.createPoolPlayer(poolPlayerInput);

        console.log('createdPoolPlayerResult', createdPoolPlayerResult);

        return createdPoolPlayerResult;          
    }

    private async _createPool(blockchainGameDetails: DecodedGameEntity, createdPoolId: string, decodedGameId: any, createdLotteryPoolAttributesId: any, poolCreatorUserWallet: any) {
       

        console.log('before create pool entry fee is', blockchainGameDetails.gcsGameBetSize);

        console.log('decoded game entity is ', blockchainGameDetails);

        const createPoolInput = {
            id: createdPoolId,
            poolId: decodedGameId,
            poolTitle: `Lottery Game # ${decodedGameId}`,
            poolCategory: PoolCategory.random_winners,
            poolType: poolType.lottery,
            poolStatus: blockchainGameDetails.gameStatus,
            poolEntryFee: blockchainGameDetails.gcsGameBetSize,
            poolTotal: blockchainGameDetails.gameTotalWagers,
            poolWinningPayout: '0',
            allowPlayerLeave: true,            
            poolPoolCreatorId: poolCreatorUserWallet.id,
            poolLotteryPoolAttributesId: createdLotteryPoolAttributesId
        } as CreatePoolInput;

        console.log('createPoolInput', createPoolInput);

        const createdPool = await this.poolService.createPool(createPoolInput);

        return createdPool;
    }
}