import crypto from 'crypto';

import { API, graphqlOperation, GraphQLResult } from './../../amplify-bootstrapper/bootstrap-amplify';

import { CreatePoolPlayerInput, CreatePoolMutation, CreateUserWalletInput, CreateUserWalletMutation, Pool, PoolCategory, poolType, SearchableUserWalletFilterInput, SearchUserWalletsQuery, UserWallet, CreatePoolPlayerMutation, UpdatePoolPlayerInput, UpdatePoolPlayerMutation, SearchPoolPlayersQuery, SearchablePoolPlayerConnection, SearchablePoolPlayerFilterInput, PoolPlayer, CreateLotteryPoolAttributesInput, CreateLotteryPoolAttributesMutation, LotteryPoolAttributes } from '../../codegen/API';
import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, searchPoolPlayers, searchUserWallets } from '../../graphql/queries';
import { createLotteryPoolAttributes, createPool, createPoolPlayer, createUserWallet, updatePoolPlayer } from '../../graphql/mutations';

 export class LotteryPoolAttributesService {

     constructor() {

     }

    async createLotteryPoolAttributes(createLotteryPoolAttributesInput: CreateLotteryPoolAttributesInput): Promise<LotteryPoolAttributes> {
        const graphqlResult = await API.graphql(graphqlOperation(createLotteryPoolAttributes,
            { input: createLotteryPoolAttributesInput }
        )) as GraphQLResult<CreateLotteryPoolAttributesMutation>;
        console.log('createLotteryPoolAttributes', graphqlResult);

        return graphqlResult.data?.createLotteryPoolAttributes as LotteryPoolAttributes;
    }
    
 }