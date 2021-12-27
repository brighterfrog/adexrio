"use strict";
const { write } = require("fs");
const util = require("util");
const sqsService = require("./services/sqs-service");

exports.handler = async (event, context) => {

  console.log("lambda historical step fn write to current block queue with event", event);

  const stepInput = event.highestBlockMessageFromBatch;

  console.log('stepInput', stepInput);

  const lambdaProcessorDecisionCheckForNextBlocknumber = stepInput.bodyObject.lambdaProcessorDecisionCheckForNextBlocknumber;  

  console.log('lambdaProcessorDecisionCheckForNextBlocknumber', lambdaProcessorDecisionCheckForNextBlocknumber);

  const currentBlockHeadNumber = stepInput.bodyObject.arguments.input.event.head.number;
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
      createdFromHistoricalQueue: true,
      historicalEventPayload: event, 
      blockNumberToProcess: blockNumber
    };
    
    console.log("Sending message with event to write of", eventToWrite);
    
    const sqsResponse = await sqsService.sendMessage(eventToWrite, blockNumber);

    console.log("SQS Response is", sqsResponse);

    if (sqsResponse.$metadata.httpStatusCode === 200) {
      actualBatchCount++;
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
