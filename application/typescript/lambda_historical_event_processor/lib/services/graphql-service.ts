
import { Framework } from '@vechain/connex-framework'
// import { Driver, SimpleNet } from '@vechain/connex-driver'

import { API, graphqlOperation, GraphQLResult } from './../library/amplify-bootstrapper/bootstrap-amplify';
// import { GraphQLResult } from '../../../library/node_modules/@aws-amplify/api-graphql';

import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed, poolSuccessfullBlockEventsProcessedByPositionFieldIndex, searchPlayerJoinedPoolEventLogs } from './../library/graphql/queries';

import {
    createPlayerJoinedPoolEventLog,
    // createEventLogMeta,
    createPoolSuccessfullBlockEventsProcessed,
    deletePoolSuccessfullBlockEventsProcessed,
    updatePoolSuccessfullBlockEventsProcessed
} from './../library/graphql/mutations';

import {
    //CreateCreatePoolEventDecodedInput,
    CreateCreatePoolEventLogInput,
    CreatePlayerJoinedPoolEventLogInput,
    CreatePoolAwaitingExecutionEventLogMutationVariables,
    //CreateEventLogMetaInput,
    //CreateEventLogMetaMutation,
    CreatePoolEventLog,
    CreatePoolSuccessfullBlockEventsProcessedMutation,
    DeletePoolSuccessfullBlockEventsProcessedMutation,
    GetCreatePoolEventLogQuery,
    GetPlayerJoinedPoolEventLogQuery,
    GetPlayerLeftPoolEventLogQuery,
    GetPoolAwaitingExecutionEventLogQuery,
    GetPoolCompletedEventLogQuery,
    GetPoolSuccessfullBlockEventsProcessedQuery,
    ModelPoolSuccessfullBlockEventsProcessedConnection,
    PlayerJoinedPoolEventLog,
    PlayerLeftPoolEventLog,
    PoolAwaitingExecutionEventLog,
    PoolCompletedEventLog,
    PoolSuccessfullBlockEventsProcessed,
    PoolSuccessfullBlockEventsProcessedByPositionFieldIndexQuery,
    SearchablePlayerJoinedPoolEventLogConnection,
    UpdatePoolSuccessfullBlockEventsProcessedMutation
} from './../library/codegen/API';


import {
    createCreatePoolEventLog,
    // createCreatePoolEventDecoded,    

    createPlayerLeftPoolEventLog,


    createPoolCompletedEventLog,


    createPoolAwaitingExecutionEventLog,


} from './../library/graphql/mutations';

import {

    CreateCreatePoolEventLogMutation,
    //CreateCreatePoolEventDecodedMutation,    

    CreatePlayerJoinedPoolEventLogMutation,


    CreatePlayerLeftPoolEventLogMutation,


    CreatePoolCompletedEventLogMutation,


    CreatePoolAwaitingExecutionEventLogMutation,


} from './../library/codegen/API';

import {
    DecodedGameCreatedEvent,
    DecodedPlayerJoinedGameEvent
} from '../models/types';


export class GraphQLService {

    API: any;
    poolSuccessfullBlockEventsProcessedPositionFieldIndex: number;

    constructor() {
        this.poolSuccessfullBlockEventsProcessedPositionFieldIndex = 0;
        this.API = API;
    }

    /* CreatePoolEventLog */  
    
    /* no longer txID */

    async getCreatePoolEventLogByTxId(txId: string): Promise<CreatePoolEventLog> {
        console.log('before getCreatePoolEventLogByTxId');
        try {
                const graphqlResult = await API.graphql(graphqlOperation(getCreatePoolEventLog, { txID: txId })) as GraphQLResult<GetCreatePoolEventLogQuery>;
                console.log('after getCreatePoolEventLogByTxId', graphqlResult);

                return graphqlResult.data?.getCreatePoolEventLog;
            }
            catch (e) {
                console.log('EXCEPTION OCCURRED', e);
                throw e;
            }
    }

