
// const { getPoolSuccessfullBlockEventsProcessed } = require('../../../library/src/graphql/queries');
// const { createPoolSuccessfullBlockEventsProcessed, createPool } = require('../../../library/src/graphql/mutations');

import { getPoolSuccessfullBlockEventsProcessed } from '../../../library/src/graphql/queries';
import { createPoolSuccessfullBlockEventsProcessed, deletePoolSuccessfullBlockEventsProcessed, updatePoolSuccessfullBlockEventsProcessed } from '../../../library/src/graphql/mutations';

import { CreatePoolSuccessfullBlockEventsProcessedMutation, DeletePoolSuccessfullBlockEventsProcessedMutation, GetPoolSuccessfullBlockEventsProcessedQuery, PoolSuccessfullBlockEventsProcessed, UpdatePoolSuccessfullBlockEventsProcessedMutation } from '../../../library/src/codegen/API';

import { API, graphqlOperation } from '../../../library/src/amplify-bootstrapper/bootstrap-amplify';
import { GraphQLResult } from '../../../library/node_modules/@aws-amplify/api-graphql/lib-esm';

export class GraphQLService {

    poolSuccessfullBlockEventsProcessedTableId: number;

    constructor() {
        this.poolSuccessfullBlockEventsProcessedTableId = 0;
    }

    async deletePoolSuccessfullBlockEventsProcessed(): Promise<PoolSuccessfullBlockEventsProcessed> {
        try {
            const result = await API.graphql(graphqlOperation(deletePoolSuccessfullBlockEventsProcessed, { input: { id: this.poolSuccessfullBlockEventsProcessedTableId } })) as GraphQLResult<DeletePoolSuccessfullBlockEventsProcessedMutation>;
            console.log('delete completed', result);
            return result.data?.deletePoolSuccessfullBlockEventsProcessed;
        }
        catch (e) {
            console.log(e);
        }
    }

    async getPoolLastBlockEventsProcessed(): Promise<PoolSuccessfullBlockEventsProcessed> {
        try {
            const result = await API.graphql(graphqlOperation(getPoolSuccessfullBlockEventsProcessed, { id: this.poolSuccessfullBlockEventsProcessedTableId })) as GraphQLResult<GetPoolSuccessfullBlockEventsProcessedQuery>;                        
            console.log('get completed', result);
            return result.data?.getPoolSuccessfullBlockEventsProcessed;
        }
        catch (e) {
            console.log(e);
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
            console.log(e);            
        }
    }

}