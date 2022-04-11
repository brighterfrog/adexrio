import { match } from "assert";
import { EVENTS } from "./../library/backend/blockchain/constants";
import { ProcessEventsResult, ContractRawEvent, DynamodbEventProcessingList } from "../models/types";
import { GraphQLService } from "./graphql-service";
import { Console } from "console";

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

        console.log('entering gameCreatedEvent loop');
        
            for (const contractRawEvent of eventsToHandle.result) {   
                console.log('inner loop call for txId of', contractRawEvent.meta.txID);
                const existingEntry =  await eventHandlerProcessMapper.graphqlService.getCreatePoolEventLogByTxId(contractRawEvent.meta.txID);

                console.log('existing entry check is', existingEntry);
                
                if (existingEntry) {
                    console.log('gameCreatedEvent entry already exists for', existingEntry);
                }
                else {
                    console.log('createCreatePoolEventLog entry called for', contractRawEvent);
                    await eventHandlerProcessMapper.graphqlService.createCreatePoolEventLog(contractRawEvent);
                }                
        }

    }

    private async playerJoinedGameEvent(eventsToHandle: ContractRawEvent, eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<void> {
       
        for (const contractRawEvent of eventsToHandle.result) {    
                
            const existingEntry =  await eventHandlerProcessMapper.graphqlService.getPlayerJoinedPoolEventLogByTxId(contractRawEvent.meta.txID);
            if (existingEntry) {
                console.log('playerJoinedGameEvent entry already exists for', existingEntry);
            }
            else {
                console.log('createPlayerJoinedPoolEventLog entry called for', contractRawEvent);
                await eventHandlerProcessMapper.graphqlService.createPlayerJoinedPoolEventLog(contractRawEvent);
            }
            
        };

    }

    private async playerLeftGameEvent(eventsToHandle: ContractRawEvent, eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<void> {
        
        // eventsToHandle.result.forEach(async (contractRawEvent) => {
        for (const contractRawEvent of eventsToHandle.result) {           
            const existingEntry =  await eventHandlerProcessMapper.graphqlService.getPlayerLeftPoolEventLogByTxId(contractRawEvent.meta.txID);
            if (existingEntry) {
                console.log('entry already exists for', existingEntry);
            }
            else {
                console.log('createPlayerLeftPoolEventLog entry called for', contractRawEvent);
                await eventHandlerProcessMapper.graphqlService.createPlayerLeftPoolEventLog(contractRawEvent);
            }
        }
            
        // });

    }

    private async gameCompletedEvent(eventsToHandle: ContractRawEvent, eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<void> {
        for (const contractRawEvent of eventsToHandle.result) {  
                
            const existingEntry =  await eventHandlerProcessMapper.graphqlService.getPoolCompletedEventLogByTxId(contractRawEvent.meta.txID);
            if (existingEntry) {
                console.log('entry already exists for', existingEntry);
            }
            else {
                console.log('createPoolCompletedEventLog entry called for', contractRawEvent);
                await eventHandlerProcessMapper.graphqlService.createPoolCompletedEventLog(contractRawEvent);
            }
            
        };

    }

    private async gameAwaitingLotteryEvent(eventsToHandle: ContractRawEvent, eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<void> {
        for (const contractRawEvent of eventsToHandle.result) {  
                
            const existingEntry =  await eventHandlerProcessMapper.graphqlService.getAwaitingPoolExecutionEventLogByTxId(contractRawEvent.meta.txID);
            if (existingEntry) {
                console.log('entry already exists for', existingEntry);
            }
            else {
                console.log('createAwaitingPoolExecutionEventLog entry called for', contractRawEvent);
                await eventHandlerProcessMapper.graphqlService.createAwaitingPoolExecutionEventLog(contractRawEvent);
            }            
        };
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
        console.log('processContractEvents');
        //console.log('contractEvents', contractEvents.length, JSON.stringify(contractEvents, null, 4));
        await this.processStepsOrderedList(this.eventHandlerProcessMap.eventProcessingStepsOrder, contractEvents, this.eventHandlerProcessMap);
    }

    private async processStepsOrderedList(list: DynamodbEventProcessingList, contractEvents: ContractRawEvent[], eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<void> {

        let allStepsPromiseArray: Promise<number>[] = [];

        for(const step of list.steps) {
        // list.steps.forEach(async (step) => {
            allStepsPromiseArray.concat(
                this.handleParallelSteps(step.parallel, contractEvents, eventHandlerProcessMapper)
            );

            await this.handleSequentialSteps(step.sequential, contractEvents, eventHandlerProcessMapper);
        // });
        }

        await Promise.all(allStepsPromiseArray);
    }

    private async handleSequentialSteps(
        sequential: EVENTS[],
        contractEvents: ContractRawEvent[],
        eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<void> {

        //* throws circular ref error
        //console.log('handleSequentialSteps eventHandlerProcessMapper',  JSON.stringify(eventHandlerProcessMapper, null, 4));

        for(const stepEvent of sequential) {
        // sequential.forEach(async (stepEvent) => {
            const matchedRawEvents = eventHandlerProcessMapper.filterRawEventsByType(contractEvents, stepEvent);

            console.log('stepEvent is', stepEvent);

            const matchedHandler = eventHandlerProcessMapper.getHandlerForEventType(stepEvent);
            //console.log('matchedHandler is', JSON.stringify(matchedHandler, null, 4));

            await matchedHandler(matchedRawEvents, eventHandlerProcessMapper);
        // });
        }

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
