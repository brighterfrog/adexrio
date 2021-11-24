"use strict";
const orchestrator = require('./services/orchestrator');

exports.handler = async (event, context) => {    
  await orchestrator.handleEvent(event, context);
};



/*
INPUT
payload: {
	headblock: 1232131
	payload_event_name: block_ticker #block_history #block_ticker, block_number
}
*/

/*
OUTPUT
payload: {
	headblock: 1232131
	payload_event_name: block_ticker #block_history #block_ticker, block_number
	payload_stream_event:  #block_history, #block_number
	payload_event_timestamp: 12312321 epoch
}
*/