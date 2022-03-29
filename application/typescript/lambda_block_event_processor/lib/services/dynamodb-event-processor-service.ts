import { match } from "assert";
import { EVENTS } from "./../library/services/legacy_contract_v1_helpers/backend/blockchain/constants";
import { ProcessEventsResult, ContractRawEvent, DynamodbEventProcessingList } from "../models/types";
import { GraphQLService } from "./graphql-service";

export class EventHandlerProcessMapper {
    eventHandlerFunctionMap: Map<string, Function>;
    eventProcessingStepsOrder: DynamodbEventProcessingList;
    graphqlService: GraphQLService;

    constructor(graphql: GraphQLService) {

        this.graphqlService = graphql;

        this.eventHandlerFunctionMap = new Map<string, Function>([
            [EVENTS.GameCreatedEvent, this.gameCreatedEvent],
            [EVENTS.PlayerJoinedGameEvent, this.playerJoinedGameEvent],
            [EVENTS.PlayerLeftGameEvent, this.playerLeftGameEvent],
            [EVENTS.GameCompletedEvent, this.gameCompletedEvent],
            [EVENTS.GameAwaitingLotteryEvent, this.gameAwaitingLotteryEvent]
        ]);

        this.eventProcessingStepsOrder = {
            steps: [
                {
                    sequential: [EVENTS.GameCreatedEvent, EVENTS.PlayerJoinedGameEvent, EVENTS.PlayerLeftGameEvent, EVENTS.GameCompletedEvent],
                    parallel: [EVENTS.GameAwaitingLotteryEvent]
                }
            ]
        };
    }

    getHandlerForEventType(eventType: EVENTS): Function {
        return this.eventHandlerFunctionMap.get(eventType);
    }
    
    async gameCreatedEvent(eventsToHandle: ContractRawEvent, eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<void> {

        eventsToHandle.result.forEach(async (contractRawEvent) => {
                
                const existingEntry =  await eventHandlerProcessMapper.graphqlService.getCreatePoolEventLogByTxId(contractRawEvent.meta.txID);
                if (existingEntry) {
                    console.log('gameCreatedEvent entry already exists for', existingEntry);
                }
                else {
                    await eventHandlerProcessMapper.graphqlService.createCreatePoolEventLog(contractRawEvent);
                }                
        });

    }

    private async playerJoinedGameEvent(eventsToHandle: ContractRawEvent, eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<void> {
       
        eventsToHandle.result.forEach(async (contractRawEvent) => {
                
            const existingEntry =  await eventHandlerProcessMapper.graphqlService.getPlayerJoinedPoolEventLogByTxId(contractRawEvent.meta.txID);
            if (existingEntry) {
                console.log('playerJoinedGameEvent entry already exists for', existingEntry);
            }
            else {
                await eventHandlerProcessMapper.graphqlService.createPlayerJoinedPoolEventLog(contractRawEvent);
            }
            
        });

    }

    private async playerLeftGameEvent(eventsToHandle: ContractRawEvent, eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<void> {
        
        eventsToHandle.result.forEach(async (contractRawEvent) => {
                
            const existingEntry =  await eventHandlerProcessMapper.graphqlService.getPlayerLeftPoolEventLogByTxId(contractRawEvent.meta.txID);
            if (existingEntry) {
                console.log('entry already exists for', existingEntry);
            }
            else {
                await eventHandlerProcessMapper.graphqlService.createPlayerLeftPoolEventLog(contractRawEvent);
            }
            
        });

    }

    private async gameCompletedEvent(eventsToHandle: ContractRawEvent, eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<void> {
        eventsToHandle.result.forEach(async (contractRawEvent) => {
                
            const existingEntry =  await eventHandlerProcessMapper.graphqlService.getPoolCompletedEventLogByTxId(contractRawEvent.meta.txID);
            if (existingEntry) {
                console.log('entry already exists for', existingEntry);
            }
            else {
                await eventHandlerProcessMapper.graphqlService.createPoolCompletedEventLog(contractRawEvent);
            }
            
        });

    }

    private async gameAwaitingLotteryEvent(eventsToHandle: ContractRawEvent, eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<void> {
        eventsToHandle.result.forEach(async (contractRawEvent) => {
                
            const existingEntry =  await eventHandlerProcessMapper.graphqlService.getAwaitingPoolExecutionEventLogByTxId(contractRawEvent.meta.txID);
            if (existingEntry) {
                console.log('entry already exists for', existingEntry);
            }
            else {
                await eventHandlerProcessMapper.graphqlService.createAwaitingPoolExecutionEventLog(contractRawEvent);
            }            
        });
    }


    filterRawEventsByType(eventsToFilter: ContractRawEvent[], filterName: string): ContractRawEvent {
        const filteredEvents = eventsToFilter.filter((item) => item.name === filterName);
        return filteredEvents[0];
    }
}


export class DynamodbEventProcessorService {

    eventHandlerProcessMap: EventHandlerProcessMapper;

    constructor(eventHandlerProcessMap: EventHandlerProcessMapper) {
        this.eventHandlerProcessMap = eventHandlerProcessMap;
    }
    
    async processContractEvents(contractEvents: ContractRawEvent[]): Promise<void> {
        await this.processStepsOrderedList(this.eventHandlerProcessMap.eventProcessingStepsOrder, contractEvents, this.eventHandlerProcessMap);
    }

    private async processStepsOrderedList(list: DynamodbEventProcessingList, contractEvents: ContractRawEvent[], eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<void> {

        let allStepsPromiseArray: Promise<number>[] = [];

        list.steps.forEach(async (step) => {
            allStepsPromiseArray.concat(
                this.handleParallelSteps(step.parallel, contractEvents, eventHandlerProcessMapper)
            );

            await this.handleSequentialSteps(step.sequential, contractEvents, eventHandlerProcessMapper);
        });

        await Promise.all(allStepsPromiseArray);
    }

    private async handleSequentialSteps(
        sequential: EVENTS[],
        contractEvents: ContractRawEvent[],
        eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<void> {

        sequential.forEach(async (stepEvent) => {
            const matchedRawEvents = eventHandlerProcessMapper.filterRawEventsByType(contractEvents, stepEvent);
            const matchedHandler = eventHandlerProcessMapper.getHandlerForEventType(stepEvent);
            await matchedHandler(matchedRawEvents, eventHandlerProcessMapper);
        });

    }

    /**
     * @description non-awaited parallel step processing, waits at promise.all
     * @param parallel 
     * @param contractEvents 
     * @param eventHandlerProcessMapper 
     * @returns 
     */
    private async handleParallelSteps(
        parallel: EVENTS[],
        contractEvents: ContractRawEvent[],
        eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<any> {

        const stepParallelPromiseArray = parallel.map(async (stepEvent): Promise<number> => {

            const matchedRawEvents = eventHandlerProcessMapper.filterRawEventsByType(contractEvents, stepEvent);
            const matchedHandler = eventHandlerProcessMapper.getHandlerForEventType(stepEvent);
            
            return matchedHandler(matchedRawEvents, eventHandlerProcessMapper);          
        });

        return stepParallelPromiseArray;
    }  

}
