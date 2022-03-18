import crypto from 'crypto';

import { API, graphqlOperation, GraphQLResult } from './../../amplify-bootstrapper/bootstrap-amplify';

import { CreatePoolInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, SearchPoolsQuery, UserWallet, SearchablePoolFilterInput, SearchablePoolConnection, UpdatePoolInput, UpdatePoolMutation } from '../../codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, searchPools } from '../../graphql/queries';
import { createPool, createUserWallet, updatePool } from '../../graphql/mutations';

export class PoolService {

    constructor() {

    }

    async updatePool(updatePoolInput: UpdatePoolInput): Promise<Pool> {
        const graphqlResult = await API.graphql(graphqlOperation(updatePool,
            { input: updatePoolInput }
        )) as GraphQLResult<UpdatePoolMutation>;
        console.log('graphqlResult', JSON.stringify(graphqlResult), null, 2);

        return graphqlResult.data?.updatePool as Pool;
    }

    async createPool(createPoolInput: CreatePoolInput): Promise<Pool> {
        const graphqlResult = await API.graphql(graphqlOperation(createPool,
            { input: createPoolInput }
        )) as GraphQLResult<CreatePoolMutation>;
        console.log('graphqlResult', JSON.stringify(graphqlResult), null, 2);

        return graphqlResult.data?.createPool as Pool;
    }

    async searchPoolByPoolId(searchableInput: SearchablePoolFilterInput): Promise<SearchablePoolConnection> {
        const graphqlResult = await API.graphql(graphqlOperation(searchPools,
            { input: searchableInput }
        )) as GraphQLResult<SearchPoolsQuery>;
        
        console.log('searchPoolByPoolId', JSON.stringify(graphqlResult), null, 2);
        return graphqlResult.data.searchPools as SearchablePoolConnection;
    }
    
}