'use strict';

import crypto from 'crypto';

import { API, graphqlOperation, GraphQLResult } from '../../amplify-bootstrapper/bootstrap-amplify';

import { CreateApiPoolAttributesInput, CreatePoolInput, CreatePoolMutation, CreatePoolPlayerInput, CreateUserWalletInput, CreateUserWalletMutation, PlayerStatus, Pool, PoolCategory, poolStatus, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet } from '../../codegen/API';
import { getCreatePoolEventLogV2, getPlayerJoinedPoolEventLogV2, getPlayerLeftPoolEventLogV2, getPoolAwaitingExecutionEventLogV2, getPoolCompletedEventLogV2, getPoolSuccessfullBlockEventsProcessed, searchUserWallets } from '../../graphql/queries';
import { createPool, createUserWallet } from '../../graphql/mutations';

import { ApiPoolAttributesService } from '../core/api-pool-attributes-service';
import { PoolPlayerService } from '../core/pool-player-service';
import { PoolService } from '../core/pool-service';
import { UserWalletService } from '../core/user-wallet-service';
import { BlockChainService } from '../legacy_contract_v1_helpers/backend/blockchain/blockchain-service';
import { DecodedGameEntity } from '../legacy_contract_v1_helpers/backend/models/all-models';

export class CreatePoolService implements IEventLogProcessor {

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
        //crypto.randomUUID();
        /* ready to begin */
      
        /* UserWallet */
        let poolCreatorUserWallet: UserWallet;

        //TODO: Add creation on user sign in to UI if it doesnt exist
        let searchForExistingCreatorUserWallet = await this.userWalletService.searchUserWalletByWalletAddress({wallet: {eq: eventRecord.dynamodb.NewImage.decodedPlayer}} as SearchableUserWalletFilterInput);
        if(searchForExistingCreatorUserWallet.items.length === 0) {
            /* do not have existing wallet */
            poolCreatorUserWallet = await this.userWalletService.createUserWallet({                               
                wallet: eventRecord.dynamodb.NewImage.decodedPlayer,                                
                totalWinnings: 0,
                totalPools: 1,
                totalCompletedPools: 0,
                totalPoolsWon: 0
            } as CreateUserWalletInput)
        }
        else {
             /* have existing wallet */
             poolCreatorUserWallet = searchForExistingCreatorUserWallet.items[0];
        }

        /* ApiPoolAttributes */
        /* create */
        //TODO: UI update. apiPoolAttributes created in the UI prior to game creation    
        //const poolId = crypto.randomUUID();              
        //const apiPoolAttributes  = this.apiPoolAttributesService.createApiPoolAttributes({                               
            // id: ?
            // apiKey: string;
            // lockFundsDatetime: string;
            // executeWinnerDatetime: string;
            // apiUrlForResults: string;
            // verifiedUrlSchema: boolean;
            // poolCreatorPercentFeeToWithold: number;
            // poolApiDefaultSchema: string;
            // poolApiCustomSchema?: string | null;            
            // apiPoolAttributesPoolId?: string | null; 
        //} as CreateApiPoolAttributesInput)


        /* Pool */
        //TODO: Contract Update.New contract will have EVENTS contain poolJsonData: { poolType: {} } to check for pool type among other fields
        const poolJsonData = eventRecord.dynamodb.NewImage?.poolJsonData ? JSON.parse(eventRecord.dynamodb.NewImage?.poolJsonData): null;
         
         /* default to ONLY create lottery pools to accomodate v1 contract */ 
        if(!poolJsonData) {                                  
            const handleLegacyContractCreateEventResult = await this.handleLegacyContractEvent(eventRecord, poolCreatorUserWallet);
        }

        // id: ID!
        // poolId: Int!
        // poolTitle: String!
        // poolCategory: PoolCategory!
        // poolCreator: UserWallet! @hasOne
        // poolType: poolType!
        // poolStatus: poolStatus!
        // poolEntryFee: Int!
        // poolTotal: Int!
        // poolWinningPayout: Int!
        // allowPlayerLeave: Boolean!
        // apiPoolAttributes: ApiPoolAttributes @hasOne
        // apiRequestHash: String!
        // players: [PoolPlayer]! @hasMany
       
        /* PoolPlayer */
        /* create */

        // const result = await this.createPoolFromEvent({
        //     poolId: parseInt((Math.random() * 100).toString(), 10),
        //     poolTitle: 'Test title',
        //     poolCategory: PoolCategory.gaming,
        //     poolType: poolType.lottery,
        //     poolStatus: poolStatus.awaiting,
        //     poolEntryFee: 100,
        //     poolTotal: 100,
        //     poolWinningPayout: 0,
        //     allowPlayerLeave: true,
        //     apiRequestHash: 'test',
        //     poolPoolCreatorId: userwalletResult.id               
        // } as CreatePoolInput);


        // return result;
    }
    
    async handleLegacyContractEvent(eventRecord, poolCreatorUserWallet): Promise<any> {        
        const createdPoolId = crypto.randomUUID();
        /* legacy fetch from contract game info */ 

        const blockchainGameDetails = await this.legacyBlockchainService.getGameById(eventRecord.dynamodb.NewImage.decodedGameId);
        const blockchainGameDetailsDecoded =  (blockchainGameDetails.decoded as DecodedGameEntity);
        
        const createdPool = await this.poolService.createPool(
            {
                id: createdPoolId,
                poolId: eventRecord.dynamodb.NewImage.decodedGameId,
                poolTitle: `Lottery Game # ${eventRecord.dynamodb.NewImage.decodedGameId}`,
                poolCategory: PoolCategory.random_winners,
                poolType: poolType.lottery,
                poolStatus: poolStatus.awaiting,
                poolEntryFee: blockchainGameDetailsDecoded.gcsGameBetSize,
                poolTotal: blockchainGameDetailsDecoded.gameTotalWagers,
                poolWinningPayout: 0,
                allowPlayerLeave: true,
                apiRequestHash: 'NA_V1_CONTRACT',
                poolPoolCreatorId: poolCreatorUserWallet.id                
        } as CreatePoolInput);
          

        const poolPlayerServiceResult = await this.poolPlayerService.createPoolPlayer(
            {                
                status: PlayerStatus.pending_pool_completion,
                poolPlayersId: createdPool.id,
                poolPlayerUserWalletId: poolCreatorUserWallet.id
        } as CreatePoolPlayerInput);
    }
       
}