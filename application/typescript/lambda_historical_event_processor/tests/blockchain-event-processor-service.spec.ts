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

describe('Can Create blockchain-event-process-service',
    () => {
        it('should return true', () => {
            const blockchainEventProcessorService = new BlockchainEventProcessorService();
            expect(blockchainEventProcessorService).is.not.null.to.equal(true);
        });
});

describe('Can get production create game events',
    ()  => {
        it('should return true', async () => {
                      
             const blockchainEventProcessorService = new BlockchainEventProcessorService();

             await blockchainEventProcessorService.initialize();                      
            
            const gameCreatedEvents = await blockchainEventProcessorService.getAllEventsByNameStartingFromBlock(EVENTS.GameCreatedEvent, 0);                                 

            console.log('TestArray Length', gameCreatedEvents.length);

            // gameCreatedEvents.forEach((item) => {
            // //   console.log('Decoded item', item.decoded);
            // });     
                       

        }).timeout(20000);
});



