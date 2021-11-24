"use strict";
const block_history_event_type = "BLOCK_HISTORY_EVENT";
const block_ticker_event_type = "BLOCK_TICKER_EVENT"
const unknown_event_type = "UNKNOWN_EVENT"

async function getEventType(currentBlockHeadNumber, lastBlockLoadedForEventsProcessorDecisionCheck) {
    if (currentBlockHeadNumber - lastBlockLoadedForEventsProcessorDecisionCheck >= 2) {
        return block_history_event_type;
    }
    else if (currentBlockHeadNumber === lastBlockLoadedForEventsProcessorDecisionCheck) {
        return block_ticker_event_type; 
    }
    else {
        return unknown_event_type;
    }
}

module.exports = {
    block_history_event_type,
    block_ticker_event_type,
    unknown_event_type,
    getEventType
}