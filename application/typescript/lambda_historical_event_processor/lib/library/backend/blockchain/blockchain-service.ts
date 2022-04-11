import { ContractEvent, EventObject, SetGameWinnerRequest, DecodedGameEntries, WalletSecretDetails } from "../models/all-models";

const RollItVetMultiPlayerGameDefinition = require('../../contract-builds/contracts/RollItVetMultiPlayerGame.json');

const RollItDeployedDevelopmentContractAddress = require('../../contract-builds/adexrio_contract_address/dev_contract_address.json');
const RollItDeployedTestContractAddress = require('../../contract-builds/adexrio_contract_address/test_contract_address.json');
const RollItDeployedProductionContractAddress = require('../../contract-builds/adexrio_contract_address/prod_contract_address.json');

// import { BlockchainEventListener } from "./blockchain-event-listener";
import { BlockchainWalletService } from "./blockchain-wallet-service";

export interface GetFilterForEventRequest {  
  eventName: string;
  startBlock: number;
  endBlock: number;
}

export class BlockChainService {

    contractInstance: any;
    // eventListener: BlockchainEventListener;
    walletService: BlockchainWalletService;

    contractWrappedEvents: ContractEvent[] = [];

    constructor(private walletSecretDetails: WalletSecretDetails) {                  
        this.walletService = new BlockchainWalletService(this.walletSecretDetails);
        this.contractWrappedEvents = this.getAndBuildEventsFromContract();
    }

    async initializeWallet(): Promise<void> {
      await this.walletService.importWalletFromKeystore();
    }

    private getAndBuildEventsFromContract(): ContractEvent[] {
    
        const wrappedEvents: ContractEvent[] = [];
        const events = RollItVetMultiPlayerGameDefinition.abi.filter( f=> f.type == 'event');
        events.forEach( (item) => {
                
          wrappedEvents.push({
            key: item.name,
            abi: item
          });
    
        });
            
       return wrappedEvents;   
    }


   

    getFilterForEvent(request: GetFilterForEventRequest): Connex.Thor.Filter<'event', Connex.Thor.Account.WithDecoded>  {

        console.log('getFilterForEvent', request);

        const account = this.getContractAddressForRollIt();
        const eventToFilterOn = this.getSingleContractEventForName(request.eventName, this.contractWrappedEvents);   
        
        console.log('account and eventToFilterOn', account, eventToFilterOn);

        if (!eventToFilterOn) {
            throw Error(`Cant find ${request.eventName}`);
        }

        const filter = this.walletService.connex.thor
          .account(account).event(eventToFilterOn.abi).filter([{}]);
    
        filter.range({
          unit: 'block',
          from: request.startBlock,
          to: request.endBlock
        });

        return filter;
    }

    async executeFilterForEvent(
      filter: Connex.Thor.Filter<'event',
        Connex.Thor.Account.WithDecoded>,
      batchStartPosition: number,
      batchSize: number,
      callbackProcessingFunction: Function): Promise<void> {
      
      const filterResultEvents = await filter.apply(batchStartPosition, batchSize);
       
      await callbackProcessingFunction(filterResultEvents);  
       
      if (filterResultEvents.length === batchSize) {
        await this.executeFilterForEvent(filter, batchStartPosition + batchSize, batchSize, callbackProcessingFunction);
      }

    }

    async getGamesAwaitingGameCriteriaMet(): Promise<DecodedGameEntries> {
        const getGamesMethod =
          this.walletService.connex.thor.account(this.getContractAddressForRollIt())
                .method(this.getContractFunctionABIfor('getGamesByStatus'));

        const CRITERIA_MET_AWAITING_LOTTERY = 2;
        const detail = await getGamesMethod.call(CRITERIA_MET_AWAITING_LOTTERY);

        return detail.decoded as DecodedGameEntries;
      }

    async TestCriteriaMetAwaitingLotteryOnlyTotalCount(): Promise<any> {
        const account = this.getContractAddressForRollIt();
        const testCall = this.getContractFunctionABIfor('criteriaMetAwaitingLotteryOnlyTotalCount');

        return this.walletService.connex.thor.account(account).method(testCall).call();
    }


