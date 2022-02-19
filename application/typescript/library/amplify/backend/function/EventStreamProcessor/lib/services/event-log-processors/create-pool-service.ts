'use strict';

import crypto from 'crypto';

import { API, graphqlOperation } from '../../amplify-bootstrapper/bootstrap-amplify';
import { GraphQLResult } from '../../node_modules/@aws-amplify/api-graphql/lib-esm';

import { CreateApiPoolAttributesInput, CreatePoolInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolStatus, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet } from '../../codegen/API';
import { getCreatePoolEventLogV2, getPlayerJoinedPoolEventLogV2, getPlayerLeftPoolEventLogV2, getPoolAwaitingExecutionEventLogV2, getPoolCompletedEventLogV2, getPoolSuccessfullBlockEventsProcessed, searchUserWallets } from '../../graphql/queries';
import { createPool, createUserWallet } from '../../graphql/mutations';

import { ApiPoolAttributesService } from '../core/api-pool-attributes-service';
import { PoolPlayerService } from '../core/pool-player-service';
import { PoolService } from '../core/pool-service';
import { UserWalletService } from '../core/user-wallet-service';

export class CreatePoolService implements IEventLogProcessor {

    userWalletService: UserWalletService;
    apiPoolAttributesService: ApiPoolAttributesService;
    poolPlayerService: PoolPlayerService;
    poolService: PoolService;

    constructor(
        userWalletService: UserWalletService,
        apiPoolAttributesService: ApiPoolAttributesService,
        poolPlayerService: PoolPlayerService,
        poolService: PoolService
    ) {
        this.userWalletService = userWalletService;
        this.apiPoolAttributesService = apiPoolAttributesService;
        this.poolPlayerService = poolPlayerService;
        this.poolService = poolService;
    }

    async handleEventRecord(eventRecord): Promise<any> {
        console.log('handleEventRecord', eventRecord)
        /* delete me if not needed for insert */
        //  console.log('CreatePoolEventLog Handler called');
        //   const graphqlResult = await API.graphql(graphqlOperation(getCreatePoolEventLog, { txID: '0x31991f6e50d3acc2cde1862303936875b5ab704beccd369104a649988538aea6' }))  as GraphQLResult<GetCreatePoolEventLogQuery>;
        //   console.log('graphqlResult', graphqlResult);
        //   return graphqlResult.data?.getCreatePoolEventLog;


        //eventRecord.dynamodb.NewImage.


        /* ready to begin */

        //crypto.randomUUID();

        /* UserWallet */
        //TODO: Add creation on user sign in to UI if it doesnt exist
        let poolCreatorUserWallet = await this.userWalletService.searchUserWalletByWalletAddress({wallet: {eq: eventRecord.dynamodb.NewImage.decodedPlayer}} as SearchableUserWalletFilterInput)
        if(!poolCreatorUserWallet) {
            poolCreatorUserWallet = this.userWalletService.createUserWallet({                               
                wallet: eventRecord.dynamodb.NewImage.decodedPlayer,                                
                totalWinnings: 0,
                totalPools: 1,
                totalCompletedPools: 0,
                totalPoolsWon: 0
            } as CreateUserWalletInput)
        }

        /* ApiPoolAttributes */
        /* create */
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
        const poolJsonData = eventRecord.dynamodb.NewImage?.poolJsonData ? JSON.parse(eventRecord.dynamodb.NewImage?.poolJsonData): null;
        //TODO: new contract will have EVENTS with poolJsonData { poolType: {} } to check for pool type
        //TODO: apiPoolAttributes created in the UI on
        
        let createdPool: Pool;

         /* default to lottery pools to accomodate v1 contract */ 
        if(!poolJsonData) {  
                                
            createdPool = await this.poolService.createPool(
                {
                    poolId: eventRecord.dynamodb.NewImage.decodedGameId,
                    poolTitle: `Lottery Game # ${eventRecord.dynamodb.NewImage.decodedGameId}`,
                    poolCategory: PoolCategory.random_winners,
                    poolType: poolType.lottery,
                    poolStatus: poolStatus.awaiting,
                    poolEntryFee: 100,
                    poolTotal: 100,
                    poolWinningPayout: 0,
                    allowPlayerLeave: true,
                    apiRequestHash: 'NA_IN_V1_CONTRACT',
                    poolPoolCreatorId: poolCreatorUserWallet.id 
            } as CreatePoolInput);
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
   
}