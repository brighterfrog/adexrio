"use strict";

import { API, graphqlOperation, GraphQLResult } from '../amplify-bootstrapper/bootstrap-amplify';

import { CreateUserWalletInput, GetPoolSuccessfullBlockEventsProcessedQuery, ModelPoolSuccessfullBlockEventsProcessedConnection, Pool, PoolCategory, PoolSuccessfullBlockEventsProcessed, PoolSuccessfullBlockEventsProcessedByPositionFieldIndexQuery, poolType, SearchableUserWalletConnection, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet } from '../codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, getUserWallet, poolSuccessfullBlockEventsProcessedByPositionFieldIndex, searchUserWallets } from '../graphql/queries';

export class DatabaseService {
    
    constructor() {

    }
    
    async readLastBlockForEventsProcessed(): Promise<any> {
        console.log('before readLastBlockForEventsProcessed');
        try{
            const result = await this._getLastBlockForEventsProcessed();
            return result?.lambdaProcessorDecisionCheckForNextBlocknumber ?? 0;
        }
        catch(err){
            console.log('Error caught in readLastBlockForEventsProcessed', err);
            if(!err.data.getPoolSuccessfullBlockEventsProcessed && err.errors[0].message.includes('Cannot return null for non-nullable type')) {
                return 0;
            }
            throw err;
        }        
       
    }

    async _getLastBlockForEventsProcessed(): Promise<PoolSuccessfullBlockEventsProcessed> {
        const graphqlResult = await API.graphql(graphqlOperation(poolSuccessfullBlockEventsProcessedByPositionFieldIndex,
            { positionField: 0 }
        )) as GraphQLResult<PoolSuccessfullBlockEventsProcessedByPositionFieldIndexQuery>;
        
        console.log('searchUserWalletByWalletAddress', JSON.stringify(graphqlResult), null, 2);
        const connectionResult = graphqlResult.data.poolSuccessfullBlockEventsProcessedByPositionFieldIndex as ModelPoolSuccessfullBlockEventsProcessedConnection;

        console.log('graphqlResult.data.poolSuccessfullBlockEventsProcessedByPositionFieldIndex', connectionResult);
        
        return connectionResult.items.length > 0 ? connectionResult.items[0] as PoolSuccessfullBlockEventsProcessed : null;
    }

}
