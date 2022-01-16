"use strict";
import { doesNotMatch } from 'assert';
import { expect } from 'chai';
import { assert } from 'console';
import 'mocha';


import { GraphQLService } from '../src/services/graphql-service';

/**
 * Test Setup
 */
before(async () => {
    // console.log('init running..');
    // blockchainEventProcessorService = new BlockchainEventProcessorService();
    // await blockchainEventProcessorService.initialize();
    // console.log('init completed');
})

describe('can query the last block table with amplify api graphql',
     () => {
         it('should return true', async () => {            

            const graphql = new GraphQLService();
            const result = await graphql.test();

             //expect(blockchainEventProcessorService).is.not.null.to.equal(true);
         });
 });