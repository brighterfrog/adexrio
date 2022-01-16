
import { getHighestBlockNumberFromRecordBatch } from "./sqs-historical-service"
import { EVENTS } from "../../../library/src/backend/blockchain/constants";
import { BlockchainEventProcessorService } from '../services/blockchain-event-retriever-service';
import { DynamodbEventProcessorService } from '../services/dynamodb-event-processor-service'
import { ContractRawEvent } from '../../src/models/types'

export class Orchestrator {
    
    blockchainEventProcessorService: BlockchainEventProcessorService;
    dynamodbEventProcessorService: DynamodbEventProcessorService;
    eventsToRetrieve: ContractRawEvent[];

    constructor() {
        this.blockchainEventProcessorService = new BlockchainEventProcessorService();
        this.dynamodbEventProcessorService = new DynamodbEventProcessorService();
        this.eventsToRetrieve = [
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
    }

       //TODO:
        /*
            Iterate event types by block: orderByBlockSequence
        
            process Event Types by precedence & block sequence
                *blocks are already in sequential block order

        */

        // Check Db if event exists
        //     If NOT - write to table
        //     Streaming trigger update Pool Record table
        
    async process(event: any): Promise<void> {
           
        const lastBlockProcessed = 0 + 1;   //+1 to increment so we aren't doing last block twice                
        const allEvents = await this.blockchainEventProcessorService.getAllEventsStartingAtBlocknumber(this.eventsToRetrieve, lastBlockProcessed);

        await this.dynamodbEventProcessorService.processContractEvents(allEvents);      
    }  
    
    reportProgress(event) {
        //const highestBlockMessageFromBatch = getHighestBlockNumberFromRecordBatch(event); 
    }
}