"use strict";
import { doesNotMatch } from 'assert';
import { expect } from 'chai';
import { assert } from 'console';
import 'mocha';


// Production values
process.env.NODE_ENV = "prod";
process.env.VECHAIN_API_NODE = "https://vethor-node.vechain.com";
process.env.RECORD_TYPE = "public";
process.env.RANDOM_ORG_API_ENDPOINT = "https://api.random.org/json-rpc/2/invoke";
process.env.DEBUG_ON = "false";
// Production values

import { EVENTS } from './../library/backend/blockchain/constants';
import { BlockchainEventProcessorService } from '../../lib/services/blockchain-event-retriever-service';
import { ContractRawEvent } from '../../lib/models/types'
import { EventHandlerProcessMapper } from '../../lib/services/dynamodb-event-processor-service';
import { GraphQLService } from '../../lib/services/graphql-service';

let blockchainEventProcessorService: BlockchainEventProcessorService;
let eventHandlerProcessMapper: EventHandlerProcessMapper;


/**
 * Test Setup
 */
before(async () => {
    console.log('init running..');
    blockchainEventProcessorService = new BlockchainEventProcessorService();
    eventHandlerProcessMapper = new EventHandlerProcessMapper(new GraphQLService());
    await blockchainEventProcessorService.initialize();
    console.log('init completed');
})

// async function getAllEventsByNameStartingFromBlock(eventName: string) {
//     const events = await blockchainEventProcessorService.getAllEventsByNameStartingFromBlock(eventName, 0);

//     console.log('Events total length', events.length);
//     console.log('last event is', events[events.length - 1]);

//     expect(events.length).is.not.lessThan(1);
// }

// describe('Can Create blockchain-event-process-service',
//     () => {
//         it('should return true', () => {            
//             expect(blockchainEventProcessorService).is.not.null.to.equal(true);
//         });
// });

// describe('Can retrieve production GameCreatedEvent events',
//     ()  => {
//         it('should return true', async () => {

//             await getAllEventsByNameStartingFromBlock(EVENTS.GameCreatedEvent);

//         });
// });

// describe('Can retrieve production PlayerJoinedGameEvent events',
//     ()  => {
//         it('should return true', async () => {

//             await getAllEventsByNameStartingFromBlock(EVENTS.PlayerJoinedGameEvent);

//         });
// });

// describe('Can retrieve production PlayerLeftGameEvent events',
//     ()  => {
//         it('should return true', async () => {

//             await getAllEventsByNameStartingFromBlock(EVENTS.PlayerLeftGameEvent);

//         });
// });

// describe('Can retrieve production GameCompletedEvent events',
//     ()  => {
//         it('should return true', async () => {

//             await getAllEventsByNameStartingFromBlock(EVENTS.GameCompletedEvent);

//         });
// });

// describe('Can retrieve production GameAwaitingLotteryEvent events',
//     ()  => {
//         it('should return true', async () => {

//             await getAllEventsByNameStartingFromBlock(EVENTS.GameAwaitingLotteryEvent);

//         });
// });

describe('Can retrieve all pool events',
    () => {
        it('should return true', async () => {
 
            const events = await blockchainEventProcessorService.getAllEventsStartingAtBlocknumber([
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
            ],
            0,
            blockchainEventProcessorService.getCurrentHeadBlockNumber()
            );


            console.log('getAllEvents array length', events.length);
    
            events.forEach( (item)=> {
                  console.log('Array with results', { 
                      name: item.name,
                      count: item.result.length
                  });                  
            });
                            

            expect(events.length).equals(5); 

        });
    });

// describe('Can retrieve a specific type of events by name filter',
//     () => {
//         it('should return true', async () => {

//             const eventList = [
//                 {
//                     name: EVENTS.GameCreatedEvent,
//                     result: null
//                 },
//                 {
//                     name: EVENTS.PlayerJoinedGameEvent,
//                     result: null
//                 },
//                 {
//                     name: EVENTS.PlayerLeftGameEvent,
//                     result: null
//                 },
//                 {
//                     name: EVENTS.GameCompletedEvent,
//                     result: null
//                 },
//                 {
//                     name: EVENTS.GameAwaitingLotteryEvent,
//                     result: null
//                 }
//             ];

//             const randomIndex = Math.floor(Math.random() * eventList.length);
//             const expectedEvent = eventList[randomIndex];

//             const currentHeadBlockNumber = blockchainEventProcessorService.getCurrentHeadBlockNumber();
 
//             const events = await blockchainEventProcessorService.getAllEventsStartingAtBlocknumber(eventList, 0, currentHeadBlockNumber);
            
//             const filteredEvents = eventHandlerProcessMapper.filterRawEventsByType(events, expectedEvent.name);

//             console.log('filteredEvents result array length', filteredEvents.result.length);    
//             console.log('filteredEvents with name', filteredEvents.name);

//             filteredEvents.result.forEach( (item)=> {
                              
//             });

//              expect(filteredEvents.name).eq(expectedEvent.name);            

//         });
//     });




