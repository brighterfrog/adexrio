"use strict";
import {EVENT_TYPE} from './constants';

export class SQSDecisionService {
    
    constructor() {

    }

    getEventTypeBasedOnBlocksProcessed(currentBlockHeadNumber, lastBlockLoadedForEventsProcessorDecisionCheck) {  

        let eventType;    
        if ( (currentBlockHeadNumber - lastBlockLoadedForEventsProcessorDecisionCheck) === 1) {
            eventType = EVENT_TYPE.CURRENT_BLOCK; 
        }    
        else if ( (currentBlockHeadNumber - lastBlockLoadedForEventsProcessorDecisionCheck) > 1) {        
            eventType = EVENT_TYPE.HISTORICAL_BLOCKS
        }    
        else {
            eventType = EVENT_TYPE.UNKNOWN;
        }
        
        console.log(`Returning getEventQueueBasedOnBlocksProcessed of: ${eventType}`);
        
      return eventType;
    }

}