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
        const userWallet = await getOrCreateUserWallet(eventRecord.dynamodb.NewImage.decodedPlayer, this.userWalletService);
    
        /* Pool */
        //TODO: Contract Update. New contract will have EVENTS contain poolJsonData: { poolType: {} } to check for pool type among other fields   
        /* default to ONLY create lottery pools to accomodate v1 contract */
        if (!isContractVersion2()) {         
            const handleLegacyContractCreateEventResult = await this.handleLegacyContractEvent(eventRecord, userWallet);
        }
        else {        
            const handleContractCreateEventResult = await this.handleContractEventV2(eventRecord, userWallet);
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

    async handleLegacyContractEvent(eventRecord, userWallet): Promise<any> {
        const crypto = await import('crypto');
        const createdPoolId = crypto.randomUUID();

        const decodedGameId = eventRecord.dynamodb.NewImage.decodedGameId.N;      

        const existingPools =  await this.poolService.searchPoolByPoolId({ poolId: { eq: decodedGameId } } as SearchablePoolFilterInput);
        console.log('existingPools', existingPools);

        if(existingPools.total === null || existingPools.total === 0) {
            console.log('existing pool not found', decodedGameId);
            throw new Error(`existing pool ${decodedGameId} not found`)                          
        }
        else {
            let poolToUpdate = existingPools.items[0];

            console.log('Existing Pool found matching this pool id');                      
                        
            /* retrieve existsing pool player */           
            const searchablePoolPlayerFilterInput = {
                poolPlayerUserWalletId: { eq: userWallet.id},
                poolPlayersId: { eq: poolToUpdate.id }
            } as SearchablePoolPlayerFilterInput;

            const existingPoolPlayerSearchResults = await this.poolPlayerService.searchPoolPlayers(searchablePoolPlayerFilterInput);

            /* update existing pool player */
            const poolPlayer = existingPoolPlayerSearchResults.items[0];
            const poolPlayerServiceResult = await this._updatePoolPlayer(poolPlayer);
           
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

        console.log('createdPoolPlayerResult', updatePoolPlayerResult);

        return updatePoolPlayerResult;          
    } 
}