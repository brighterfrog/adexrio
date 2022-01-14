
import { getHighestBlockNumberFromRecordBatch } from "./sqs-historical-service"
import { EVENTS } from "../../../library/dist/backend/blockchain/constants";
import { BlockchainEventProcessorService } from '../services/blockchain-event-retriever-service';
import { DynamodbEventProcessorService } from '../services/dynamodb-event-processor-service'
import { ContractRawEvent } from '../../src/models/types'

export class Orchestrator {
    
    blockchainEventProcessorService: BlockchainEventProcessorService;
    dynamodbEventProcessorService: DynamodbEventProcessorService;

    constructor() {
        this.blockchainEventProcessorService = new BlockchainEventProcessorService();
        this.dynamodbEventProcessorService = new DynamodbEventProcessorService();
    }

    async process(event: any): Promise<void> {
        const highestBlockMessageFromBatch = getHighestBlockNumberFromRecordBatch(event);

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

         //TODO:
        /*

            Iterate event types by block: orderByBlockSequence
        
            process Event Types by precedence & block sequence
                *blocks are already in sequential block order

        */

        const allEvents = await this.blockchainEventProcessorService.getAllEvents(eventsToRetrieve);

        await this.dynamodbEventProcessorService.processContractEvents(allEvents);

        // Check Db if event exists
        //     If NOT - write to table
        //     Streaming trigger update Pool Record table
        

    }

    async getAllEvents(eventsToRetrieve: ContractRawEvent[]) {

        return await this.blockchainEventProcessorService.getAllEvents(eventsToRetrieve);

    }
}