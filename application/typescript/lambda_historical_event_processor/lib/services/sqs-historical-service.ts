'use strict';


// Parameters may be declared in a variety of syntactic forms
/**
 * @param {string}  eventPayload - A string param for the SQS event payload
 */
export function getLowestLambdaProcessorDecisionCheckForNextBlockNumberRecordBatch(eventPayload) {
  console.log(
      'Beginning loop iteration in getLowestLambdaProcessorDecisionCheckForNextBlockNumberRecordBatch',
  );

  let temporaryLowestBlock;

  eventPayload.Records.forEach((element) => {
    console.log('Record element', element);

    const bodyObject = JSON.parse(element.body);

    if (temporaryLowestBlock === undefined) {
      temporaryLowestBlock = {
        message: element,
        bodyObject: bodyObject,
      };
    } else {
      if (
        bodyObject.lambdaProcessorDecisionCheckForNextBlocknumber <
        temporaryLowestBlock.bodyObject.lambdaProcessorDecisionCheckForNextBlocknumber
      ) {
        temporaryLowestBlock.message = element;
        temporaryLowestBlock.bodyObject = bodyObject;
      }
    }
  });

  console.log('lowest lambdaProcessorDecisionCheckForNextBlocknumber number event is', JSON.stringify(temporaryLowestBlock, null, 2));

  return temporaryLowestBlock;
}


