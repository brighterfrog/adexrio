
import { getHighestBlockNumberFromRecordBatch } from "./sqs-historical-service"
import { EVENTS } from "../library/services/legacy_contract_v1_helpers/backend/blockchain/constants";
import { BlockchainEventProcessorService } from '../services/blockchain-event-retriever-service';
import { DynamodbEventProcessorService, EventHandlerProcessMapper } from '../services/dynamodb-event-processor-service'
import { ContractRawEvent } from '../../lib/models/types'
import { GraphQLService } from "./graphql-service";

export class Orchestrator {

    blockchainEventProcessorService: BlockchainEventProcessorService;
    dynamodbEventProcessorService: DynamodbEventProcessorService;
    eventsToRetrieve: ContractRawEvent[];
    graphQLService: GraphQLService;

    constructor() {
        this.graphQLService = new GraphQLService();
        this.blockchainEventProcessorService = new BlockchainEventProcessorService();
        this.dynamodbEventProcessorService = new DynamodbEventProcessorService(new EventHandlerProcessMapper(this.graphQLService));
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
    
    async process(event: any): Promise<void> {

        await this.blockchainEventProcessorService.initialize();
        //+1 to increment so we aren't doing last block twice. This comes from the  library/amplify/backend/function/addBlocktickerEventToSQS        
        const lastBlockProcessed = event.lambdaProcessorDecisionCheckForNextBlocknumber + 1;         
        const allEvents = await this.blockchainEventProcessorService.getAllEventsStartingAtBlocknumber(this.eventsToRetrieve, lastBlockProcessed);

        await this.dynamodbEventProcessorService.processContractEvents(allEvents);
               
        await this.graphQLService.upsertPoolSuccessfullBlockEventsProcessed(lastBlockProcessed);
    }    
}