    async createCreatePoolEventLog(rawThorEvent: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>): Promise<CreatePoolEventLog> {
        try {

            const graphqlResult = await API.graphql(graphqlOperation(createCreatePoolEventLog, {
                input: {
                    txID: rawThorEvent.meta.txID,
                    raw: JSON.stringify(rawThorEvent),
                    metaBlockID: rawThorEvent.meta.blockID,
                    metaBlockNumber: rawThorEvent.meta.blockNumber,
                    metaBlockTimestamp: rawThorEvent.meta.blockTimestamp,
                    metaTxOrigin: rawThorEvent.meta.txOrigin,
                    metaClauseIndex: rawThorEvent.meta.clauseIndex,
                    decodedGameId: rawThorEvent.decoded.gameId,
                    decodedPlayer: rawThorEvent.decoded.player,
                    decodedDateTime: rawThorEvent.decoded.dateTime
                } as CreateCreatePoolEventLogInput
            }
            )) as GraphQLResult<CreateCreatePoolEventLogMutation>;

            console.log('createCreatePoolEventLog completed', graphqlResult);

            return graphqlResult.data?.createCreatePoolEventLog;
        }
        catch (e) {
            console.log('EXCEPTION OCCURRED', e);
            throw e;
        }
    }
    /* CreatePoolEventLog */


    /* PlayerJoinedPoolEventLog */
    /* change to search by txID */
    async getPlayerJoinedPoolEventLogByTxId(txId: string): Promise<PlayerJoinedPoolEventLog> {
        try {
        const graphqlResult = await API.graphql(graphqlOperation(searchPlayerJoinedPoolEventLogs, { filter: { txID: txId } })) as GraphQLResult<SearchablePlayerJoinedPoolEventLogConnection>;
        const searchItems = graphqlResult.data.items.length > 0 ? graphqlResult.data.items[0] : null;
        return searchItems;
        }
        catch (e) {
            console.log('EXCEPTION OCCURRED', e);
            throw e;
        }
    }
    async createPlayerJoinedPoolEventLog(rawThorEvent: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>): Promise<PlayerJoinedPoolEventLog> {
        try {

            const graphqlResult = await API.graphql(graphqlOperation(createPlayerJoinedPoolEventLog, {
                input: {
                    txID: rawThorEvent.meta.txID,
                    raw: JSON.stringify(rawThorEvent),
                    metaBlockID: rawThorEvent.meta.blockID,
                    metaBlockNumber: rawThorEvent.meta.blockNumber,
                    metaBlockTimestamp: rawThorEvent.meta.blockTimestamp,
                    metaTxOrigin: rawThorEvent.meta.txOrigin,
                    metaClauseIndex: rawThorEvent.meta.clauseIndex,
                    decodedGameId: rawThorEvent.decoded.gameId,
                    decodedPlayer: rawThorEvent.decoded.player,
                    decodedDateTime: rawThorEvent.decoded.dateTime                    
                } as CreatePlayerJoinedPoolEventLogInput
            }
            )) as GraphQLResult<CreatePlayerJoinedPoolEventLogMutation>;

            console.log('createPlayerJoinedPoolEventLog', graphqlResult);

            return graphqlResult.data?.createPlayerJoinedPoolEventLog;
        }
        catch (e) {
            console.log('EXCEPTION OCCURRED', e);
            throw e;
        }
    }
    /* PlayerJoinedPoolEventLog */

    /* PlayerLeftPoolEventLog */
    async getPlayerLeftPoolEventLogByTxId(txId: string): Promise<PlayerLeftPoolEventLog> {
        const graphqlResult = await API.graphql(graphqlOperation(getPlayerLeftPoolEventLog, { txID: txId })) as GraphQLResult<GetPlayerLeftPoolEventLogQuery>;
        return graphqlResult.data?.getPlayerLeftPoolEventLog;
    }
    async createPlayerLeftPoolEventLog(rawThorEvent: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>): Promise<PlayerLeftPoolEventLog> {
        try {

            const graphqlResult = await API.graphql(graphqlOperation(createPlayerLeftPoolEventLog, {
                input: {
                    txID: rawThorEvent.meta.txID,
                    raw: JSON.stringify(rawThorEvent),
                    metaBlockID: rawThorEvent.meta.blockID,
                    metaBlockNumber: rawThorEvent.meta.blockNumber,
                    metaBlockTimestamp: rawThorEvent.meta.blockTimestamp,
                    metaTxOrigin: rawThorEvent.meta.txOrigin,
                    metaClauseIndex: rawThorEvent.meta.clauseIndex,
                    decodedGameId: rawThorEvent.decoded.gameId,
                    decodedPlayer: rawThorEvent.decoded.player,
                    decodedDateTime: rawThorEvent.decoded.dateTime
                } as CreatePlayerLeftPoolEventLogMutation
            }
            )) as GraphQLResult<CreatePlayerLeftPoolEventLogMutation>;

            console.log('createPlayerLeftPoolEventLog', graphqlResult);

            return graphqlResult.data?.createPlayerLeftPoolEventLog;
        }
        catch (e) {
            console.log('EXCEPTION OCCURRED', e);
            throw e;
        }
    }
    /* PlayerLeftPoolEventLog */

