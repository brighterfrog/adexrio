"use strict";
const sqsService = require("./sqs-service");

async function buildAndWriteAllBlockEvents(event, highestBlockMessageFromBatch) {

  console.log("lambda historical step fn write to current block queue with event", event);
  
  console.log('highestBlockMessageFromBatch', highestBlockMessageFromBatch);

  const lambdaProcessorDecisionCheckForNextBlocknumber = highestBlockMessageFromBatch.bodyObject.lambdaProcessorDecisionCheckForNextBlocknumber;  

  console.log('lambdaProcessorDecisionCheckForNextBlocknumber', lambdaProcessorDecisionCheckForNextBlocknumber);

  const currentBlockHeadNumber = highestBlockMessageFromBatch.bodyObject.arguments.input.event.head.number;
  console.log('currentBlockHeadNumber', currentBlockHeadNumber);  

  const expectedBatchCount = (currentBlockHeadNumber - lambdaProcessorDecisionCheckForNextBlocknumber) + 1;
  
  console.log('Entering loop for expectedBatchCount of', expectedBatchCount);

  let actualBatchCount = 0;

  for (
    let i = lambdaProcessorDecisionCheckForNextBlocknumber;
    i <= currentBlockHeadNumber;
    i++
  ) {
    let blockNumber = i;

    const eventToWrite = {      
      historicalEventPayload: event, 
      blockNumberToProcess: blockNumber
    };
    
    console.log("Sending message with event to write of", JSON.stringify(eventToWrite));
    
    const sqsResponse = await sqsService.sendMessage(eventToWrite, blockNumber);

    console.log("SQS Response is", sqsResponse);

    if (sqsResponse.$metadata.httpStatusCode === 200) {
      actualBatchCount++;
    }
    else {
        throw new Error(JSON.stringify(sqsResponse));
    }
  } //endfor

  const result = {
    expectedBatchCount: expectedBatchCount,
    actualBatchCount: actualBatchCount,
    isSuccess: actualBatchCount === expectedBatchCount ? true : false,
  };

  console.log("Completed result is", result);

  return result;
};

module.exports = {
  buildAndWriteAllBlockEvents   
}