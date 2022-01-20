'use strict';

import {
  SecretsManager,
} from '../../../library/src/backend/aws-services/secrets-manager';
import {
  BlockChainService,
} from '../../../library/src/backend/blockchain/blockchain-service';
import { EVENTS } from '../../../library/src/backend/blockchain/constants';
import { ContractRawEvent } from '../models/types';


/**
 * Service to interact with chain events
 */
export class BlockchainEventProcessorService {
  private secretsManager: SecretsManager;
  private blockchainService: BlockChainService;
  private walletSecretDetails: any;
  private isInitialized: boolean;

  constructor() {
    this.secretsManager = new SecretsManager();
    this.isInitialized = false;
  }

  /**
   * @async
   * @method
   * Initializes the wallet witht he secret manager details
   */
  async initialize(): Promise<void> {

    this.walletSecretDetails = await this.secretsManager.getSecretValue(
      'adexrio/wallets/mnemonics',
    );
    this.blockchainService = new BlockChainService(
      JSON.parse(this.walletSecretDetails.SecretString),
    );

    await this.blockchainService.initializeWallet();
    this.isInitialized = true;
  }

  /**
   * 
   * @param {ContractRawEvent[]} eventsToRetrieve 
   * @returns {Promise<ContractRawEvent[]>}
   */
  async getAllEventsStartingAtBlocknumber(eventsToRetrieve: ContractRawEvent[], startingBlockNumber: number ): Promise<ContractRawEvent[]> {  
    
    if (!this.isInitialized) {
      throw new Error("Wallet has not been initialized");
    }

    const promiseArray = eventsToRetrieve.map( (eventItem) => {      
      return this.getAllEventsByNameStartingFromBlock(eventItem.name, startingBlockNumber);     
    }); 
          
    const results = (await Promise.all(promiseArray)).map( (item, index) => {
       eventsToRetrieve[index].result = item;
       return eventsToRetrieve[index];
    });
    
    return results;            

   
  }
  /**
   * Gets all the events by the individual name passed in starting
   * at the starting block and processing until the head block
   * @async
   * @method
   * @param {string} eventName
   * @param {number} startingBlock
   */
  async getAllEventsByNameStartingFromBlock(
    eventName: string,
    startingBlock: number,
  ): Promise<Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>[]> {

    return new Promise(async (resolve, reject) => {

      try {
        if (!this.isInitialized) {
          throw new Error("Wallet has not been initialized");
        }

        const allEventsArray: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>[] = [];

        const filter = this.blockchainService.getFilterForEvent({
          eventName: eventName,
          startBlock: startingBlock,
          endBlock: this.blockchainService.walletService.connex.thor.status.head.number,
        });        

        await this.blockchainService.executeFilterForEvent(
          filter,
          0,
          255,
          async (events: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>[]) => {  
            console.log(`Events in batch to add: ${events.length}`)         
            events.map((event: Connex.Thor.Filter.Row<"event", Connex.Thor.Account.WithDecoded>) => {
              allEventsArray.push(event);
            });            
          },
        );

        resolve(allEventsArray);
      }
      catch (err) {
        reject(err);
      }
    });

  }
}


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
