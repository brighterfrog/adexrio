"use strict";

import { API, graphqlOperation, GraphQLResult } from '../amplify-bootstrapper/bootstrap-amplify';

import { CreatePoolInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, GetPoolSuccessfullBlockEventsProcessedQuery, Pool, PoolCategory, PoolSuccessfullBlockEventsProcessed, poolType, SearchableUserWalletConnection, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet } from '../codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, getUserWallet, searchUserWallets } from '../graphql/queries';

export class DatabaseService {
    
    constructor() {

    }
    
    async readLastBlockForEventsProcessed(): Promise<any> {
        const result = await this._getLastBlockForEventsProcessed();
        return result;
    }

    async _getLastBlockForEventsProcessed(): Promise<PoolSuccessfullBlockEventsProcessed> {
        const graphqlResult = await API.graphql(graphqlOperation(getPoolSuccessfullBlockEventsProcessed,
            { id: 0 }
        )) as GraphQLResult<GetPoolSuccessfullBlockEventsProcessedQuery>;
        
        console.log('searchUserWalletByWalletAddress', JSON.stringify(graphqlResult), null, 2);
        return graphqlResult.data.getPoolSuccessfullBlockEventsProcessed as PoolSuccessfullBlockEventsProcessed;
    }

}
