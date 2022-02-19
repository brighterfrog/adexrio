import crypto from 'crypto';

import { API, graphqlOperation } from '../../amplify-bootstrapper/bootstrap-amplify';
import { GraphQLResult } from '../../node_modules/@aws-amplify/api-graphql/lib-esm';

import { CreatePoolInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolStatus, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet } from '../../codegen/API';
import { getCreatePoolEventLogV2, getPlayerJoinedPoolEventLogV2, getPlayerLeftPoolEventLogV2, getPoolAwaitingExecutionEventLogV2, getPoolCompletedEventLogV2, getPoolSuccessfullBlockEventsProcessed, searchUserWallets } from '../../graphql/queries';
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