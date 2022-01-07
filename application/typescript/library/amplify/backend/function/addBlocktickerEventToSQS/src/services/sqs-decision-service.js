"use strict";
const CONSTANTS = require('./constants');

function getEventTypeBasedOnBlocksProcessed(currentBlockHeadNumber, lastBlockLoadedForEventsProcessorDecisionCheck) {  

    let eventType;    
    if ( (currentBlockHeadNumber - lastBlockLoadedForEventsProcessorDecisionCheck) === 1) {
        eventType = CONSTANTS.EVENT_TYPE.CURRENT_BLOCK; 
    }    
    else if ( (currentBlockHeadNumber - lastBlockLoadedForEventsProcessorDecisionCheck) > 1) {        
        eventType = CONSTANTS.EVENT_TYPE.HISTORICAL_BLOCKS
    }    
    else {
        eventType = CONSTANTS.EVENT_TYPE.UNKNOWN;
    }
    
    console.log(`Returning getEventQueueBasedOnBlocksProcessed of: ${eventType}`);
    
  return eventType;
}

module.exports = {
    getEventTypeBasedOnBlocksProcessed   
}