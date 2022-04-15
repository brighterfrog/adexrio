import crypto from 'crypto';

import { API, graphqlOperation, GraphQLResult } from '../../library/amplify-bootstrapper/bootstrap-amplify';

import { CreatePoolPlayerInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet, CreatePoolPlayerMutation, UpdatePoolPlayerInput, UpdatePoolPlayerMutation, SearchPoolPlayersQuery, SearchablePoolPlayerConnection, SearchablePoolPlayerFilterInput, PoolPlayer, GetPoolPlayerbyPoolIdWalletIdIndexQuery, GetPoolPlayerbyPoolIdWalletIdIndexQueryVariables } from '../../library/codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolPlayer, getPoolPlayerbyPoolIdWalletIdIndex, getPoolPlayerbyUserWalletIdPoolIdStatusIdIndex, getPoolSuccessfullBlockEventsProcessed, searchPoolPlayers, searchUserWallets } from '../../library/graphql/queries';
import { createPool, createPoolPlayer, createUserWallet, updatePoolPlayer } from '../../library/graphql/mutations';

export class PoolPlayerService {

    constructor() {

    }

    async getPoolPlayerbyPoolIdWalletIdIndex(userWalletId, poolId): Promise<PoolPlayer> { 
        
        const graphqlResult = await API.graphql(graphqlOperation(getPoolPlayerbyPoolIdWalletIdIndex,
            {   
                userWalletId: { eq: userWalletId },
                poolId: poolId 
            } as GetPoolPlayerbyPoolIdWalletIdIndexQueryVariables
        )) as GraphQLResult<GetPoolPlayerbyPoolIdWalletIdIndexQuery>;
        
        console.log('graphqlResult', JSON.stringify(graphqlResult), null, 2);

        const items = graphqlResult.data?.getPoolPlayerbyPoolIdWalletIdIndex.items;

        return items.length === 0 ? null : items[0] as PoolPlayer;
    }

    // async searchPoolPlayers(searchablePoolPlayerFilterInput :SearchablePoolPlayerFilterInput): Promise<SearchablePoolPlayerConnection> { 
        
    //     const graphqlResult = await API.graphql(graphqlOperation(searchPoolPlayers,
    //         { input: searchablePoolPlayerFilterInput } 
    //     )) as GraphQLResult<SearchPoolPlayersQuery>;
        
    //     console.log('graphqlResult', JSON.stringify(graphqlResult), null, 2);

    //     return graphqlResult.data?.searchPoolPlayers as SearchablePoolPlayerConnection;
    // }

    async createPoolPlayer(createPoolPlayerInput: CreatePoolPlayerInput): Promise<PoolPlayer> { 
        const graphqlResult = await API.graphql(graphqlOperation(createPoolPlayer,
            { input: createPoolPlayerInput as CreatePoolPlayerInput } 
        )) as GraphQLResult<CreatePoolPlayerMutation>;
        
        console.log('graphqlResult', JSON.stringify(graphqlResult), null, 2);

        return graphqlResult.data?.createPoolPlayer as PoolPlayer;
    }

    async updatePoolPlayer(updatedPoolPlayer: PoolPlayer): Promise<PoolPlayer> { 

        delete updatedPoolPlayer.createdAt;
        delete updatedPoolPlayer.updatedAt;

        const graphqlResult = await API.graphql(graphqlOperation(updatePoolPlayer,
            { input: updatedPoolPlayer as UpdatePoolPlayerInput } 
        )) as GraphQLResult<UpdatePoolPlayerMutation>;
        
        console.log('graphqlResult', JSON.stringify(graphqlResult), null, 2);

        return graphqlResult.data?.updatePoolPlayer as PoolPlayer;
    }
   
}