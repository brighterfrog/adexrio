
import { Framework } from '@vechain/connex-framework'
// import { Driver, SimpleNet } from '@vechain/connex-driver'

import { API, graphqlOperation } from '../../../library/src/amplify-bootstrapper/bootstrap-amplify';
import { GraphQLResult } from '../../../library/node_modules/@aws-amplify/api-graphql/lib-esm';

import { getCreatePoolEventLogV2, getPlayerJoinedPoolEventLogV2, getPlayerLeftPoolEventLogV2, getPoolAwaitingExecutionEventLogV2, getPoolCompletedEventLogV2, getPoolSuccessfullBlockEventsProcessedV2 } from '../../../library/src/graphql/queries';

import {
    // createEventLogMeta,
    createPoolSuccessfullBlockEventsProcessed,
    deletePoolSuccessfullBlockEventsProcessed,
    updatePoolSuccessfullBlockEventsProcessed
} from '../../../library/src/graphql/mutations';

import {
    //CreateCreatePoolEventDecodedInput,
    CreateCreatePoolEventLogV2Input,
    CreatePoolAwaitingExecutionEventLogV2MutationVariables,
    //CreateEventLogMetaInput,
    //CreateEventLogMetaMutation,
    CreatePoolEventLogV2,
    CreatePoolSuccessfullBlockEventsProcessedMutation,
    DeletePoolSuccessfullBlockEventsProcessedMutation,
    GetCreatePoolEventLogV2Query,
    GetPlayerJoinedPoolEventLogV2Query,
    GetPlayerLeftPoolEventLogV2Query,
    GetPoolAwaitingExecutionEventLogV2Query,
    GetPoolCompletedEventLogV2Query,
    GetPoolSuccessfullBlockEventsProcessedQuery,
    PlayerJoinedPoolEventV2Log,
    PlayerLeftPoolEventV2Log,
    PoolAwaitingExecutionEventLogV2,
    PoolCompletedEventLogV2,
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

    CreateCreatePoolEventLogV2Mutation,
    //CreateCreatePoolEventDecodedMutation,    

    CreatePlayerJoinedPoolEventLogV2Mutation,


    CreatePlayerLeftPoolEventLogV2Mutation,


    CreatePoolCompletedEventLogV2Mutation,


    CreatePoolAwaitingExecutionEventLogV2Mutation,


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
    async getCreatePoolEventLogByTxId(txId: string): Promise<CreatePoolEventLogV2> {
        const graphqlResult = await API.graphql(graphqlOperation(getCreatePoolEventLogV2, { txID: txId })) as GraphQLResult<GetCreatePoolEventLogV2Query>;
        return graphqlResult.data?.getCreatePoolEventLog;
    }

    async createCreatePoolEventLog(rawThorEvent: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>): Promise<CreatePoolEventLogV2> {
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
                } as CreateCreatePoolEventLogV2Input
            }
            )) as GraphQLResult<CreateCreatePoolEventLogV2Mutation>;

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
    async getPlayerJoinedPoolEventLogByTxId(txId: string): Promise<PlayerJoinedPoolEventLogV2> {
        const graphqlResult = await API.graphql(graphqlOperation(getPlayerJoinedPoolEventLogV2, { txID: txId })) as GraphQLResult<GetPlayerJoinedPoolEventLogV2Query>;
        return graphqlResult.data?.getPlayerJoinedPoolEventLog;
    }
    async createPlayerJoinedPoolEventLog(rawThorEvent: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>): Promise<PlayerJoinedPoolEventLogV2> {
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