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

        // this.eventProcessingStepsOrder = {
        //     steps: [
        //         {
        //             sequential: [EVENTS.GameAwaitingLotteryEvent, EVENTS.GameCreatedEvent, EVENTS.PlayerJoinedGameEvent, EVENTS.PlayerLeftGameEvent, EVENTS.GameCompletedEvent],                    
        //         }
        //     ]
        // };
        this.eventProcessingStepsOrder = {
            steps: [
                {
                    sequential: [EVENTS.GameCompletedEvent],                    
                }
            ]
        };
    }

    getHandlerForEventType(eventType: EVENTS): Function {
        console.log('entering getHandlerForEventType for eventType', eventType);     
        const fnMap = this.eventHandlerFunctionMap.get(eventType);
        
        if(fnMap) {
            console.log('fnMap found', fnMap);
        }
        else {
            console.log('fnMap map not found', fnMap);
        }
        

       return fnMap;
    }
    
    async gameCreatedEvent(eventsToHandle: ContractRawEvent): Promise<void> {

        console.log('entered handler for gameCreatedEvent');

        console.log('eventsToHandle', eventsToHandle);
        const self = this;
        
            for (const contractRawEvent of eventsToHandle.result) {  
                try{ 
                    console.log('inner loop call for txId of', contractRawEvent.meta.txID);
                    const existingEntry =  await self.graphqlService.getCreatePoolEventLogByTxId(contractRawEvent.meta.txID);

                    console.log('existing entry check is', existingEntry);
                    
                    if (existingEntry) {
                        console.log('gameCreatedEvent entry already exists for', existingEntry);
                    }
                    else {
                        console.log('createCreatePoolEventLog entry called for', contractRawEvent);
                        await self.graphqlService.createCreatePoolEventLog(contractRawEvent);
                    }   
                }
                catch(err){
                    console.log('for loop exception occurred :', JSON.stringify(err, null, 4));
                    throw err;
                }             
        }

    }

    private async playerJoinedGameEvent(eventsToHandle: ContractRawEvent): Promise<void> {
        console.log('entered handler for playerJoinedGameEvent');
        const self = this;
        for (const contractRawEvent of eventsToHandle.result) {    
                
            const existingEntry =  await self.graphqlService.getPlayerJoinedPoolEventLogByTxId(contractRawEvent.meta.txID);
            if (existingEntry) {
                console.log('playerJoinedGameEvent entry already exists for', existingEntry);
            }
            else {
                console.log('createPlayerJoinedPoolEventLog entry called for', contractRawEvent);
                await self.graphqlService.createPlayerJoinedPoolEventLog(contractRawEvent);
            }
            
        };

    }

    private async playerLeftGameEvent(eventsToHandle: ContractRawEvent): Promise<void> {
        console.log('entered handler for playerLeftGameEvent');
        const self = this;
        // eventsToHandle.result.forEach(async (contractRawEvent) => {
        for (const contractRawEvent of eventsToHandle.result) {           
            const existingEntry =  await self.graphqlService.getPlayerLeftPoolEventLogByTxId(contractRawEvent.meta.txID);
            if (existingEntry) {
                console.log('entry already exists for', existingEntry);
            }
            else {
                console.log('createPlayerLeftPoolEventLog entry called for', contractRawEvent);
                await self.graphqlService.createPlayerLeftPoolEventLog(contractRawEvent);
            }
        }
            
        // });

    }

    private async gameCompletedEvent(eventsToHandle: ContractRawEvent): Promise<void> {
        console.log('entered handler for gameCompletedEvent');
        const self = this;
        for (const contractRawEvent of eventsToHandle.result) {  
                
            const existingEntry =  await self.graphqlService.getPoolCompletedEventLogByTxId(contractRawEvent.meta.txID);
            if (existingEntry) {
                console.log('entry already exists for', existingEntry);
            }
            else {
                console.log('createPoolCompletedEventLog entry called for', contractRawEvent);
                await self.graphqlService.createPoolCompletedEventLog(contractRawEvent);
            }            
        };
    }

    private async gameAwaitingLotteryEvent(eventsToHandle: ContractRawEvent): Promise<void> {
        console.log('entered handler for gameAwaitingLotteryEvent');
        const self = this;
        for (const contractRawEvent of eventsToHandle.result) {  
                
            const existingEntry =  await self.graphqlService.getAwaitingPoolExecutionEventLogByTxId(contractRawEvent.meta.txID);
            if (existingEntry) {
                console.log('entry already exists for', existingEntry);
            }
            else {
                console.log('createAwaitingPoolExecutionEventLog entry called for', contractRawEvent);
                await self.graphqlService.createAwaitingPoolExecutionEventLog(contractRawEvent);
            }            
        };
    }


    filterRawEventsByType(eventsToFilter: ContractRawEvent[], filterName: string): ContractRawEvent {
        const filteredEvents = eventsToFilter.filter((item) => item.name === filterName);
        return filteredEvents[0];
    }
}


export class DynamodbEventProcessorService {

    eventHandlerProcessMapper: EventHandlerProcessMapper;

    constructor(eventHandlerProcessMapper: EventHandlerProcessMapper) {
        this.eventHandlerProcessMapper = eventHandlerProcessMapper;
    }
    
    async processContractEvents(contractEvents: ContractRawEvent[]): Promise<void> {
        console.log('PROCESS CONTRACT EVENTS BEGINNING');
        //console.log('contractEvents', contractEvents.length, JSON.stringify(contractEvents, null, 4));
        await this.processStepsOrderedList(this.eventHandlerProcessMapper.eventProcessingStepsOrder, contractEvents);
    }

    private async processStepsOrderedList(list: DynamodbEventProcessingList, contractEvents: ContractRawEvent[]): Promise<void> {

        let allStepsPromiseArray: Promise<number>[] = [];
        const self = this;

        for(const step of list.steps) {
        // list.steps.forEach(async (step) => {           

            await self.handleSequentialSteps(step.sequential, contractEvents);
        // });
        }              
    }

    private async handleSequentialSteps(
        sequential: EVENTS[],
        contractEvents: ContractRawEvent[]): Promise<void> {

        //* throws circular ref error
        //console.log('handleSequentialSteps eventHandlerProcessMapper',  JSON.stringify(eventHandlerProcessMapper, null, 4));

        const self = this;
        for(const stepEvent of sequential) {
        // sequential.forEach(async (stepEvent) => {
            const matchedRawEvents = self.eventHandlerProcessMapper.filterRawEventsByType(contractEvents, stepEvent);

            console.log('stepEvent is', stepEvent);

            const matchedHandler = self.eventHandlerProcessMapper.getHandlerForEventType.call(self.eventHandlerProcessMapper, stepEvent);
            
            //console.log('matchedHandler is', JSON.stringify(matchedHandler, null, 4));

            await matchedHandler.call(self.eventHandlerProcessMapper, matchedRawEvents);
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
        contractEvents: ContractRawEvent[]): Promise<any> {

        const self = this;
        const stepParallelPromiseArray = parallel.map(async (stepEvent): Promise<number> => {

            const matchedRawEvents = self.eventHandlerProcessMapper.filterRawEventsByType(contractEvents, stepEvent);
            const matchedHandler = self.eventHandlerProcessMapper.getHandlerForEventType.call(self.eventHandlerProcessMapper, stepEvent);
            
            return matchedHandler(self.eventHandlerProcessMapper, matchedRawEvents);          
        });

        return stepParallelPromiseArray;
    }  

}
