'use strict';

import { API, graphqlOperation, GraphQLResult } from '../../amplify-bootstrapper/bootstrap-amplify';

import { CreateApiPoolAttributesInput, CreateLotteryPoolAttributesInput, CreatePoolInput, CreatePoolMutation, CreatePoolPlayerInput, CreateUserWalletInput, CreateUserWalletMutation, LotteryPoolAttributes, PlayerStatus, Pool, PoolCategory, poolType, SearchablePoolFilterInput, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet } from '../../codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, searchUserWallets } from '../../graphql/queries';
import { createPool, createUserWallet } from '../../graphql/mutations';

import { ApiPoolAttributesService } from '../core/api-pool-attributes-service';
import { PoolPlayerService } from '../core/pool-player-service';
import { PoolService } from '../core/pool-service';
import { UserWalletService } from '../core/user-wallet-service';
import { BlockChainService } from '../legacy_contract_v1_helpers/backend/blockchain/blockchain-service';
import { DecodedGameEntity } from '../legacy_contract_v1_helpers/backend/models/all-models';
import { LotteryPoolAttributesService } from '../core/lottery-pool-attributes-service';

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
        const poolCreatorUserWallet = await getOrCreateUserWallet(eventRecord.dynamodb.NewImage.decodedPlayer, this.userWalletService);
    
        /* Pool */
        //TODO: Contract Update. New contract will have EVENTS contain poolJsonData: { poolType: {} } to check for pool type among other fields   
        /* default to ONLY create lottery pools to accomodate v1 contract */
        if (!isContractVersion2()) {         
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

            let searchForExistingCreatorUserWallet = await userWalletService.searchUserWalletByWalletAddress({ wallet: { eq: decodedPlayer } } as SearchableUserWalletFilterInput);
            if (doNotHaveExistingWallet(searchForExistingCreatorUserWallet)) {
                poolCreatorUserWallet = await userWalletService.createUserWallet({
                    wallet: decodedPlayer.S,
                    nickname: null,
                    chatlogo: null                       
                } as CreateUserWalletInput);
            }
            else {
                poolCreatorUserWallet = searchForExistingCreatorUserWallet.items[0];
            }
            return poolCreatorUserWallet;
        }

        function isContractVersion2() {
            return eventRecord.dynamodb.NewImage?.poolJsonData ? JSON.parse(eventRecord.dynamodb.NewImage?.poolJsonData) : null;
        }

        function doNotHaveExistingWallet(searchForExistingCreatorUserWallet) {
            return searchForExistingCreatorUserWallet.items.length === 0;
        }    
    }

    async handleContractEventV2(eventRecord, poolCreatorUserWallet): Promise<any> {

    }    

    async handleLegacyContractEvent(eventRecord, poolCreatorUserWallet): Promise<any> {
        const crypto = await import('crypto');
        const createdPoolId = crypto.randomUUID();

        const decodedGameId = eventRecord.dynamodb.NewImage.decodedGameId.N;           

        const existingPools =  await this.poolService.searchPoolByPoolId({ poolId: { eq: decodedGameId } } as SearchablePoolFilterInput);
        console.log('existingPools', existingPools);

        if(existingPools.total === null || existingPools.total === 0) {
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
               
            const createdPool = await this._createPool(blockchainGameDetailsDecoded, createdPoolId, decodedGameId, poolCreatorUserWallet);
            const lotteryPoolAttributes = await this._createLotteryPoolAttributes(createdPool, blockchainGameDetailsDecoded);               
            const poolPlayerServiceResult = await this._createPoolPlayer(createdPool, poolCreatorUserWallet);            
        }
        else {
            console.log('Existing Pools found matching this pool id, skipping processing for ', existingPools);
        }        
    }    

    private async _createLotteryPoolAttributes(createdPool: Pool, blockchainGameDetails: DecodedGameEntity): Promise<LotteryPoolAttributes> {

        const lotteryPoolAttributesInput = {
            auditRecordDrawId: null,
            isAuditEnabled: blockchainGameDetails.gcsIsAuditEnabled,
            randomOrgUrlForResults: null,            
        } as CreateLotteryPoolAttributesInput;

        console.log('lotteryPoolAttributesInput with', lotteryPoolAttributesInput);

        const createdLotteryPoolAttributesResult = await this.lotteryPoolAttributesService.createLotteryPoolAttributes(lotteryPoolAttributesInput);

        console.log('createdLotteryPoolAttributesResult', createdLotteryPoolAttributesResult);

        return createdLotteryPoolAttributesResult as LotteryPoolAttributes;    
         
    }

    private async _createPoolPlayer(createdPool: any, poolCreatorUserWallet: any) {

        const poolPlayerInput = {
            status: PlayerStatus.pending_pool_completion,
            poolPlayersId: createdPool.id,
            poolPlayerUserWalletId: poolCreatorUserWallet.id
        } as CreatePoolPlayerInput;

        console.log('poolplayerserivce createpool player with', poolPlayerInput);

        const createdPoolPlayerResult = await this.poolPlayerService.createPoolPlayer(poolPlayerInput);

        console.log('createdPoolPlayerResult', createdPoolPlayerResult);

        return createdPoolPlayerResult;          
    }

    private async _createPool(blockchainGameDetails: DecodedGameEntity, createdPoolId: string, decodedGameId: any, poolCreatorUserWallet: any) {
       

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
            apiRequestHash: 'NA_V1_CONTRACT',
            poolPoolCreatorId: poolCreatorUserWallet.id
        } as CreatePoolInput;

        console.log('createPoolInput', createPoolInput);

        const createdPool = await this.poolService.createPool(createPoolInput);

        return createdPool;
    }
}