    /* AwaitingPoolExecutionEventLog */
    async getAwaitingPoolExecutionEventLogByTxId(txId: string): Promise<PoolAwaitingExecutionEventLog> {
        const graphqlResult = await API.graphql(graphqlOperation(getPoolAwaitingExecutionEventLog, { txID: txId })) as GraphQLResult<GetPoolAwaitingExecutionEventLogQuery>;
        return graphqlResult.data?.getPoolAwaitingExecutionEventLog;
    }
    async createAwaitingPoolExecutionEventLog(rawThorEvent: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>): Promise<PoolAwaitingExecutionEventLog> {
        try {

            const graphqlResult = await API.graphql(graphqlOperation(createPoolAwaitingExecutionEventLog, {
                input: {
                    txID: rawThorEvent.meta.txID,
                    raw: JSON.stringify(rawThorEvent),
                    metaBlockID: rawThorEvent.meta.blockID,
                    metaBlockNumber: rawThorEvent.meta.blockNumber,
                    metaBlockTimestamp: rawThorEvent.meta.blockTimestamp,
                    metaTxOrigin: rawThorEvent.meta.txOrigin,
                    metaClauseIndex: rawThorEvent.meta.clauseIndex,
                    decodedGameId: rawThorEvent.decoded.gameId,
                    decodedStatus: rawThorEvent.decoded.status,
                    decodedType: rawThorEvent.decoded.type,
                    decodedDateTime: rawThorEvent.decoded.dateTime

                } as CreatePlayerJoinedPoolEventLogMutation
            }
            )) as GraphQLResult<CreatePoolAwaitingExecutionEventLogMutation>;

            console.log('createAwaitingPoolExecutionEventLog', graphqlResult);

            return graphqlResult.data?.createPoolAwaitingExecutionEventLog;
        }
        catch (e) {
            console.log('EXCEPTION OCCURRED', e);
            throw e;
        }
    }
    /* AwaitingPoolExecutionEventLog */

    /* GetPoolCompletedEventLogQuery */
    async getPoolCompletedEventLogByTxId(txId: string): Promise<PoolCompletedEventLog> {
        const graphqlResult = await API.graphql(graphqlOperation(getPoolCompletedEventLog, { txID: txId })) as GraphQLResult<GetPoolCompletedEventLogQuery>;
        return graphqlResult.data?.getPoolCompletedEventLog;
    }
    async createPoolCompletedEventLog(rawThorEvent: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>): Promise<PoolCompletedEventLog> {
        try {

            const graphqlResult = await API.graphql(graphqlOperation(createPoolCompletedEventLog, {
                input: {
                    txID: rawThorEvent.meta.txID,
                    raw: JSON.stringify(rawThorEvent),
                    metaBlockID: rawThorEvent.meta.blockID,
                    metaBlockNumber: rawThorEvent.meta.blockNumber,
                    metaBlockTimestamp: rawThorEvent.meta.blockTimestamp,
                    metaTxOrigin: rawThorEvent.meta.txOrigin,
                    metaClauseIndex: rawThorEvent.meta.clauseIndex,
                    decodedGameId: rawThorEvent.decoded.gameId,
                    decodedPlayer: rawThorEvent.decoded.player,
                    decodedDateTime: rawThorEvent.decoded.dateTime,
                    decodedWinningPayout: rawThorEvent.decoded.winningPayout,
                    decodedStatus: rawThorEvent.decoded.status,
                    decodedAuditRecordDrawId: rawThorEvent.decoded.auditRecordDrawId,
                    decodedType: rawThorEvent.decoded.type

                } as CreatePoolCompletedEventLogMutation
            }
            )) as GraphQLResult<CreatePoolCompletedEventLogMutation>;

            console.log('createPoolCompletedEventLog', graphqlResult);

            return graphqlResult.data?.createPoolCompletedEventLog;
        }
        catch (e) {
            console.log('EXCEPTION OCCURRED', e);
            throw e;
        }
    }
    /* GetPoolCompletedEventLogQuery */



