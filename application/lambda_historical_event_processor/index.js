"use strict";
const historicalService = require('./services/historical-service');
const blockEventService = require('./services/block-event-service');

exports.handler = async (event, context) => {    
  console.log('lambda historical event process ', event);  
     
//get highest block
//write to current block queue

  const highestBlockMessageFromBatch = historicalService.getHighestBlockNumberFromRecordBatch(event)
  const result = await blockEventService.buildAndWriteAllBlockEvents(event, highestBlockMessageFromBatch);

  console.log('done with processing historical event batch with result ', result);

  return {
    completed: true
  }; 
  
};
