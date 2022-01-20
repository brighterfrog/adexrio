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

describe('can insert into the block table with amplify api graphql',
     () => {
         it('should return true', async () => {            

            const randomNumber = Math.floor(Math.random() * (100 - 0) + 0);
            const graphql = new GraphQLService();
            
            const result = await graphql.upsertPoolSuccessfullBlockEventsProcessed(randomNumber);
            
            console.log('test returned result', result);
            
             expect(result.lambdaProcessorDecisionCheckForNextBlocknumber).to.equal(randomNumber);
         });
 });

describe('can query the last block table with amplify api graphql',
     () => {
         it('should return true', async () => {            

            const graphql = new GraphQLService();
            const result = await graphql.getPoolLastBlockEventsProcessed();
            
            console.log('test returned result', result);
            
            expect(result.lambdaProcessorDecisionCheckForNextBlocknumber).is.greaterThan(0);
         });
 });

//  describe('can delete test block from the block table',
//      () => {
//          it('should return true', async () => {            

//             const graphql = new GraphQLService();
//             const result = await graphql.deletePoolSuccessfullBlockEventsProcessed();
//             console.log(result);
            
//              //expect(blockchainEventProcessorService).is.not.null.to.equal(true);
//          });
//  });

