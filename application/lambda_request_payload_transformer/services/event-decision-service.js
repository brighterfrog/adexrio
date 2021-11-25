"use strict";
const block_history_event_type = "BLOCK_HISTORY_EVENT";
const block_ticker_event_type = "BLOCK_TICKER_EVENT"
const unknown_event_type = "UNKNOWN_EVENT"

function getEventType(currentBlockHeadNumber, lastBlockLoadedForEventsProcessorDecisionCheck) {
    console.log(`getEventType with parameters currentBlockHeadNumber ${currentBlockHeadNumber}, lastBlockLoadedForEventsProcessorDecisionCheck ${lastBlockLoadedForEventsProcessorDecisionCheck}`)
    
    let eventType;    
    if (currentBlockHeadNumber - lastBlockLoadedForEventsProcessorDecisionCheck >= 2) {        
        eventType = block_history_event_type;
    }
    else if (currentBlockHeadNumber === lastBlockLoadedForEventsProcessorDecisionCheck) {
        eventType = block_ticker_event_type; 
    }
    else {
        eventType = unknown_event_type;
    }
    console.log(`Returning getEventType of: ${eventType}`);
    return eventType;
}

module.exports = {
    block_history_event_type,
    block_ticker_event_type,
    unknown_event_type,
    getEventType
}