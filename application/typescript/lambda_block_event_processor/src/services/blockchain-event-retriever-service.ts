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
