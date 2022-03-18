import crypto from 'crypto';

import { API, graphqlOperation, GraphQLResult } from './../../amplify-bootstrapper/bootstrap-amplify';

import { CreatePoolPlayerInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet, CreatePoolPlayerMutation, UpdatePoolPlayerInput, UpdatePoolPlayerMutation, SearchPoolPlayersQuery, SearchablePoolPlayerConnection, SearchablePoolPlayerFilterInput, PoolPlayer } from '../../codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, searchPoolPlayers, searchUserWallets } from '../../graphql/queries';
import { createPool, createPoolPlayer, createUserWallet, updatePoolPlayer } from '../../graphql/mutations';

export class PoolPlayerService {

    constructor() {

    }

    async searchPoolPlayers(searchablePoolPlayerFilterInput :SearchablePoolPlayerFilterInput): Promise<SearchablePoolPlayerConnection> { 
        
        const graphqlResult = await API.graphql(graphqlOperation(searchPoolPlayers,
            { input: searchablePoolPlayerFilterInput } 
        )) as GraphQLResult<SearchPoolPlayersQuery>;
        
        console.log('graphqlResult', JSON.stringify(graphqlResult), null, 2);

        return graphqlResult.data?.searchPoolPlayers as SearchablePoolPlayerConnection;
    }

    async createPoolPlayer(createPoolPlayerInput: CreatePoolPlayerInput): Promise<PoolPlayer> { 
        const graphqlResult = await API.graphql(graphqlOperation(createPoolPlayer,
            { input: createPoolPlayerInput } 
        )) as GraphQLResult<CreatePoolPlayerMutation>;
        
        console.log('graphqlResult', JSON.stringify(graphqlResult), null, 2);

        return graphqlResult.data?.createPoolPlayer as PoolPlayer;
    }

    async updatePoolPlayer(updatePoolPlayerInput: UpdatePoolPlayerInput): Promise<PoolPlayer> { 
        const graphqlResult = await API.graphql(graphqlOperation(updatePoolPlayer,
            { input: updatePoolPlayerInput } 
        )) as GraphQLResult<UpdatePoolPlayerMutation>;
        
        console.log('graphqlResult', JSON.stringify(graphqlResult), null, 2);

        return graphqlResult.data?.updatePoolPlayer as PoolPlayer;
    }
   
}