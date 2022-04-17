'use strict';

import { API, graphqlOperation, GraphQLResult } from '../../library/amplify-bootstrapper/bootstrap-amplify';

import { CreateApiPoolAttributesInput, CreatePoolInput, CreatePoolMutation, CreatePoolPlayerInput, CreateUserWalletInput, CreateUserWalletMutation, PlayerStatus, Pool, PoolCategory, PoolPlayer, poolType, SearchablePoolFilterInput, SearchablePoolPlayerFilterInput, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet } from '../../library/codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, searchUserWallets } from '../../library/graphql/queries';
import { createPool, createUserWallet } from '../../library/graphql/mutations';

import { ApiPoolAttributesService } from '../core/api-pool-attributes-service';
import { PoolPlayerService } from '../core/pool-player-service';
import { PoolService } from '../core/pool-service';
import { UserWalletService } from '../core/user-wallet-service';
import { BlockChainService } from '../../library//backend/blockchain/blockchain-service';
import { DecodedGameEntity } from '../../library//backend/models/all-models';

import { GAME_STATUS_COMPLETE, IEventLogProcessor } from './models'

export class PlayerLeftPoolService implements IEventLogProcessor {

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
        const userWallet = await getOrCreateUserWallet(eventRecord.dynamodb.NewImage.decodedPlayer.S, this.userWalletService);
    
        /* Pool */
        //TODO: Contract Update. New contract will have EVENTS contain poolJsonData: { poolType: {} } to check for pool type among other fields   
        /* default to ONLY create lottery pools to accomodate v1 contract */
        if (isContractLegacy()) {         
            const handleLegacyContractCreateEventResult = await this.handleLegacyContractEvent(eventRecord, userWallet);
        }
        else {        
            const handleContractCreateEventResult = await this.handleContractEventV2(eventRecord, userWallet);
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

    async handleLegacyContractEvent(eventRecord, userWallet): Promise<any> {
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
                        
            /* retrieve existsing pool player */                       
            const existingPoolPlayer = await this.poolPlayerService.getPoolPlayerbyPoolIdWalletIdIndex(userWallet.id, poolToUpdate.id);

                        
            const poolPlayerServiceResult = await this._updatePoolPlayer(existingPoolPlayer);
           
            /* update pool totals */                       
            poolToUpdate.poolTotal = (BigInt(poolToUpdate.poolTotal) - BigInt(poolToUpdate.poolEntryFee)).toString();
            const updatePoolResult = await this.poolService.updatePool(poolToUpdate); 
            console.log('updatePoolResult', updatePoolResult); 
            
            console.log('Done processing player left pool event');
        }        
    }

    private async _updatePoolPlayer(poolPlayer: PoolPlayer): Promise<PoolPlayer> {      
        poolPlayer.status = PlayerStatus.withdrew;
        const updatePoolPlayerResult = await this.poolPlayerService.updatePoolPlayer(poolPlayer);

        console.log('_updatePoolPlayer', updatePoolPlayerResult);

        return updatePoolPlayerResult;          
    } 
}