"use strict";
const util = require('util');

function getHighestBlockNumberFromRecordBatch(eventPayload) {
  console.log(
    "Beginning loop iteration in getHighestBlockNumberFromRecordBatch"
  );

  let temporaryHighestBlock;

  eventPayload.Records.forEach((element) => {
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

module.exports = {
    getHighestBlockNumberFromRecordBatch   
}