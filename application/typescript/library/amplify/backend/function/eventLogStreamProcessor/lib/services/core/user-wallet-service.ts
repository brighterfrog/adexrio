import crypto from 'crypto';

import { API, graphqlOperation, GraphQLResult } from '../../library/amplify-bootstrapper/bootstrap-amplify';

import { CreatePoolInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolType, SearchableUserWalletConnection, SearchableUserWalletFilterInput, UserWalletByWalletAddressIndexQuery, UserWallet } from '../../library/codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, searchUserWallets, userWalletByWalletAddressIndex } from '../../library/graphql/queries';
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

    async getUserWalletByWalletAddressIndex(wallet: String): Promise<UserWallet> {
        const graphqlResult = await API.graphql(graphqlOperation(userWalletByWalletAddressIndex,
            { wallet: wallet }
        )) as GraphQLResult<UserWalletByWalletAddressIndexQuery>;
        
        console.log('getUserWalletByWalletAddressIndex', JSON.stringify(graphqlResult), null, 2);
        const items = graphqlResult.data.userWalletByWalletAddressIndex.items;

        return items.length > 0 ? items[0] : null;
    }

    // async searchUserWalletByWalletAddress(searchableUserWalletFilterInput: SearchableUserWalletFilterInput): Promise<SearchableUserWalletConnection> {
    //     const graphqlResult = await API.graphql(graphqlOperation(getUserWalletByA,
    //         { input: searchableUserWalletFilterInput }
    //     )) as GraphQLResult<SearchUserWalletsQuery>;
        
    //     console.log('searchUserWalletByWalletAddress', JSON.stringify(graphqlResult), null, 2);
    //     return graphqlResult.data.searchUserWallets as SearchableUserWalletConnection;
    // }
    
}