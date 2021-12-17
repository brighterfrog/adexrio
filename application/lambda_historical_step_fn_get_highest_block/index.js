"use strict";
const util = require('util');

exports.handler = async (event, context) => {
  console.log("lambda historical step fn get highest block with events", event);

  return {
    highestBlockMessageFromBatch: getLowestBlockNumberFromRecordBatch(event),
  };
};

function getLowestBlockNumberFromRecordBatch(payload) {
  console.log(
    "Beginning loop iteration in getLowestBlockNumberFromRecordBatch"
  );

  let temporaryLowestBlock;

  payload.Records.forEach((element) => {
    console.log("Record element", element);

    let bodyObject = JSON.parse(element.body);

    if (temporaryLowestBlock === undefined) {
      temporaryLowestBlock = {
        message: element,
        bodyObject: bodyObject    
      }; 
    } else {     
      if (
        bodyObject.arguments.input.event.head.number <
        temporaryLowestBlock.bodyObject.arguments.input.event.head.number
      ) {
        temporaryLowestBlock.message = element;
        temporaryLowestBlock.bodyObject = bodyObject;  
      }
    }
  });

  
  console.log("highest block number event is", util.inspect(temporaryLowestBlock, false, null, true /* enable colors */))

  return temporaryLowestBlock;
}