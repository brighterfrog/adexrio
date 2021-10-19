import { ContractEvent, EventObject, SetGameWinnerRequest, DecodedGameEntries, WalletSecretDetails } from "../models/all-models";
import { thorify } from "thorify";

const RollItVetMultiPlayerGameDefinition = require('./../../../vechain-contracts/brownie/build/contracts/RollItVetMultiPlayerGame.json');

import { BlockchainEventListener } from "./blockchain-event-listener";
import { BlockchainWalletService } from "./blockchain-wallet-service";
import { SecretsManager } from "src/aws-services/secrets-manager";


export class BlockChainService {

    contractInstance: any;
    eventListener: BlockchainEventListener;
    walletService: BlockchainWalletService;

    contractWrappedEvents: ContractEvent[] = [];

    constructor(private walletSecretDetails: WalletSecretDetails) {
        console.log('PROCESS ENV VECHAIN API NODE');
        console.log(process.env.VECHAIN_API_NODE);

        const Web3 = require("web3");
        const web3 = thorify(new Web3(), process.env.VECHAIN_API_NODE);

        this.contractInstance = new web3.eth.Contract(
            RollItVetMultiPlayerGameDefinition.abi,
            this.getContractAddressForRollIt()
        );

        console.log(this.contractInstance);

        this.eventListener = new BlockchainEventListener(this.contractInstance);
        this.walletService = new BlockchainWalletService(this.walletSecretDetails);
        this.contractWrappedEvents = this.getEventsFromContract();
    }

    private getEventsFromContract(): ContractEvent[] {
    
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

    GetFilterForAllUnfinishedGameCompletedEvents(): any {
        const account = this.getContractAddressForRollIt();
        const event = this.getSingleContractEventForName('GameCompletedEvent', this.contractWrappedEvents);

        if (!event) {
            throw Error('Cant find GameCompletedEvent');
        }

        return this.walletService.connex.thor.account(account).event(
            event.abi
        ).filter([]);

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
        //return this.contractInstance.methods.getGames().call();
        const account = this.getContractAddressForRollIt();
        const testCallOnlyOwner = this.getContractFunctionABIfor('setPauseModeEnabled');

        return this.walletService.connex.thor.account(account)
            .method(testCallOnlyOwner)
            .transact().request();
    }

    async TestSetUnPaused(): Promise<any> {
        //return this.contractInstance.methods.getGames().call();
        const account = this.getContractAddressForRollIt();
        const testCallOnlyOwner = this.getContractFunctionABIfor('setPauseModeDisabled');

        return this.walletService.connex.thor.account(account)
            .method(testCallOnlyOwner)
            .transact().request();
    }

    // async getGames(): Promise<void> {
    //     //return this.contractInstance.methods.getGames().call();
    //     const account = this.getContractAddressForRollIt();
    //     const testCallOnlyOwner = this.getContractFunctionABIfor('setPauseModeEnabled');

    //this.connex.thor.account(account).method(testCallOnlyOwner).transact();
    //for now hard code account
    //this.walletService.connex.thor.account(
    //}

    async getGameById(gameId: number): Promise<Connex.VM.Output & Connex.Thor.Account.WithDecoded> {
        const account = this.getContractAddressForRollIt();
        const getEligiblePlayersForLotteryByActiveGameId = this.getContractFunctionABIfor('getGameById');

        return this.walletService.connex.thor.account(account).method(getEligiblePlayersForLotteryByActiveGameId).call(gameId);
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
        return RollItVetMultiPlayerGameDefinition.networks[5777].address;
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
