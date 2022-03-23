
import { Framework } from '@vechain/connex-framework'
// import { Driver, SimpleNet } from '@vechain/connex-driver'

import { API, graphqlOperation } from '../../../library/src/amplify-bootstrapper/bootstrap-amplify';
import { GraphQLResult } from '../../../library/node_modules/@aws-amplify/api-graphql';

import { getCreatePoolEventLog, getPlayerJoinedPoolEventLog, getPlayerLeftPoolEventLog, getPoolAwaitingExecutionEventLog, getPoolCompletedEventLog, getPoolSuccessfullBlockEventsProcessed } from '../../../library/src/graphql/queries';

import {
    // createEventLogMeta,
    createPoolSuccessfullBlockEventsProcessed,
    deletePoolSuccessfullBlockEventsProcessed,
    updatePoolSuccessfullBlockEventsProcessed
} from '../../../library/src/graphql/mutations';

import {
    //CreateCreatePoolEventDecodedInput,
    CreateCreatePoolEventLogInput,
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
    PlayerJoinedPoolEventLog,
    PlayerLeftPoolEventLog,
    PoolAwaitingExecutionEventLog,
    PoolCompletedEventLog,
    PoolSuccessfullBlockEventsProcessed,
    UpdatePoolSuccessfullBlockEventsProcessedMutation
} from '../../../library/src/codegen/API';


import {
    createCreatePoolEventLog,
    // createCreatePoolEventDecoded,

    createPlayerJoinedPoolEventLog,


    createPlayerLeftPoolEventLog,


    createPoolCompletedEventLog,


    createPoolAwaitingExecutionEventLog,


} from '../../../library/src/graphql/mutations';

import {

    CreateCreatePoolEventLogMutation,
    //CreateCreatePoolEventDecodedMutation,    

    CreatePlayerJoinedPoolEventLogMutation,


    CreatePlayerLeftPoolEventLogMutation,


    CreatePoolCompletedEventLogMutation,


    CreatePoolAwaitingExecutionEventLogMutation,


} from '../../../library/src/codegen/API';

import {
    DecodedGameCreatedEvent,
    DecodedPlayerJoinedGameEvent
} from '../models/types';


export class GraphQLService {

    API: any;
    poolSuccessfullBlockEventsProcessedTableId: number;

    constructor() {
        this.poolSuccessfullBlockEventsProcessedTableId = 0;
        this.API = API;
    }

    /* CreatePoolEventLog */
    async getCreatePoolEventLogByTxId(txId: string): Promise<CreatePoolEventLog> {
        const graphqlResult = await API.graphql(graphqlOperation(getCreatePoolEventLog, { txID: txId })) as GraphQLResult<GetCreatePoolEventLogQuery>;
        return graphqlResult.data?.getCreatePoolEventLog;
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

            console.log('createCreatePoolEventLog', graphqlResult);

            return graphqlResult.data?.createCreatePoolEventLog;
        }
        catch (e) {
            console.log('EXCEPTION OCCURRED', e);
            throw e;
        }
    }
    /* CreatePoolEventLog */


    /* PlayerJoinedPoolEventLog */
    async getPlayerJoinedPoolEventLogByTxId(txId: string): Promise<PlayerJoinedPoolEventLog> {
        const graphqlResult = await API.graphql(graphqlOperation(getPlayerJoinedPoolEventLog, { txID: txId })) as GraphQLResult<GetPlayerJoinedPoolEventLogQuery>;
        return graphqlResult.data?.getPlayerJoinedPoolEventLog;
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
                } as CreatePlayerJoinedPoolEventLogMutation
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
            const result = await API.graphql(graphqlOperation(deletePoolSuccessfullBlockEventsProcessed, { input: { id: this.poolSuccessfullBlockEventsProcessedTableId } })) as GraphQLResult<DeletePoolSuccessfullBlockEventsProcessedMutation>;
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
        try {
            const result = await API.graphql(graphqlOperation(getPoolSuccessfullBlockEventsProcessed, { id: this.poolSuccessfullBlockEventsProcessedTableId })) as GraphQLResult<GetPoolSuccessfullBlockEventsProcessedQuery>;
            console.log('get completed', result);
            return result.data?.getPoolSuccessfullBlockEventsProcessed;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }

    async upsertPoolSuccessfullBlockEventsProcessed(latestBlocknumber: number): Promise<PoolSuccessfullBlockEventsProcessed> {
        try {

            const existingEntry = await this.getPoolLastBlockEventsProcessed();

            if (!existingEntry) {
                console.log('no existing entry found, adding initial');
                const result = await API.graphql(graphqlOperation(createPoolSuccessfullBlockEventsProcessed, {
                    input: {
                        id: this.poolSuccessfullBlockEventsProcessedTableId,
                        lambdaProcessorDecisionCheckForNextBlocknumber: latestBlocknumber
                    }
                })) as GraphQLResult<CreatePoolSuccessfullBlockEventsProcessedMutation>;
                return result.data?.createPoolSuccessfullBlockEventsProcessed;
            }
            else {
                console.log('existing entry found, updating');
                const result = await API.graphql(graphqlOperation(updatePoolSuccessfullBlockEventsProcessed, {
                    input: {
                        id: this.poolSuccessfullBlockEventsProcessedTableId,
                        lambdaProcessorDecisionCheckForNextBlocknumber: latestBlocknumber
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