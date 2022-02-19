
import { Framework } from '@vechain/connex-framework'
// import { Driver, SimpleNet } from '@vechain/connex-driver'

import { API, graphqlOperation } from '../../../library/src/amplify-bootstrapper/bootstrap-amplify';
import { GraphQLResult } from '../../../library/node_modules/@aws-amplify/api-graphql';

import { getCreatePoolEventLogV2, getPlayerJoinedPoolEventLogV2, getPlayerLeftPoolEventLogV2, getPoolAwaitingExecutionEventLogV2, getPoolCompletedEventLogV2, getPoolSuccessfullBlockEventsProcessed } from '../../../library/src/graphql/queries';

import {
    createPlayerJoinedPoolEventLogV2,
    // createEventLogMeta,
    createPoolSuccessfullBlockEventsProcessed,
    deletePoolSuccessfullBlockEventsProcessed,
    updatePoolSuccessfullBlockEventsProcessed
} from '../../../library/src/graphql/mutations';

import {
    //CreateCreatePoolEventDecodedInput,
    CreateCreatePoolEventLogV2Input,
    CreatePlayerJoinedPoolEventLogV2Input,
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
    PlayerJoinedPoolEventLogV2,
    PlayerLeftPoolEventLogV2,
    PoolAwaitingExecutionEventLogV2,
    PoolCompletedEventLogV2,
    PoolSuccessfullBlockEventsProcessed,
    UpdatePoolSuccessfullBlockEventsProcessedMutation
} from '../../../library/src/codegen/API';


import {
    createCreatePoolEventLogV2,
    // createCreatePoolEventDecoded,    

    createPlayerLeftPoolEventLogV2,


    createPoolCompletedEventLogV2,


    createPoolAwaitingExecutionEventLogV2,


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
        return graphqlResult.data?.getCreatePoolEventLogV2;
    }

    async createCreatePoolEventLog(rawThorEvent: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>): Promise<CreatePoolEventLogV2> {
        try {

            const graphqlResult = await API.graphql(graphqlOperation(createCreatePoolEventLogV2, {
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

            return graphqlResult.data?.createCreatePoolEventLogV2;
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
        return graphqlResult.data?.getPlayerJoinedPoolEventLogV2;
    }
    async createPlayerJoinedPoolEventLog(rawThorEvent: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>): Promise<PlayerJoinedPoolEventLogV2> {
        try {

            const graphqlResult = await API.graphql(graphqlOperation(createPlayerJoinedPoolEventLogV2, {
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
                } as CreatePlayerJoinedPoolEventLogV2Input
            }
            )) as GraphQLResult<CreatePlayerJoinedPoolEventLogV2Mutation>;

            console.log('createPlayerJoinedPoolEventLog', graphqlResult);

            return graphqlResult.data?.createPlayerJoinedPoolEventLogV2;
        }
        catch (e) {
            console.log('EXCEPTION OCCURRED', e);
            throw e;
        }
    }
    /* PlayerJoinedPoolEventLog */

    /* PlayerLeftPoolEventLog */
    async getPlayerLeftPoolEventLogByTxId(txId: string): Promise<PlayerLeftPoolEventLogV2> {
        const graphqlResult = await API.graphql(graphqlOperation(getPlayerLeftPoolEventLogV2, { txID: txId })) as GraphQLResult<GetPlayerLeftPoolEventLogV2Query>;
        return graphqlResult.data?.getPlayerLeftPoolEventLogV2;
    }
    async createPlayerLeftPoolEventLog(rawThorEvent: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>): Promise<PlayerLeftPoolEventLogV2> {
        try {

            const graphqlResult = await API.graphql(graphqlOperation(createPlayerLeftPoolEventLogV2, {
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
                } as CreatePlayerLeftPoolEventLogV2Mutation
            }
            )) as GraphQLResult<CreatePlayerLeftPoolEventLogV2Mutation>;

            console.log('createPlayerLeftPoolEventLog', graphqlResult);

            return graphqlResult.data?.createPlayerLeftPoolEventLogV2;
        }
        catch (e) {
            console.log('EXCEPTION OCCURRED', e);
            throw e;
        }
    }
    /* PlayerLeftPoolEventLog */

    /* AwaitingPoolExecutionEventLog */
    async getAwaitingPoolExecutionEventLogByTxId(txId: string): Promise<PoolAwaitingExecutionEventLogV2> {
        const graphqlResult = await API.graphql(graphqlOperation(getPoolAwaitingExecutionEventLogV2, { txID: txId })) as GraphQLResult<GetPoolAwaitingExecutionEventLogV2Query>;
        return graphqlResult.data?.getPoolAwaitingExecutionEventLogV2;
    }
    async createAwaitingPoolExecutionEventLog(rawThorEvent: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>): Promise<PoolAwaitingExecutionEventLogV2> {
        try {

            const graphqlResult = await API.graphql(graphqlOperation(createPoolAwaitingExecutionEventLogV2, {
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

                } as CreatePlayerJoinedPoolEventLogV2Mutation
            }
            )) as GraphQLResult<CreatePoolAwaitingExecutionEventLogV2Mutation>;

            console.log('createAwaitingPoolExecutionEventLog', graphqlResult);

            return graphqlResult.data?.createPoolAwaitingExecutionEventLogV2;
        }
        catch (e) {
            console.log('EXCEPTION OCCURRED', e);
            throw e;
        }
    }
    /* AwaitingPoolExecutionEventLog */

    /* GetPoolCompletedEventLogQuery */
    async getPoolCompletedEventLogByTxId(txId: string): Promise<PoolCompletedEventLogV2> {
        const graphqlResult = await API.graphql(graphqlOperation(getPoolCompletedEventLogV2, { txID: txId })) as GraphQLResult<GetPoolCompletedEventLogV2Query>;
        return graphqlResult.data?.getPoolCompletedEventLogV2;
    }
    async createPoolCompletedEventLog(rawThorEvent: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>): Promise<PoolCompletedEventLogV2> {
        try {

            const graphqlResult = await API.graphql(graphqlOperation(createPoolCompletedEventLogV2, {
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

                } as CreatePoolCompletedEventLogV2Mutation
            }
            )) as GraphQLResult<CreatePoolCompletedEventLogV2Mutation>;

            console.log('createPoolCompletedEventLog', graphqlResult);

            return graphqlResult.data?.createPoolCompletedEventLogV2;
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