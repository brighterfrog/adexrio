import crypto from 'crypto';

import { API, graphqlOperation, GraphQLResult } from './../../amplify-bootstrapper/bootstrap-amplify';

import { CreatePoolPlayerInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolStatus, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet, CreatePoolPlayerMutation } from '../../codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, searchUserWallets } from '../../graphql/queries';
import { createPool, createPoolPlayer, createUserWallet } from '../../graphql/mutations';

export class PoolPlayerService {

    constructor() {

    }

    async createPoolPlayer(createPoolPlayerInput: CreatePoolPlayerInput): Promise<any> { 
        const graphqlResult = await API.graphql(graphqlOperation(createPoolPlayer,
            { input: createPoolPlayerInput }
        )) as GraphQLResult<CreatePoolPlayerMutation>;
        console.log('graphqlResult', graphqlResult);

        return graphqlResult.data?.createPoolPlayer;
    }

    // async createUserWalletIfDoesntExist(createUserWalletInput: CreateUserWalletInput): Promise<any> {
    //     const graphqlResult = await API.graphql(graphqlOperation(createUserWallet,
    //         { input: createUserWalletInput }
    //     )) as GraphQLResult<CreateUserWalletMutation>;
    //     console.log('createUserWalletIfDoesntExist', graphqlResult);

    //     return graphqlResult.data?.createUserWallet;
    // }

    // async getUserWalletByWalletAddress(walletAddress: string): Promise<any> {

    // }
}