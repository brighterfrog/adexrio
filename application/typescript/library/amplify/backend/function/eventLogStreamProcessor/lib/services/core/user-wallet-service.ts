import crypto from 'crypto';

import { API, graphqlOperation, GraphQLResult } from '../../library/amplify-bootstrapper/bootstrap-amplify';

import { CreatePoolInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolType, SearchableUserWalletConnection, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet } from '../../library/codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, getUserWallet, searchUserWallets } from '../../library/graphql/queries';
import { createUserWallet } from '../../library/graphql/mutations';

export class UserWalletService {

    constructor() {

    }

    async createUserWallet(createUserWalletInput: CreateUserWalletInput): Promise<UserWallet> {
        const graphqlResult = await API.graphql(graphqlOperation(createUserWallet,
            { input: createUserWalletInput }
        )) as GraphQLResult<CreateUserWalletMutation>;
       
        console.log('createUserWallet', JSON.stringify(graphqlResult), null, 2);
        return graphqlResult.data?.createUserWallet as UserWallet;
    }

    async searchUserWalletByWalletAddress(searchableUserWalletFilterInput: SearchableUserWalletFilterInput): Promise<SearchableUserWalletConnection> {
        const graphqlResult = await API.graphql(graphqlOperation(searchUserWallets,
            { input: searchableUserWalletFilterInput }
        )) as GraphQLResult<SearchUserWalletsQuery>;
        
        console.log('searchUserWalletByWalletAddress', JSON.stringify(graphqlResult), null, 2);
        return graphqlResult.data.searchUserWallets as SearchableUserWalletConnection;
    }
}