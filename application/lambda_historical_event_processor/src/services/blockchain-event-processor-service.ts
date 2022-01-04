"use strict";

const EVENTS = require("../../../library/src/backend/blockchain/constants/");
const {
  SecretsManager,
} = require("../../../library/dist/backend/aws-services/secrets-manager");
const {
  BlockChainService,
} = require("../../../library/dist/backend/blockchain/blockchain-service");

const secretsManager = new SecretsManager();

async function test() {

  let allEventsArray: any[] = [];

  const walletSecretDetails = await secretsManager.getSecretValue(
    "adexrio/wallets/mnemonics"
  );
  const blockchainService = new BlockChainService(
    JSON.parse(walletSecretDetails.SecretString)
  );
  await blockchainService.initializeWallet();

  const filter = blockchainService.getFilterForEvent({
    eventName: EVENTS.GameCompletedEvent,
    startBlock: 0,
    endBlock: blockchainService.walletService.connex.thor.status.head.number,
  });

  console.log("filter is", filter);

  const result = await blockchainService.executeFilterForEvent(
    filter,
    0,
    255,
    async (events: any) => {
      console.log(events.length);
      events.map((event: any) => {
        allEventsArray.push(event);
      });
    }
  );
  //* data from filter

  console.log("TestArray Length", allEventsArray.length);

  allEventsArray.forEach((item) => {
    console.log(item.decoded);
  });
}

async function processEvents(customEvents: any) {}

// async function buildAndWriteAllBlockEvents(
//   event,
//   highestBlockMessageFromBatch
// ) {
//   console.log(
//     "lambda historical step fn write to current block queue with event",
//     event
//   );

//   console.log("highestBlockMessageFromBatch", highestBlockMessageFromBatch);

//   const lambdaProcessorDecisionCheckForNextBlocknumber =
//     highestBlockMessageFromBatch.bodyObject
//       .lambdaProcessorDecisionCheckForNextBlocknumber;

//   console.log(
//     "lambdaProcessorDecisionCheckForNextBlocknumber",
//     lambdaProcessorDecisionCheckForNextBlocknumber
//   );

//   const currentBlockHeadNumber =
//     highestBlockMessageFromBatch.bodyObject.arguments.input.event.head.number;
//   console.log("currentBlockHeadNumber", currentBlockHeadNumber);

//   const expectedBatchCount =
//     currentBlockHeadNumber - lambdaProcessorDecisionCheckForNextBlocknumber + 1;

//   console.log("Entering loop for expectedBatchCount of", expectedBatchCount);

//   let actualBatchCount = 0;

//   let pendingMessagesBatch = [];

//   for (
//     let i = lambdaProcessorDecisionCheckForNextBlocknumber;
//     i <= currentBlockHeadNumber;
//     i++
//   ) {
//     let blockNumber = i;

//     const eventToWrite = {
//       blockNumberToProcess: blockNumber,
//     };

//     pendingMessagesBatch.push({
//       Id: blockNumber,
//       MessageBody: JSON.stringify(eventToWrite),
//       MessageDeduplicationId: blockNumber,
//       MessageGroupId: "Group1",
//     });

//     // Send BATCH OF 10
//     if (pendingMessagesBatch.length === 10) {
//       console.log("sendMessagesAsBatch", JSON.stringify(pendingMessagesBatch));
//       const sqsResponse = await sqsService.sendMessagesAsBatch(
//         pendingMessagesBatch
//       );
//       if (sqsResponse.$metadata.httpStatusCode === 200) {
//         actualBatchCount++;
//       } else {
//         throw new Error(JSON.stringify(sqsResponse));
//       }
//       pendingMessagesBatch = [];
//     }
//   } //endfor

//   // after loop exit, send remaining count
//   if (pendingMessagesBatch.length > 0) {
//     console.log("sendMessagesAsBatch", JSON.stringify(pendingMessagesBatch));
//     const sqsResponse = await sqsService.sendMessagesAsBatch(
//       pendingMessagesBatch
//     );
//     if (sqsResponse.$metadata.httpStatusCode === 200) {
//       actualBatchCount++;
//     } else {
//       throw new Error(JSON.stringify(sqsResponse));
//     }
//   }

//   const result = {
//     expectedBatchCount: expectedBatchCount,
//     actualBatchCount: actualBatchCount,
//     isSuccess: actualBatchCount === expectedBatchCount ? true : false,
//   };

//   console.log("SUCCESS Completed result is", result);

//   return result;
// }

module.exports = {
  test,
  processEvents,
};
