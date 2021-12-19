"use strict";
const util = require('util');

exports.handler = async (event, context) => {
  console.log("lambda historical step fn get highest block with events", event);

  return {
    highestBlockMessageFromBatch: getHighestBlockNumberFromRecordBatch(event),
  };
};

function getHighestBlockNumberFromRecordBatch(payload) {
  console.log(
    "Beginning loop iteration in getHighestBlockNumberFromRecordBatch"
  );

  let temporaryHighestBlock;

  payload.Records.forEach((element) => {
    console.log("Record element", element);

    let bodyObject = JSON.parse(element.body);

    if (temporaryHighestBlock === undefined) {
      temporaryHighestBlock = {
        message: element,
        bodyObject: bodyObject    
      }; 
    } else {     
      if (
        bodyObject.arguments.input.event.head.number <
        temporaryHighestBlock.bodyObject.arguments.input.event.head.number
      ) {
        temporaryHighestBlock.message = element;
        temporaryHighestBlock.bodyObject = bodyObject;  
      }
    }
  });

  
  console.log("highest block number event is", util.inspect(temporaryHighestBlock, false, null, true /* enable colors */))

  return temporaryHighestBlock;
}