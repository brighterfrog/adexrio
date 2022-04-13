"use strict";
import { doesNotMatch } from 'assert';
import { expect } from 'chai';
import { assert } from 'console';
import 'mocha';


import { DynamodbEventProcessorService, EventHandlerProcessMapper } from '../../lib/services/dynamodb-event-processor-service';
import { BlockchainEventProcessorService } from '../../lib/services/blockchain-event-retriever-service'
import { GraphQLService } from '../../lib/services/graphql-service';
import { EVENTS } from '../library/backend/blockchain/constants';

process.env.NODE_ENV = "prod";
process.env.VECHAIN_API_NODE = "https://vethor-node.vechain.com";
process.env.RECORD_TYPE = "public";
process.env.RANDOM_ORG_API_ENDPOINT = "https://api.random.org/json-rpc/2/invoke";
process.env.DEBUG_ON = "false";

/**
 * Test Setup
 */
before(async () => {
    // console.log('init running..');
    // blockchainEventProcessorService = new BlockchainEventProcessorService();
    // await blockchainEventProcessorService.initialize();
    // console.log('init completed');
})

describe('can execute sequential events',
     () => {
         it('should return true', async () => {            
                    
            const eventHandlerProcessorMap = new EventHandlerProcessMapper(new GraphQLService());
            const dynamodbEventProcessorService = new DynamodbEventProcessorService(eventHandlerProcessorMap);
            const blockChainEventRetrieverService = new BlockchainEventProcessorService();
            
            await blockChainEventRetrieverService.initialize();

            const eventsToRetrieve = [
                {
                    name: EVENTS.GameCreatedEvent,
                    result: null
                },
                {
                    name: EVENTS.PlayerJoinedGameEvent,
                    result: null
                },
                {
                    name: EVENTS.PlayerLeftGameEvent,
                    result: null
                },
                {
                    name: EVENTS.GameCompletedEvent,
                    result: null
                },
                {
                    name: EVENTS.GameAwaitingLotteryEvent,
                    result: null
                }
            ];

            // eventHandlerProcessorMap.eventProcessingStepsOrder = {
            //     steps: [
            //         {
            //             sequential: [EVENTS.GameCreatedEvent, EVENTS.PlayerJoinedGameEvent, EVENTS.PlayerLeftGameEvent, EVENTS.GameCompletedEvent],
            //             parallel: [EVENTS.GameAwaitingLotteryEvent]
            //         }
            //     ]
            // };
            eventHandlerProcessorMap.eventProcessingStepsOrder = {
                steps: [
                    {
                        sequential: [EVENTS.GameCreatedEvent],
                        // parallel: []
                    }
                ]
            };

            const events = await blockChainEventRetrieverService.getAllEventsStartingAtBlocknumber(eventsToRetrieve, 0, blockChainEventRetrieverService.getCurrentHeadBlockNumber());
            


            await dynamodbEventProcessorService.processContractEvents(events);

            console.log('DONE');

         });
 });



