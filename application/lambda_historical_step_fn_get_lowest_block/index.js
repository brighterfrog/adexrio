"use strict";

exports.handler = async (event, context) => {
  console.log("lambda historical step fn get lowest block with events", event);

  return {
    lowestBlockMessageFromBatch: getLowestBlockNumberFromRecordBatch(event),
  };
};

function getLowestBlockNumberFromRecordBatch(payload) {
  console.log(
    "Beginning loop iteration in getLowestBlockNumberFromRecordBatch"
  );

  let temporaryLowestBlock;
  payload.Records.forEach((element) => {
    console.log("Record element", element);

    if (temporaryLowestBlock === undefined) {
      temporaryLowestBlock = element;
    } else {
      let body = JSON.parse(element.body);
      if (
        body.arguments.input.event.head.number <
        temporaryLowestBlock.body.arguments.input.event.head.number
      ) {
        temporaryLowestBlock = element;
      }
    }
  });

  console.log("lowest block number event is", lowestBlockMessageFromBatch);

  return temporaryLowestBlock;
}
