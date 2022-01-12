'use strict';

import {
  SecretsManager,
} from '../../../library/dist/backend/aws-services/secrets-manager';
import {
  BlockChainService,
} from '../../../library/dist/backend/blockchain/blockchain-service';


/**
 * Service to interact with chain events
 */
export class BlockchainEventProcessorService {
  private secretsManager: SecretsManager;
  private blockchainService: BlockChainService;
  private walletSecretDetails: any;

  constructor() {
    this.secretsManager = new SecretsManager();
  }

  async initialize(): Promise<void> {

        this.walletSecretDetails = await this.secretsManager.getSecretValue(
          'adexrio/wallets/mnemonics',
        );
        this.blockchainService = new BlockChainService(
          JSON.parse(this.walletSecretDetails.SecretString),
        );

      await this.blockchainService.initializeWallet();     
  }

  /**
   * Gets all the events by the name passed in starting
   * at the starting block and processing until the head block
   * @async
   * @method
   * @param {string} eventName
   * @param {number} startingBlock
   */
  async getAllEventsByNameStartingFromBlock(
    eventName: string,
    startingBlock: number,
  ): Promise<any> {

    return new Promise(async (resolve, reject) => {

      try{
      const allEventsArray: any[] = [];

      const filter = this.blockchainService.getFilterForEvent({
        eventName: eventName,
        startBlock: startingBlock,
        endBlock: this.blockchainService.walletService.connex.thor.status.head.number,
      });

      console.log('filter is', filter);

      const result = await this.blockchainService.executeFilterForEvent(
        filter,
        0,
        255,
        async (events: any) => {
          //console.log(events.length);
          events.map((event: any) => {
            allEventsArray.push(event);
          });
          console.log('done 4');        
        },
      );
       
      resolve(allEventsArray);

      }
      catch(err) {
        reject(err);
      }
    });
    
  }
}

/**
 * not sure yet
 * @param {any} customEvents
 */
export async function processEvents(customEvents: any) { }

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
//     highestBlockMessageFromBatch
//      .bodyObject
//      .arguments.input.event.head.number;
//   console.log("currentBlockHeadNumber", currentBlockHeadNumber);

//   const expectedBatchCount =
//     currentBlockHeadNumber -
//    lambdaProcessorDecisionCheckForNextBlocknumber +
//    1;

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
//       console.log("sendMessagesAsBatch",
//             JSON.stringify(pendingMessagesBatch)
//        );
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

// module.exports = {
//   test,
//   processEvents,
// };
