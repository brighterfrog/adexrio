'use strict';

import { API, graphqlOperation, GraphQLResult } from '../../library/amplify-bootstrapper/bootstrap-amplify';

import { CreateApiPoolAttributesInput, CreatePoolInput, CreatePoolMutation, CreatePoolPlayerInput, CreateUserWalletInput, CreateUserWalletMutation, PlayerStatus, Pool, PoolCategory, poolType, SearchablePoolFilterInput, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet } from '../../library/codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, searchUserWallets } from '../../library/graphql/queries';
import { createPool, createUserWallet } from '../../library/graphql/mutations';

import { ApiPoolAttributesService } from '../core/api-pool-attributes-service';
import { PoolPlayerService } from '../core/pool-player-service';
import { PoolService } from '../core/pool-service';
import { UserWalletService } from '../core/user-wallet-service';
import { BlockChainService } from '../../library/backend/blockchain/blockchain-service';
import { DecodedGameEntity } from '../../library/backend/models/all-models';

import { GAME_STATUS_COMPLETE, IEventLogProcessor } from './models'

export class PlayerJoinedPoolService implements IEventLogProcessor {

    userWalletService: UserWalletService;
    apiPoolAttributesService: ApiPoolAttributesService;
    poolPlayerService: PoolPlayerService;
    poolService: PoolService;
    legacyBlockchainService: BlockChainService;

    constructor(
        userWalletService: UserWalletService,
        apiPoolAttributesService: ApiPoolAttributesService,
        poolPlayerService: PoolPlayerService,
        poolService: PoolService,
        legacyBlockchainService: BlockChainService
    ) {
        this.userWalletService = userWalletService;
        this.apiPoolAttributesService = apiPoolAttributesService;
        this.poolPlayerService = poolPlayerService;
        this.poolService = poolService;
        this.legacyBlockchainService = legacyBlockchainService;
    }

    async handleEventRecord(eventRecord): Promise<any> {
        console.log('handleEventRecord', eventRecord)

        /* UserWallet */              
        const poolCreatorUserWallet = await getOrCreateUserWallet(eventRecord.dynamodb.NewImage.decodedPlayer.S, this.userWalletService);
    
        /* Pool */
        //TODO: Contract Update. New contract will have EVENTS contain poolJsonData: { poolType: {} } to check for pool type among other fields   
        /* default to ONLY create lottery pools to accomodate v1 contract */
        if (isContractLegacy()) {         
            const handleLegacyContractCreateEventResult = await this.handleLegacyContractEvent(eventRecord, poolCreatorUserWallet);
        }
        else {        
            const handleContractCreateEventResult = await this.handleContractEventV2(eventRecord, poolCreatorUserWallet);
        }

        async function getOrCreateUserWallet(decodedPlayer, userWalletService) {
            let poolCreatorUserWallet: UserWallet;

            let existingUserWallet = await userWalletService.getUserWalletByWalletAddressIndex(decodedPlayer) as UserWallet;
            if (!existingUserWallet) {
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
    }

    async handleContractEventV2(eventRecord, poolCreatorUserWallet): Promise<any> {
        throw new Error('ERROR handleContractEventV2')
    }    

    async handleLegacyContractEvent(eventRecord, poolCreatorUserWallet): Promise<any> {
        const crypto = await import('crypto');
        const createdPoolId = crypto.randomUUID();

        const decodedGameId = eventRecord.dynamodb.NewImage.decodedGameId.N;      

        const existingPool =  await this.poolService.getPoolByPoolIdIndex(decodedGameId);
        console.log('existingPool', existingPool);

        if(!existingPool) {
            console.log('existing pool not found', decodedGameId);
            throw new Error(`existing pool ${decodedGameId} not found`)                          
        }
        else {
            const poolToUpdate = existingPool;

            console.log('Existing Pool found matching this pool id');

            const blockchainGameDetails = await this.legacyBlockchainService.getGameById(decodedGameId);                
                                    
            const poolPlayerServiceResult = await this._createPoolPlayer(poolToUpdate, poolCreatorUserWallet);
            
            poolToUpdate.poolTotal = (BigInt(poolToUpdate.poolTotal) + BigInt(poolToUpdate.poolEntryFee)).toString();
                     
            const updatePoolResult = await this.poolService.updatePool(poolToUpdate);  
            
            console.log('Done processing player joined pool event');
        }        
    }

    private async _createPoolPlayer(createdPool: any, poolCreatorUserWallet: any) {

        const poolPlayerInput = {
            status: PlayerStatus.joined,
            poolPlayersId: createdPool.id,
            poolId: createdPool.id,
            poolPlayerUserWalletId: poolCreatorUserWallet.id,
            userWalletId:  poolCreatorUserWallet.id
        } as CreatePoolPlayerInput;

        console.log('poolplayerserivce createpool player with', poolPlayerInput);

        const createdPoolPlayerResult = await this.poolPlayerService.createPoolPlayer(poolPlayerInput);

        console.log('createdPoolPlayerResult', createdPoolPlayerResult);

        return createdPoolPlayerResult;          
    }

    // private async _createPool(blockchainGameDetails: Connex.VM.Output & Connex.Thor.Account.WithDecoded, createdPoolId: string, decodedGameId: any, poolCreatorUserWallet: any) {
    //     const blockchainGameDetailsDecoded = {
    //         gameId: parseInt(blockchainGameDetails.decoded.gameId),
    //         gameStatus: blockchainGameDetails.decoded.gameStatus,
    //         gameTotalWagers: blockchainGameDetails.decoded.gameTotalWagers,
    //         gameWinningPayout: blockchainGameDetails.decoded.gameWinningPayout,
    //         gameWinnerAddress: blockchainGameDetails.decoded.gameWinnerAddress,
    //         gameTotalEligiblePlayers: blockchainGameDetails.decoded.gameTotalEligiblePlayers,
    //         gcsMinGamePlayers: blockchainGameDetails.decoded.gcsMinGamePlayers,
    //         gcsGameBetSize: blockchainGameDetails.decoded.gcsGameBetSize,
    //         gcsIsAuditEnabled: blockchainGameDetails.decoded.gcsIsAuditEnabled
    //     } as DecodedGameEntity;

    //     console.log('before create pool entry fee is', blockchainGameDetailsDecoded.gcsGameBetSize);

    //     console.log('decoded game entity is ', blockchainGameDetailsDecoded);



    //     const createPoolInput = {
    //         id: createdPoolId,
    //         poolId: decodedGameId,
    //         poolTitle: `Lottery Game # ${decodedGameId}`,
    //         poolCategory: PoolCategory.random_winners,
    //         poolType: poolType.lottery,
    //         poolStatus: blockchainGameDetailsDecoded.gameStatus,
    //         poolEntryFee: blockchainGameDetailsDecoded.gcsGameBetSize,
    //         poolTotal: blockchainGameDetailsDecoded.gameTotalWagers,
    //         poolWinningPayout: '0',
    //         allowPlayerLeave: true,            
    //         poolPoolCreatorId: poolCreatorUserWallet.id
    //     } as CreatePoolInput;

    //     console.log('createPoolInput', createPoolInput);

    //     const createdPool = await this.poolService.createPool(createPoolInput);

    //     return createdPool;
    // }
}