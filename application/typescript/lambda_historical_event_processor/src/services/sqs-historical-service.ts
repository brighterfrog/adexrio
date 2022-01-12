'use strict';


// Parameters may be declared in a variety of syntactic forms
/**
 * @param {string}  eventPayload - A string param for the EVENTS enum
 */
export function getHighestBlockNumberFromRecordBatch(eventPayload) {
  console.log(
      'Beginning loop iteration in getHighestBlockNumberFromRecordBatch',
  );

  let temporaryHighestBlock;

  eventPayload.Records.forEach((element) => {
    console.log('Record element', element);

    const bodyObject = JSON.parse(element.body);

    if (temporaryHighestBlock === undefined) {
      temporaryHighestBlock = {
        message: element,
        bodyObject: bodyObject,
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

  console.log('highest block number event is', JSON.stringify(temporaryHighestBlock));

  return temporaryHighestBlock;
}

