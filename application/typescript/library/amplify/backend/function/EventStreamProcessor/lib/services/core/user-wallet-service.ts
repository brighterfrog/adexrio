import crypto from 'crypto';

import { API, graphqlOperation } from '../../amplify-bootstrapper/bootstrap-amplify';
import { GraphQLResult } from '../../node_modules/@aws-amplify/api-graphql/lib-esm';

import { CreatePoolInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolStatus, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet } from '../../codegen/API';
import { getCreatePoolEventLogV2, getPlayerJoinedPoolEventLogV2, getPlayerLeftPoolEventLogV2, getPoolAwaitingExecutionEventLogV2, getPoolCompletedEventLogV2, getPoolSuccessfullBlockEventsProcessed, getUserWallet, searchUserWallets } from '../../graphql/queries';
import { createUserWallet } from '../../graphql/mutations';

export class UserWalletService {

    constructor() {

    }

    async createUserWallet(createUserWalletInput: CreateUserWalletInput): Promise<any> {
        const graphqlResult = await API.graphql(graphqlOperation(createUserWallet,
            { input: createUserWalletInput }
        )) as GraphQLResult<CreateUserWalletMutation>;
        console.log('createUserWallet', graphqlResult);

        return graphqlResult.data?.createUserWallet;
    }

    async searchUserWalletByWalletAddress(searchableUserWalletFilterInput: SearchableUserWalletFilterInput): Promise<any> {
        const graphqlResult = await API.graphql(graphqlOperation(searchUserWallets,
            { input: searchableUserWalletFilterInput }
        )) as GraphQLResult<SearchUserWalletsQuery>;
        console.log('searchUserWalletByWalletAddress', graphqlResult);

        return graphqlResult.data?.searchUserWallets;
    }
}