import crypto from 'crypto';

import { API, graphqlOperation, GraphQLResult } from '../../library/amplify-bootstrapper/bootstrap-amplify';

import { CreatePoolPlayerInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet, CreatePoolPlayerMutation, UpdatePoolPlayerInput, UpdatePoolPlayerMutation, SearchPoolPlayersQuery, SearchablePoolPlayerConnection, SearchablePoolPlayerFilterInput, PoolPlayer, CreateLotteryPoolAttributesInput, CreateLotteryPoolAttributesMutation, LotteryPoolAttributes, UpdateLotteryPoolAttributesInput, SearchableLotteryPoolAttributesFilterInput, SearchLotteryPoolAttributesQuery, SearchableLotteryPoolAttributesConnection, UpdateLotteryPoolAttributesMutation, GetLotteryPoolAttributesByPoolIdIndexQuery, GetLotteryPoolAttributesQueryVariables } from '../../library/codegen/API';
import { getCreatePoolEventLog, getLotteryPoolAttributesByPoolIdIndex, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, searchLotteryPoolAttributes, searchPoolPlayers, searchUserWallets } from '../../library/graphql/queries';
import { createLotteryPoolAttributes, createPool, createPoolPlayer, createUserWallet, updateLotteryPoolAttributes, updatePoolPlayer } from '../../library/graphql/mutations';

 export class LotteryPoolAttributesService {
     
     constructor() {

     }

    //  async searchLotteryPoolAttributes(searchableLotteryPoolAttributesFilterInput : SearchableLotteryPoolAttributesFilterInput): Promise<SearchableLotteryPoolAttributesConnection> { 
        
    //     const graphqlResult = await API.graphql(graphqlOperation(searchLotteryPoolAttributes,
    //         { input: searchableLotteryPoolAttributesFilterInput } 
    //     )) as GraphQLResult<SearchLotteryPoolAttributesQuery>;
        
    //     console.log('graphqlResult', JSON.stringify(graphqlResult), null, 2);

    //     return graphqlResult.data?.searchLotteryPoolAttributes as SearchableLotteryPoolAttributesConnection;
    // }

    async getLotteryPoolAttributesByIndex(poolId: String): Promise<LotteryPoolAttributes> { 
        
        const graphqlResult = await API.graphql(graphqlOperation(getLotteryPoolAttributesByPoolIdIndex,
            { poolId: poolId } as GetLotteryPoolAttributesByPoolIdIndexQuery
        )) as GraphQLResult<GetLotteryPoolAttributesByPoolIdIndexQuery>;
        
        console.log('graphqlResult', JSON.stringify(graphqlResult), null, 2);
        
        const items = graphqlResult.data?.getLotteryPoolAttributesByPoolIdIndex.items;

        return items.length === 1 ? items[0] as LotteryPoolAttributes : null;
    }

    async createLotteryPoolAttributes(createLotteryPoolAttributesInput: CreateLotteryPoolAttributesInput): Promise<LotteryPoolAttributes> {
        const graphqlResult = await API.graphql(graphqlOperation(createLotteryPoolAttributes,
            { input: createLotteryPoolAttributesInput }
        )) as GraphQLResult<CreateLotteryPoolAttributesMutation>;
        console.log('createLotteryPoolAttributes', graphqlResult);

        return graphqlResult.data?.createLotteryPoolAttributes as LotteryPoolAttributes;
    }

    async updateLotteryPoolAttributes(updateLotteryPoolAttributesInput: UpdateLotteryPoolAttributesInput): Promise<LotteryPoolAttributes> {
        const graphqlResult = await API.graphql(graphqlOperation(updateLotteryPoolAttributes,
            { input: updateLotteryPoolAttributesInput }
        )) as GraphQLResult<UpdateLotteryPoolAttributesMutation>;
        console.log('updateLotteryPoolAttributesInput', graphqlResult);

        return graphqlResult.data?.updateLotteryPoolAttributes as LotteryPoolAttributes;
    }
    
 }