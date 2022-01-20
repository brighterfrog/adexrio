import { match } from "assert";
import { EVENTS } from "../../../library/src/backend/blockchain/constants";
import { ProcessEventsResult, ContractRawEvent, DynamodbEventProcessingList } from "../models/types";
import { GraphQLService } from "./graphql-service";


export class EventHandlerProcessMapper {
    eventHandlerFunctionMap: Map<string, Function>;
    eventProcessingStepsOrder: DynamodbEventProcessingList;
    graphqlService: GraphQLService;

    constructor(graphqlService: GraphQLService) {

        this.graphqlService = graphqlService;

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

      // Check Db if event exists
      // If NOT - write to table
      // Streaming trigger lambda will update Pool Record table
    private async gameCreatedEvent(eventsToHandle: ContractRawEvent): Promise<number> {
        console.log('handler gameCreatedEvent with', eventsToHandle.result.length);
        return Promise.resolve(eventsToHandle.result.length);
    }

    private async playerJoinedGameEvent(eventsToHandle: ContractRawEvent): Promise<number> {
        console.log('handler playerJoinedGameEvent with ', eventsToHandle.result.length);
        return Promise.resolve(eventsToHandle.result.length);
    }

    private async playerLeftGameEvent(eventsToHandle: ContractRawEvent): Promise<number> {
        console.log('handler playerLeftGameEvent with ', eventsToHandle.result.length);
        return Promise.resolve(eventsToHandle.result.length);
    }

    private async gameCompletedEvent(eventsToHandle: ContractRawEvent): Promise<number> {
        console.log('handler gameCompletedEvent with ', eventsToHandle.result.length);
        return Promise.resolve(eventsToHandle.result.length);
    }

    private async gameAwaitingLotteryEvent(eventsToHandle: ContractRawEvent): Promise<number> {
        console.log('handler gameAwaitingLotteryEvent with ', eventsToHandle.result.length);
        return Promise.resolve(eventsToHandle.result.length);
    }

    filterRawEventsByType(eventsToFilter: ContractRawEvent[], filterName: string): ContractRawEvent {
        const filteredEvents = eventsToFilter.filter( (item) => item.name === filterName );
        return filteredEvents[0];
   }
}


export class DynamodbEventProcessorService {
    
    eventHandlerProcessMap: EventHandlerProcessMapper;    
    
    constructor(eventHandlerProcessMap: EventHandlerProcessMapper) {
        this.eventHandlerProcessMap = eventHandlerProcessMap;
    }

    // return ProcessEventsResult
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
        contractEvents:  ContractRawEvent[], 
        eventHandlerProcessMapper: EventHandlerProcessMapper ): Promise<void> {

        sequential.forEach( async(stepEvent) => {
              const matchedRawEvents = eventHandlerProcessMapper.filterRawEventsByType(contractEvents, stepEvent);              
              const matchedHandler = eventHandlerProcessMapper.getHandlerForEventType(stepEvent);                            
              await matchedHandler(matchedRawEvents);
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
        contractEvents:  ContractRawEvent[], 
        eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<any> {
            
        const stepParallelPromiseArray = parallel.map(async (stepEvent): Promise<number> =>  {

            const matchedRawEvents = eventHandlerProcessMapper.filterRawEventsByType(contractEvents, stepEvent);
            const matchedHandler = eventHandlerProcessMapper.getHandlerForEventType(stepEvent);
            return matchedHandler(matchedRawEvents);
            
            //***** */

            //return this.internalHandleParallelSteps(stepEvent, contractEvents, eventHandlerProcessMapper)

            //***** */

            // return (async (): Promise<number> => {
              
            //     const matchedRawEvents = eventHandlerProcessMapper.filterRawEventsByType(contractEvents, stepEvent);
            //     const matchedHandler = eventHandlerProcessMapper.getHandlerForEventType(stepEvent);
            //     return matchedHandler(matchedRawEvents);
            // });
        });
              
        return stepParallelPromiseArray;
    }
    
    private async internalHandleParallelSteps(stepEvent: EVENTS,
        contractEvents:  ContractRawEvent[], 
        eventHandlerProcessMapper: EventHandlerProcessMapper): Promise<number>  {
              
        const matchedRawEvents = eventHandlerProcessMapper.filterRawEventsByType(contractEvents, stepEvent);
        const matchedHandler = eventHandlerProcessMapper.getHandlerForEventType(stepEvent);
        return await matchedHandler(matchedRawEvents);
    };
   

}
