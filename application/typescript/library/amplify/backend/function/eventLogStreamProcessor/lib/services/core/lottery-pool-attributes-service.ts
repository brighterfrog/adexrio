import crypto from 'crypto';

import { API, graphqlOperation, GraphQLResult } from '../../library/amplify-bootstrapper/bootstrap-amplify';

import { CreatePoolPlayerInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet, CreatePoolPlayerMutation, UpdatePoolPlayerInput, UpdatePoolPlayerMutation, SearchPoolPlayersQuery, SearchablePoolPlayerConnection, SearchablePoolPlayerFilterInput, PoolPlayer, CreateLotteryPoolAttributesInput, CreateLotteryPoolAttributesMutation, LotteryPoolAttributes, UpdateLotteryPoolAttributesInput, SearchableLotteryPoolAttributesFilterInput, SearchLotteryPoolAttributesQuery, SearchableLotteryPoolAttributesConnection } from '../../library/codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, searchLotteryPoolAttributes, searchPoolPlayers, searchUserWallets } from '../../library/graphql/queries';
import { createLotteryPoolAttributes, createPool, createPoolPlayer, createUserWallet, updateLotteryPoolAttributes, updatePoolPlayer } from '../../library/graphql/mutations';

 export class LotteryPoolAttributesService {
     
     constructor() {

     }

     async searchLotteryPoolAttributes(searchableLotteryPoolAttributesFilterInput : SearchableLotteryPoolAttributesFilterInput): Promise<SearchableLotteryPoolAttributesConnection> { 
        
        const graphqlResult = await API.graphql(graphqlOperation(searchLotteryPoolAttributes,
            { input: searchableLotteryPoolAttributesFilterInput } 
        )) as GraphQLResult<SearchLotteryPoolAttributesQuery>;
        
        console.log('graphqlResult', JSON.stringify(graphqlResult), null, 2);

        return graphqlResult.data?.searchLotteryPoolAttributes as SearchableLotteryPoolAttributesConnection;
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
        )) as GraphQLResult<CreateLotteryPoolAttributesMutation>;
        console.log('updateLotteryPoolAttributesInput', graphqlResult);

        return graphqlResult.data?.createLotteryPoolAttributes as LotteryPoolAttributes;
    }
    
 }