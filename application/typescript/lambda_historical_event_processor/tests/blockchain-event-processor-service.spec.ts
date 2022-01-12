"use strict";
import { doesNotMatch } from 'assert';
import { expect } from 'chai';
import 'mocha';


// Production values
process.env.NODE_ENV = "prod";
process.env.VECHAIN_API_NODE = "https://vethor-node.vechain.com";
process.env.RECORD_TYPE = "public";
process.env.RANDOM_ORG_API_ENDPOINT = "https://api.random.org/json-rpc/2/invoke";
process.env.DEBUG_ON = "false";
// Production values

import { EVENTS } from "../../library/dist/backend/blockchain/constants";
import { BlockchainEventProcessorService } from '../src/services/blockchain-event-processor-service';

let blockchainEventProcessorService;

/**
 * Test Setup
 */
before(async () => {      
    console.log('init running..');
    blockchainEventProcessorService = new BlockchainEventProcessorService();
    await blockchainEventProcessorService.initialize(); 
    console.log('init completed');   
})    
                     

describe('Can Create blockchain-event-process-service',
    () => {
        it('should return true', () => {            
            expect(blockchainEventProcessorService).is.not.null.to.equal(true);
        });
});

describe('Can get production GameCreatedEvent events',
    ()  => {
        it('should return true', async () => {
                      
            const events = await blockchainEventProcessorService.getAllEventsByNameStartingFromBlock(EVENTS.GameCreatedEvent, 0);                                 

            console.log('Test result events length', events.length);

            expect(events.length).is.not.lessThan(1);
                                
        });
});

describe('Can get production PlayerJoinedGameEvent events',
    ()  => {
        it('should return true', async () => {
                      
            const events = await blockchainEventProcessorService.getAllEventsByNameStartingFromBlock(EVENTS.PlayerJoinedGameEvent, 0);                                 

            console.log('events length', events.length);

            expect(events.length).is.not.lessThan(1);
                                
        });
});

describe('Can get production PlayerLeftGameEvent events',
    ()  => {
        it('should return true', async () => {
                      
            const events = await blockchainEventProcessorService.getAllEventsByNameStartingFromBlock(EVENTS.PlayerLeftGameEvent, 0);                                 

            console.log('events length', events.length);

            expect(events.length).is.not.lessThan(1);
                                
        });
});

describe('Can get production GameCompletedEvent events',
    ()  => {
        it('should return true', async () => {
                                    
            const events = await blockchainEventProcessorService.getAllEventsByNameStartingFromBlock(EVENTS.GameCompletedEvent, 0);                                 

            console.log('events length', events.length);

            expect(events.length).is.not.lessThan(1);
                                
        });
});

describe('Can get production GameAwaitingLotteryEvent events',
    ()  => {
        it('should return true', async () => {
                      
            const events = await blockchainEventProcessorService.getAllEventsByNameStartingFromBlock(EVENTS.GameAwaitingLotteryEvent, 0);                                 

            console.log('events length', events.length);

            expect(events.length).is.not.lessThan(1);
                                
        });
});