    ///FOR TESTING
    async deletePoolSuccessfullBlockEventsProcessed(): Promise<PoolSuccessfullBlockEventsProcessed> {
        try {
            const result = await API.graphql(graphqlOperation(deletePoolSuccessfullBlockEventsProcessed, { input: { id: this.poolSuccessfullBlockEventsProcessedPositionFieldIndex } })) as GraphQLResult<DeletePoolSuccessfullBlockEventsProcessedMutation>;
            console.log('delete completed', result);
            return result.data?.deletePoolSuccessfullBlockEventsProcessed;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    ///FOR TESTING


  

    async getPoolLastBlockEventsProcessed(): Promise<PoolSuccessfullBlockEventsProcessed> {
        console.log('getPoolLastBlockEventsProcessed');

        try {
            const graphqlResult = await API.graphql(graphqlOperation(poolSuccessfullBlockEventsProcessedByPositionFieldIndex,
                { positionField: this.poolSuccessfullBlockEventsProcessedPositionFieldIndex }
            )) as GraphQLResult<PoolSuccessfullBlockEventsProcessedByPositionFieldIndexQuery>;
            
            console.log('poolSuccessfullBlockEventsProcessedByPositionFieldIndex', JSON.stringify(graphqlResult), null, 4);

            const connectionResult = graphqlResult.data.poolSuccessfullBlockEventsProcessedByPositionFieldIndex as ModelPoolSuccessfullBlockEventsProcessedConnection;

            console.log('graphqlResult.data.poolSuccessfullBlockEventsProcessedByPositionFieldIndex', connectionResult);
            
            return connectionResult.items.length > 0 ? connectionResult.items[0] as PoolSuccessfullBlockEventsProcessed : null;
        }
        catch (e) {
            console.log('exception caught in getPoolLastBlockEventsProcessed');
            console.log(JSON.stringify(e, null, 4));
            throw e;
        }
    }

    async upsertPoolSuccessfullBlockEventsProcessed(currentThorHeadBlockNumber: number): Promise<PoolSuccessfullBlockEventsProcessed> {
        try {

            const existingEntry = await this.getPoolLastBlockEventsProcessed();

            if (!existingEntry) {
                console.log('no existing entry found, adding initial');
                const result = await API.graphql(graphqlOperation(createPoolSuccessfullBlockEventsProcessed, {
                    input: {
                        positionField: this.poolSuccessfullBlockEventsProcessedPositionFieldIndex,
                        lambdaProcessorDecisionCheckForNextBlocknumber: currentThorHeadBlockNumber
                    }
                })) as GraphQLResult<CreatePoolSuccessfullBlockEventsProcessedMutation>;
                return result.data?.createPoolSuccessfullBlockEventsProcessed;
            }
            else {
                console.log('existing entry found, updating');
                const result = await API.graphql(graphqlOperation(updatePoolSuccessfullBlockEventsProcessed, {
                    input: {
                        id: existingEntry.id,
                        positionField: existingEntry.positionField,
                        lambdaProcessorDecisionCheckForNextBlocknumber: currentThorHeadBlockNumber
                    }
                })) as GraphQLResult<UpdatePoolSuccessfullBlockEventsProcessedMutation>;
                return result.data?.updatePoolSuccessfullBlockEventsProcessed;
            }

        }
        catch (e) {
            console.log('EXCEPTION OCCURRED', e);
            throw e;
        }
    }

}