    async TestGetPausedMode(): Promise<any> {
        const account = this.getContractAddressForRollIt();
        const testCallOnlyOwner = this.getContractFunctionABIfor('getPausedMode');

        return this.walletService.connex.thor.account(account).method(testCallOnlyOwner).call();
    }

    async TestSetPaused(): Promise<any> {        
        const account = this.getContractAddressForRollIt();
        const testCallOnlyOwner = this.getContractFunctionABIfor('setPauseModeEnabled');

        return this.walletService.connex.thor.account(account)
            .method(testCallOnlyOwner)
            .transact().request();
    }

    async TestSetUnPaused(): Promise<any> {        
        const account = this.getContractAddressForRollIt();
        const testCallOnlyOwner = this.getContractFunctionABIfor('setPauseModeDisabled');

        return this.walletService.connex.thor.account(account)
            .method(testCallOnlyOwner)
            .transact().request();
    }

    async getGameById(gameId: number): Promise<Connex.VM.Output & Connex.Thor.Account.WithDecoded> {
        const account = this.getContractAddressForRollIt();
        const getGameById = this.getContractFunctionABIfor('getGameById');

        return this.walletService.connex.thor.account(account).method(getGameById).call(gameId);
    }

    async getEligiblePlayersForLotteryByGameId(gameId: number): Promise<Connex.VM.Output & Connex.Thor.Account.WithDecoded> {
        const account = this.getContractAddressForRollIt();
        const getEligiblePlayersForLotteryByActiveGameId = this.getContractFunctionABIfor('getEligiblePlayersForLotteryByActiveGameId');

        return this.walletService.connex.thor.account(account).method(getEligiblePlayersForLotteryByActiveGameId).call(gameId);
    }

    private getContractFunctionABIfor(name: string): any {
        const func = RollItVetMultiPlayerGameDefinition.abi.find((item: { name: string; type: string; }) => item.name === name && item.type === 'function');
        return func;
    }

    private getContractAddressForRollIt(): string { 
        
        switch (process.env.NODE_ENV) {
          case 'dev':
          case 'development':
              console.log('case development', RollItDeployedDevelopmentContractAddress.address);
              return RollItDeployedDevelopmentContractAddress.address;
              break;
          case 'test':
              console.log('case test', RollItDeployedTestContractAddress.address);
              return RollItDeployedTestContractAddress.address;
              break;
          case 'prod':
          case 'production':
              console.log('case production', RollItDeployedProductionContractAddress.address);
              return RollItDeployedProductionContractAddress.address;
              break;

          default: throw Error(`getContractAddressForRollIt not found for environment ${process.env.NODE_ENV}`);
      }
    }

    private getSingleContractEventForName(eventName: string, wrappedEvents: ContractEvent[]): ContractEvent | undefined {
        const event = wrappedEvents.find((item) => {
          return item.abi.type === 'event' && item.abi.name === eventName;
        });
        if (!event) {
          throw Error(`No Event found for ${eventName}`);
        }
        return event;
      }

    async setGameWinnerNoAudit(
        request: SetGameWinnerRequest
    ): Promise<Connex.Vendor.TxResponse> {
        console.log('setGameWinnerNoAudit');

        const account = this.getContractAddressForRollIt();
        const setGameWinnerNoAudit = this.getContractFunctionABIfor('setGameWinnerNoAudit');

        return this.walletService.connex.thor
            .account(account)
            .method(setGameWinnerNoAudit)
            .transact(
                request.game.gameResult.decoded.gameId,
                request.winner)
            .request();
    }

    async setGameWinnerAudit(
        request: SetGameWinnerRequest
    ): Promise<Connex.Vendor.TxResponse> {
        console.log('setGameWinnerAudit');

        const account = this.getContractAddressForRollIt();
        const setGameWinnerAudit = this.getContractFunctionABIfor('setGameWinnerAudit');

        return this.walletService.connex.thor
            .account(account)
            .method(setGameWinnerAudit)
            .transact(
                request.game.gameResult.decoded.gameId,
                request.winner,
                request.auditRecordDrawId
            )
            .request();
    }

}
