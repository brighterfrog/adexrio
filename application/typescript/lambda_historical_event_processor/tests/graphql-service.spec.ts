"use strict";
import { doesNotMatch } from 'assert';
import { expect } from 'chai';
import { assert } from 'console';
import 'mocha';


/* remove me*/
import { API, graphqlOperation } from '../../library/src/amplify-bootstrapper/bootstrap-amplify';
import { GraphQLResult } from '../../library/node_modules/@aws-amplify/api-graphql';

import { getCreatePoolEventLogV2, getPoolSuccessfullBlockEventsProcessed } from '../../library/src/graphql/queries';

import { 
    //createEventLogMeta,
    createPoolSuccessfullBlockEventsProcessed, 
    deletePoolSuccessfullBlockEventsProcessed, 
    updatePoolSuccessfullBlockEventsProcessed 
} from '../../library/src/graphql/mutations';

import { 
    // CreateCreatePoolEventDecodedInput,
    CreateCreatePoolEventLogV2Input,
    // CreateEventLogMetaInput,
    // CreateEventLogMetaMutation,
    CreatePoolEventLogV2,
    CreatePoolSuccessfullBlockEventsProcessedMutation, 
    DeletePoolSuccessfullBlockEventsProcessedMutation, 
    GetPoolSuccessfullBlockEventsProcessedQuery, 
    PoolSuccessfullBlockEventsProcessed, 
    SearchCreatePoolEventLogV2sQuery, 
    UpdatePoolSuccessfullBlockEventsProcessedMutation 
} from '../../library/src/codegen/API';


import { 
    createCreatePoolEventLogV2,     
    //createCreatePoolEventDecoded,

    createPlayerJoinedPoolEventLogV2, 
    
    
    createPlayerLeftPoolEventLogV2, 
    

    createPoolCompletedEventLogV2,
    

    createPoolAwaitingExecutionEventLogV2,
    

} from '../../library/src/graphql/mutations';

import { 
  searchCreatePoolEventLogV2s
} from '../../library/src/graphql/queries'

import {     
    SearchableCreatePoolEventLogV2Connection,
    
    CreateCreatePoolEventLogV2Mutation, 
    // CreateCreatePoolEventDecodedMutation,    

    CreatePlayerJoinedPoolEventLogV2Mutation,         
    

    CreatePlayerLeftPoolEventLogV2Mutation,
    

    CreatePoolCompletedEventLogV2Mutation,
    

    CreatePoolAwaitingExecutionEventLogV2Mutation,
    

} from '../../library/src/codegen/API';




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

// describe('can insert into the block table with amplify api graphql',
//      () => {
//          it('should return true', async () => {            

//             const randomNumber = Math.floor(Math.random() * (100 - 0) + 0);
//             const graphql = new GraphQLService();
            
//             const result = await graphql.upsertPoolSuccessfullBlockEventsProcessed(randomNumber);
            
//             console.log('test returned result', result);
            
//              expect(result.lambdaProcessorDecisionCheckForNextBlocknumber).to.equal(randomNumber);
//          });
//  });

// describe('can query the last block table with amplify api graphql',
//      () => {
//          it('should return true', async () => {            

//             const graphql = new GraphQLService();
//             const result = await graphql.getPoolLastBlockEventsProcessed();
            
//             console.log('test returned result', result);
            
//             expect(result.lambdaProcessorDecisionCheckForNextBlocknumber).is.greaterThan(0);
//          });
//  });

// WORKS
 describe('can insert graphql CreateEventLog event',
 () => {
     it('should return true', async () => {            

        const graphql = new GraphQLService();

          const rawEvent = {
            address: '0x8d99795e74fdcbc1fed412874d04d3ac85808e2e',
            topics: [
              '0x055c5881ecddd2b670014114d0806730877835ac63b0299a9270f81b00bff672',
              '0x00000000000000000000000000000000000000000000000000000000000001ad',
              '0x00000000000000000000000080a14141080f878260340986c7cf6e4a6b2ac504',
              '0x0000000000000000000000000000000000000000000000000000000061df060e'
            ],
            data: '0x',
            meta: {
              blockID: '0x00aa1d71066e37f7bca5ff00393bfbbda8f82466714f50bf8a83a3c0204f1d58',
              blockNumber: 11148657,
              blockTimestamp: 1642006030,
              txID: '0x31991f6e50d3acc2cde1862303936875b5ab704beccd369104a649988538aea6',
              txOrigin: '0x80a14141080f878260340986c7cf6e4a6b2ac504',
              clauseIndex: 0
            },
            decoded: {
              '0': '429',
              '1': '0x80a14141080f878260340986c7cf6e4a6b2ac504',
              '2': '1642006030',
              gameId: '429',
              player: '0x80a14141080f878260340986c7cf6e4a6b2ac504',
              dateTime: '1642006030'
            }
          };
   
        const result = await graphql.createCreatePoolEventLog(rawEvent);

        console.log('test done', result);              
                       
     });
});

//WORKS
// describe('can search graphql CreateEventLog event',
// () => {
//     it('should return true', async () => {            

//        const graphql = new GraphQLService();
       
//          const searchCreatePoolEventLogsResult = await API.graphql(graphqlOperation(searchCreatePoolEventLogs, { 
//             filter: {
//               decodedGameId: { eq: "429" },              
//               metaBlockID: { eq: "0x00aa1d71066e37f7bca5ff00393bfbbda8f82466714f50bf8a83a3c0204f1d58"}              
//             }
//           } 
//         )) as GraphQLResult<SearchCreatePoolEventLogsQuery>;
                        
//        console.log('eventLogMetaResult done', searchCreatePoolEventLogsResult);  
//        console.log('items', searchCreatePoolEventLogsResult.data?.searchCreatePoolEventLogs.items);             
                      
//     });
// });

// describe('can get graphql CreateEventLog event by txID',
// () => {
//     it('should return true', async () => {            

//        const graphql = new GraphQLService();
       
//        const result = await API.graphql(graphqlOperation(getCreatePoolEventLogV2, { txID: '0x31991f6e50d3acc2cde1862303936875b5ab704beccd369104a649988538aea6' }  )) as GraphQLResult<SearchCreatePoolEventLogV2sQuery>;
                        
//        console.log('getCreatePoolEventLog done', result);                               
//     });
// });

//  describe('can delete test block from the block table',
//      () => {
//          it('should return true', async () => {            

//             const graphql = new GraphQLService();
//             const result = await graphql.deletePoolSuccessfullBlockEventsProcessed();
//             console.log(result);
            
//              //expect(blockchainEventProcessorService).is.not.null.to.equal(true);
//          });
//  });

