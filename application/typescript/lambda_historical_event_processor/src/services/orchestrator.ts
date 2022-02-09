
import { getHighestBlockNumberFromRecordBatch } from "./sqs-historical-service"
import { EVENTS } from "../../../library/src/backend/blockchain/constants";
import { BlockchainEventProcessorService } from '../services/blockchain-event-retriever-service';
import { DynamodbEventProcessorService, EventHandlerProcessMapper } from '../services/dynamodb-event-processor-service'
import { ContractRawEvent } from '../../src/models/types'
import { GraphQLService } from "./graphql-service";

export class Orchestrator {

    blockchainEventProcessorService: BlockchainEventProcessorService;
    dynamodbEventProcessorService: DynamodbEventProcessorService;
    eventsToRetrieve: ContractRawEvent[];

    constructor() {
        this.blockchainEventProcessorService = new BlockchainEventProcessorService();
        this.dynamodbEventProcessorService = new DynamodbEventProcessorService(new EventHandlerProcessMapper(new GraphQLService()));
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
    //Streaming trigger update Pool Record table

    async process(event: any): Promise<void> {

        const lastBlockProcessed = event.lambdaProcessorDecisionCheckForNextBlocknumber + 1;   //+1 to increment so we aren't doing last block twice. This comes from the  library/amplify/backend/function/addBlocktickerEventToSQS              
        const allEvents = await this.blockchainEventProcessorService.getAllEventsStartingAtBlocknumber(this.eventsToRetrieve, lastBlockProcessed);

        await this.dynamodbEventProcessorService.processContractEvents(allEvents);
    }    
}