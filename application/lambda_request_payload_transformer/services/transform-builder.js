"use strict";

async function buildTransformedData(data) {
    var lastBlock = await readLastBlockForEventsProcessed();  
    
    console.log(lastBlock);
  
    data.lastBlock = lastBlock;
    data.payload_event_timestamp = Math.floor(new Date().getTime() / 1000);
    data.payload_stream_event = "block_history";
    
    return data;
  }