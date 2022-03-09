import crypto from 'crypto';

import { API, graphqlOperation, GraphQLResult } from './../../amplify-bootstrapper/bootstrap-amplify';

import { CreatePoolInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolStatus, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet } from '../../codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, searchUserWallets } from '../../graphql/queries';
import { createPool, createUserWallet } from '../../graphql/mutations';

export class PoolService {

    constructor() {

    }

    async createPool(createPoolInput: CreatePoolInput): Promise<any> {
        const graphqlResult = await API.graphql(graphqlOperation(createPool,
            { input: createPoolInput }
        )) as GraphQLResult<CreatePoolMutation>;
        console.log('graphqlResult', graphqlResult);

        return graphqlResult.data?.createPool;
    }
    
}