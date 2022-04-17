import crypto from 'crypto';

import { API, graphqlOperation, GraphQLResult } from '../../library/amplify-bootstrapper/bootstrap-amplify';

import { CreatePoolInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, SearchPoolsQuery, UserWallet, SearchablePoolFilterInput, SearchablePoolConnection, UpdatePoolInput, UpdatePoolMutation, GetPoolByPoolIdIndexQuery } from '../../library/codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolByPoolIdIndex, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed,  } from '../../library/graphql/queries';
import { createPool, createUserWallet, updatePool } from '../../library/graphql/mutations';

export class PoolService {

    constructor() {

    }

    async updatePool(updatedPool: Pool): Promise<Pool> {

        delete updatedPool.updatedAt;
        delete updatedPool.createdAt;

        console.log('updatePool called with pool entry of', updatedPool);

        const graphqlResult = await API.graphql(graphqlOperation(updatePool,
            { input: updatedPool as UpdatePoolInput } 
        )) as GraphQLResult<UpdatePoolMutation>;
        console.log('updatePool graphqlResult', JSON.stringify(graphqlResult, null, 2));

        return graphqlResult.data?.updatePool as Pool;
    }

    async createPool(createPoolInput: CreatePoolInput): Promise<Pool> {
        const graphqlResult = await API.graphql(graphqlOperation(createPool,
            { input: createPoolInput as CreatePoolInput }
        )) as GraphQLResult<CreatePoolMutation>;
        console.log('graphqlResult', JSON.stringify(graphqlResult, null, 2));

        return graphqlResult.data?.createPool as Pool;
    }

    async getPoolByPoolIdIndex(poolId: String): Promise<Pool> {        
        const graphqlResult = await API.graphql(graphqlOperation(getPoolByPoolIdIndex,
            { poolId: poolId }
        )) as GraphQLResult<GetPoolByPoolIdIndexQuery>;
        
        console.log('poolId', JSON.stringify(graphqlResult, null, 2));
        const items = graphqlResult.data?.getPoolByPoolIdIndex.items;

        return items.length === 1 ? items[0] as Pool : null;
    }

    // async searchPoolByPoolId(searchableInput: SearchablePoolFilterInput): Promise<SearchablePoolConnection> {
    //     const graphqlResult = await API.graphql(graphqlOperation(searchPools,
    //         { input: searchableInput }
    //     )) as GraphQLResult<SearchPoolsQuery>;
        
    //     console.log('searchPoolByPoolId', JSON.stringify(graphqlResult), null, 2);
    //     return graphqlResult.data.searchPools as SearchablePoolConnection;
    // }
    
}