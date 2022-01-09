import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';


import RollItVetMultiPlayerGameDefinition from '@adexr/library/dist/src/contract-builds/contracts/RollItVetMultiPlayerGame.json';

import RollItDeployedDevelopmentContractAddress from '@adexr/library/dist/src/contract-builds/adexrio_contract_address/dev_contract_address.json';
import RollItDeployedTestContractAddress from '@adexr/library/dist/src/contract-builds/adexrio_contract_address/test_contract_address.json';
import RollItDeployedProductionContractAddress from '@adexr/library/dist/src/contract-builds/adexrio_contract_address/prod_contract_address.json';

import { ConnexService } from './helper-services/connex-service';
import { DateConversionService } from './helper-services/date-conversion.service';
import { GameStatusService } from './helper-services/gamestatus.service';
import { GlobalService } from './helper-services/globals-service';
import { WagerConversionService } from './helper-services/wager-conversion.service';
import { ContractEvent, DecodedGameEntries as DecodedGameEntries, DecodedGameEntity, EventObject, GameEntry } from './rollit_models';
import { environment } from '../../../../environments/environment';
import { WalletService } from './helper-services/wallet-service';
import { LoggingService } from 'src/app/services/logging.service';
import { AuditFixFeeService } from './helper-services/audit-fix-fee.service';
import { BinanceApiService } from './binance.api.service';


@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  contractDefinition: any = {};
  ticker: Connex.Thor.Ticker;
  connex: Connex;
  contractAddress: string;
  gameStatusService: GameStatusService;
  wagerConversionService: WagerConversionService;
  dateConversionService: DateConversionService;
  walletService: WalletService;

  contractWrappedEvents: ContractEvent[] = [];

  openGamesChanged: Subject<GameEntry>;
  yourGamesChanged: Subject<GameEntry>;
  completedGamesChanged: Subject<GameEntry>;
  existingGamesChanged: Subject<GameEntry>;

  retrieveCompletedForYourLeaveEvents:
    Subject<
      Connex.Thor.Filter.Row<'event',
        Connex.Thor.Account.WithDecoded>[]>;

  globalService: GlobalService;
  
  donationWalletAddress: string;

  constructor(
    globalService: GlobalService,
    gameStatusService: GameStatusService,
    wagerConversionService: WagerConversionService,
    dateConversionService: DateConversionService,
    connexService: ConnexService,
    walletService: WalletService,
    private binanceApiService: BinanceApiService,
    private auditFixFeeService: AuditFixFeeService,
    private loggingService: LoggingService
  ) {
    this.globalService = globalService;
    this.gameStatusService = gameStatusService;
    this.wagerConversionService = wagerConversionService;
    this.dateConversionService = dateConversionService;
    this.walletService = walletService;

    this.connex = connexService.build();

    this.ticker = this.connex.thor.ticker();

    this.contractAddress = this.getContractAddressForRollIt();
    this.contractWrappedEvents = this.getEventsFromContract();

    this.openGamesChanged = new Subject<GameEntry>();
    this.yourGamesChanged = new Subject<GameEntry>();
    this.completedGamesChanged = new Subject<GameEntry>();
    this.existingGamesChanged = new Subject<GameEntry>();


    this.retrieveCompletedForYourLeaveEvents = new
      Subject<Connex.Thor.Filter.Row<'event', Connex.Thor.Account.WithDecoded>[]>();

    this.createBlockchainTicker();
  }

  async requestIdentitySigning(): Promise<Connex.Vendor.CertResponse> {

    // return this.connex.vendor.sign('cert', {
    //   purpose: 'identification',
    //   payload: {
    //     type: 'text',
    //     content: 'Please select a wallet to grant read-only access for the adexr.io dApp'
    //   }
    // }).link('https://connex.vecha.in/{certid}')
    //   .request();

    return this.connex.vendor.sign('cert', {
      purpose: 'identification',
      payload: {
        type: 'text',
        content: 'Please select a wallet to grant read-only access for the adexr.io dApp'
      }
    })
      .request();

  }

  async getOpenGameData(): Promise<GameEntry[]> {
    const decodedGames = await this.getOpenDecodedGames();
    const gameEntries = this.convertDecodedGameEntriesToGameEntries(decodedGames);
    return gameEntries;
  }

  getAllCompletedGamesByFilteringGameCompletedEvents(): void {


    this.loggingService.writeDebug('getAllCompletedGamesByFilteringGameCompletedEvents');

    const startPosition = 0;
    const batchSize = 256;

    this.processCompletedGamesEvents(
      this.buildFilterForGettingAllGameCompletedEvents(
        this.getSingleContractEventForName(
          'GameCompletedEvent',
          this.contractWrappedEvents
        )
      ),
      startPosition,
      batchSize);
  }

  getAllYourGamesByFilteringCreatedJoinedLeaveEvents(): void {


    this.loggingService.writeDebug('getAllYourGameByFilteringGameCreatedEvents');

    const startPosition = 0;
    const batchSize = 256;

    this.processThisPlayerLeftGameEvents(
      this.buildFilterForYourPlayerWalletsEvents(
        this.getSingleContractEventForName(
          'PlayerLeftGameEvent',
          this.contractWrappedEvents
        )
      ),
      startPosition,
      batchSize);

    this.processYourGamesEvents(
      this.buildFilterForYourPlayerWalletsEvents(
        this.getSingleContractEventForName(
          'GameCreatedEvent',
          this.contractWrappedEvents
        )
      ),
      startPosition,
      batchSize);

    this.processYourGamesEvents(
      this.buildFilterForYourPlayerWalletsEvents(
        this.getSingleContractEventForName(
          'PlayerJoinedGameEvent',
          this.contractWrappedEvents
        )
      ),
      startPosition,
      batchSize);
  }


  async signAndSendDonation(
    vetAmount: number,
    donationAddress: string
  ): Promise<Connex.Vendor.TxResponse> {

    return this.connex.vendor.sign('tx',
      [
        {
          to: `0x${donationAddress}`,
          value: this.wagerConversionService.convertVETtoWei(vetAmount),          
          data: `0x`
        }
      ])
      .signer(this.walletService.walletCertificate.annex.signer)
      .comment(`Donate ${vetAmount} to adexr.io`)
      .request();

  }

  async testMethod(gameId: number): Promise<void> {

    this.loggingService.writeDebug('test method');

    const testMethod = this.connex.thor
      .account(this.contractAddress)
      .method(this.getContractFunctionABIfor('testMethod2'));

    const detail = testMethod.call()
      .then((data) => {
        this.loggingService.writeDebug(data);
      })
      .catch((ex) => {
        this.loggingService.writeDebug(`testMethod exception ${ex}`);
      });

  }

  async getOpenDecodedGames(): Promise<DecodedGameEntries> {
        
    const getGamesByStatus = this.connex.thor.account(this.contractAddress).method(this.getContractFunctionABIfor('getGamesByStatus'));
    const detail = await getGamesByStatus.call(
      this.gameStatusService.TextToNumberMap.get(this.gameStatusService.AWAITING_GAME_CRITERIA_MET)
    );
    this.loggingService.writeDebug('getOpenDecodedGames');
    this.loggingService.writeDebug(detail);
    const decodedEntries = detail.decoded as DecodedGameEntries;
    return decodedEntries;
  }

  async getCompletedDecodedGames(): Promise<DecodedGameEntries> {

    const getGamesByStatus = this.connex.thor.account(this.contractAddress).method(this.getContractFunctionABIfor('getGamesByStatus'));
    const detail = await getGamesByStatus.call(
      this.gameStatusService.TextToNumberMap.get(this.gameStatusService.COMPLETE)
    );
    const decodedEntries = detail.decoded as DecodedGameEntries;
    return decodedEntries;
  }

  convertDecodedGameEntryToGameEntry(decodedEntry: DecodedGameEntity): GameEntry {
    return {
      id: decodedEntry.gameId,
      gameBetSize: decodedEntry.gcsGameBetSize,
      status: this.gameStatusService.NumberToTextMap.get(decodedEntry.gameStatus),
      gameTotalEligiblePlayers!: decodedEntry.gameTotalEligiblePlayers,
      totalGameWagers: this.wagerConversionService.convertWeiToVET(decodedEntry.gameTotalWagers),
      gameWinningPayout: this.wagerConversionService.convertWeiToVET(decodedEntry.gameWinningPayout),
      gameWinnerAddress: decodedEntry.gameWinnerAddress,
      isAuditEnabled: decodedEntry.gcsIsAuditEnabled,
      minimumGamePlayers!: decodedEntry.gcsMinGamePlayers
    } as GameEntry;
  }
  convertDecodedGameEntriesToGameEntries(decodedEntries: DecodedGameEntries): GameEntry[] {

    const gameEntries: Array<GameEntry> = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < decodedEntries.gameIds.length; i++) {
      gameEntries.push(
        {
          id: decodedEntries.gameIds[i],
          gameBetSize: decodedEntries.gcsGameBetSize[i],
          status: this.gameStatusService.NumberToTextMap.get(decodedEntries.gameStatus[i]),
          gameTotalEligiblePlayers!: decodedEntries.gameTotalEligiblePlayers[i],
          totalGameWagers!: this.wagerConversionService.convertWeiToVET(decodedEntries.gameTotalWagers[i]),
          gameWinningPayout: this.wagerConversionService.convertWeiToVET(decodedEntries.gameWinningPayout[i]),
          gameWinnerAddress: decodedEntries.gameWinnerAddress[i],
          isAuditEnabled: decodedEntries.gcsIsAuditEnabled[i],
          minimumGamePlayers!: decodedEntries.gcsMinGamePlayers[i],
        } as GameEntry);
    }
    return gameEntries;
  }

  createBlockchainTicker(): void {

    this.ticker.next().then((head) => {
      this.loggingService.writeDebug('ticker callback');

      const startPosition = 0;
      const batchSize = 256;

      this.processNewGameEvents(
        this.buildGameCreatedEventFilterSubscriber(
          this.getSingleContractEventForName(
            'GameCreatedEvent',
            this.contractWrappedEvents
          )
        ),
        startPosition,
        batchSize);

      this.processCompletedGamesEvents(
        this.buildFilterForGettingGameCompletedEvents(
          this.getSingleContractEventForName(
            'GameCompletedEvent',
            this.contractWrappedEvents
          )
        ),
        startPosition,
        batchSize);

      this.processPlayerJoinedGameEvents(
        this.buildPlayerJoinedGameEventFilterSubscriber(
          this.getSingleContractEventForName(
            'PlayerJoinedGameEvent',
            this.contractWrappedEvents
          )
        ),
        startPosition,
        batchSize);

      this.processPlayerLeftGameEvents(
        this.buildPlayerLeftGameEventFilterSubscriber(
          this.getSingleContractEventForName(
            'PlayerLeftGameEvent',
            this.contractWrappedEvents
          )
        ),
        startPosition,
        batchSize);

        
      if (this.walletService.walletCertificate) {
        this.processYourGamesEvents(
          this.buildFilterForYourGamesFromGameCreatedEvents(
            this.getSingleContractEventForName(
              'GameCreatedEvent',
              this.contractWrappedEvents
            )
          ),
          startPosition,
          batchSize);
      }

      this.createBlockchainTicker();
    });
  }

  private processNewGameEvents(
    filter: Connex.Thor.Filter<'event',
      Connex.Thor.Account.WithDecoded>,
    startPosition: number,
    batchSize: number): void {
    filter.apply(startPosition, batchSize).then((events) => {

      this.loggingService.writeDebug('processNewGameEvents');
      this.loggingService.writeDebug(events);

      this.createNewGameEntryFromEvents(events);

      if (events.length === batchSize) {
        this.processNewGameEvents(filter, startPosition + batchSize, batchSize);
      }
    }).catch((err) => {
      this.loggingService.writeDebug(err);
    });
  }

  private processPlayerLeftGameEvents(
    filter: Connex.Thor.Filter<'event',
      Connex.Thor.Account.WithDecoded>,
    startPosition: number,
    batchSize: number): void {
    filter.apply(startPosition, batchSize).then((events) => {

      this.loggingService.writeDebug('processPlayerLeftGameEvents');
      this.loggingService.writeDebug(events);

      this.updateExistingGameEntryFromEvents(events);

      if (events.length === batchSize) {
        this.processPlayerJoinedGameEvents(filter, startPosition + batchSize, batchSize);
      }
    });
  }

  private processPlayerJoinedGameEvents(
    filter: Connex.Thor.Filter<'event',
      Connex.Thor.Account.WithDecoded>,
    startPosition: number,
    batchSize: number): void {
    filter.apply(startPosition, batchSize).then((events) => {

      this.loggingService.writeDebug('processPlayerJoinedGameEvents');
      this.loggingService.writeDebug(events);

      this.updateExistingGameEntryFromEvents(events);

      if (events.length === batchSize) {
        this.processPlayerJoinedGameEvents(filter, startPosition + batchSize, batchSize);
      }
    });
  }

  private processThisPlayerLeftGameEvents(
    filter: Connex.Thor.Filter<'event',
      Connex.Thor.Account.WithDecoded>,
    startPosition: number,
    batchSize: number,
    aggregatedEvents?: Connex.Thor.Filter.Row<'event', Connex.Thor.Account.WithDecoded>[]): void {
    filter.apply(startPosition, batchSize).then((events) => {

      let buildAggregatedEvents = aggregatedEvents ? aggregatedEvents : [];
      buildAggregatedEvents = buildAggregatedEvents.concat(events);

      this.loggingService.writeDebug(events);
      this.loggingService.writeDebug(buildAggregatedEvents);

      if (events.length === batchSize) {
        this.processThisPlayerLeftGameEvents(
          filter,
          startPosition + batchSize,
          batchSize,
          buildAggregatedEvents
        );
      }
      else {
        this.retrieveCompletedForYourLeaveEvents.next(buildAggregatedEvents);
      }
    });
  }

  private processYourGamesEvents(
    filter: Connex.Thor.Filter<'event',
      Connex.Thor.Account.WithDecoded>,
    startPosition: number,
    batchSize: number): void {
    filter.apply(startPosition, batchSize).then((events) => {

      this.loggingService.writeDebug(events);      
      this.createYourGamesEntryFromEvents(events);

      if (events.length === batchSize) {
        this.processYourGamesEvents(filter, startPosition + batchSize, batchSize);
      }
    });
  }

  private processCompletedGamesEvents(
    filter: Connex.Thor.Filter<'event',
      Connex.Thor.Account.WithDecoded>,
    startPosition: number,
    batchSize: number): void {
    filter.apply(startPosition, batchSize).then((events) => {

      this.loggingService.writeDebug('processCompletedGamesEvents');
      this.loggingService.writeDebug(events);

      this.createGameCompletedEntryFromEvents(events);

      if (events.length === batchSize) {
        this.processCompletedGamesEvents(filter, startPosition + batchSize, batchSize);
      }
    });
  }

  /// ticker subscriber for new game events

  private buildPlayerJoinedGameEventFilterSubscriber(
    eventToFilterOn: ContractEvent
  ): Connex.Thor.Filter<'event', Connex.Thor.Account.WithDecoded> {
    const filter = this.connex.thor
      .account(this.getContractAddressForRollIt()).event(eventToFilterOn.abi).filter([{}]);

    filter.range({
      unit: 'block',
      from: this.connex.thor.status.head.number,
      to: this.connex.thor.status.head.number
    });
    return filter;
  }

  private buildGameCreatedEventFilterSubscriber(
    eventToFilterOn: ContractEvent
  ): Connex.Thor.Filter<'event', Connex.Thor.Account.WithDecoded> {
    const filter = this.connex.thor
      .account(this.getContractAddressForRollIt()).event(eventToFilterOn.abi).filter([{}]);

    filter.range({
      unit: 'block',
      from: this.connex.thor.status.head.number,
      to: this.connex.thor.status.head.number
    });
    
    return filter;
  }


  private buildFilterForGettingAllGameCompletedEvents(
    eventToFilterOn: ContractEvent
  ): Connex.Thor.Filter<'event', Connex.Thor.Account.WithDecoded> {
    const filter = this.connex.thor
      .account(this.getContractAddressForRollIt()).event(eventToFilterOn.abi).filter([{}]);

    return filter;
  }

  private buildFilterForGettingGameCompletedEvents(
    eventToFilterOn: ContractEvent
  ): Connex.Thor.Filter<'event', Connex.Thor.Account.WithDecoded> {
    const filter = this.connex.thor
      .account(this.getContractAddressForRollIt()).event(eventToFilterOn.abi).filter([{}]);

    filter.range({
      unit: 'block',
      from: this.connex.thor.status.head.number,
      to: this.connex.thor.status.head.number
    });
    return filter;
  }

  private buildPlayerLeftGameEventFilterSubscriber(
    eventToFilterOn: ContractEvent
  ): Connex.Thor.Filter<'event', Connex.Thor.Account.WithDecoded> {

    const filter = this.connex.thor
      .account(this.getContractAddressForRollIt()).event(eventToFilterOn.abi).filter([{

      }])
      .range({
        unit: 'block',
        from: this.connex.thor.status.head.number,
        to: this.connex.thor.status.head.number
      })
      .order('desc');

    return filter;
  }

  private buildFilterForYourGamesFromGameCreatedEvents(
    eventToFilterOn: ContractEvent
  ): Connex.Thor.Filter<'event', Connex.Thor.Account.WithDecoded> {
    const walletCertificateSigner = this.walletService.walletCertificate.annex.signer;
    const filter = this.connex.thor
      .account(this.getContractAddressForRollIt()).event(eventToFilterOn.abi).filter([{
        player: walletCertificateSigner
      }])
      .range({
        unit: 'block',
        from: this.connex.thor.status.head.number,
        to: this.connex.thor.status.head.number
      })
      .order('desc');

    
    return filter;
  }

  private buildFilterForYourPlayerWalletsEvents(
    eventToFilterOn: ContractEvent
  ): Connex.Thor.Filter<'event', Connex.Thor.Account.WithDecoded> {
    const walletCertificateSigner = this.walletService.walletCertificate.annex.signer;
    this.loggingService.writeDebug('player filter');
    this.loggingService.writeDebug(this.walletService.walletCertificate.annex.signer);
    const filter = this.connex.thor
      .account(this.getContractAddressForRollIt()).event(eventToFilterOn.abi).filter([{
        player: walletCertificateSigner
      }])
      .order('desc');

    return filter;
  }
  private buildFilterForGettingAllYourGamesFromPlayerJoinedGameEvents(
    eventToFilterOn: ContractEvent
  ): Connex.Thor.Filter<'event', Connex.Thor.Account.WithDecoded> {
    const walletCertificateSigner = this.walletService.walletCertificate.annex.signer;
    this.loggingService.writeDebug('player filter');
    this.loggingService.writeDebug(this.walletService.walletCertificate.annex.signer);
    const filter = this.connex.thor
      .account(this.getContractAddressForRollIt()).event(eventToFilterOn.abi).filter([{
        player: walletCertificateSigner
      }])
      .order('desc');

    return filter;
  }

  // connex2
  createNewGameEntryFromEvents(events: Connex.Thor.Filter.Row<'event', Connex.Thor.Account.WithDecoded>[]): void {
    for (const item of events) {
      this.getGameByGameId(item.decoded.gameId).then((game) => {
        this.openGamesChanged?.next(game);
      });
    }
  }

  createYourGamesEntryFromEvents(events: Connex.Thor.Filter.Row<'event', Connex.Thor.Account.WithDecoded>[]): void {
    for (const item of events) {
      this.getGameByGameId(item.decoded.gameId).then((game) => {
        this.loggingService.writeDebug(game);
        this.yourGamesChanged?.next(game);
      });
    }
  }
  createGameCompletedEntryFromEvents(events: Connex.Thor.Filter.Row<'event', Connex.Thor.Account.WithDecoded>[]): void {
    for (const item of events) {
      this.getGameByGameId(item.decoded.gameId).then((game) => {
        this.updateGameEntryWithCompletedEventDetails(game, item);
        this.loggingService.writeDebug('createGameCompletedEntryFromEvents');
        this.loggingService.writeDebug(game);
        this.completedGamesChanged?.next(game);
      });
    }
  }
  updateExistingGameEntryFromEvents(events: Connex.Thor.Filter.Row<'event', Connex.Thor.Account.WithDecoded>[]): void {
    for (const item of events) {
      this.getGameByGameId(item.decoded.gameId).then((game) => {
        this.loggingService.writeDebug('getGameByGameId');
        this.loggingService.writeDebug(game);
        this.existingGamesChanged?.next(game);
      });
    }
  }

  updateGameEntryWithCompletedEventDetails(game: GameEntry, event: Connex.Thor.Filter.Row<'event', Connex.Thor.Account.WithDecoded>): void {
    this.loggingService.writeDebug('updateGameEntryWithCompletedEventDetails');
    this.loggingService.writeDebug(event);

    game.transactionId = event.decoded.transactionId;
    game.auditRecordDrawId = event.decoded.auditRecordDrawId;
  }

  async leaveCurrentGame(
    gameId: number): Promise<Connex.Vendor.TxResponse> {
    const leaveGameMethod = this.connex.thor.account(
      this.getContractAddressForRollIt()
    )
      .method(this.getContractFunctionABIfor('leaveGame'))
      .caller(this.walletService.walletCertificate.annex.signer);

    return this.connex.vendor.sign('tx',
      [
        {
          ...leaveGameMethod.asClause(gameId),
          comment: `Leave the current game and refund your VET`
        }
      ])
      .signer(this.walletService.walletCertificate.annex.signer)
      .comment(`Leave Game ${gameId}`)
      .request();
  }

  async joinOpenGame(game: GameEntry): Promise<Connex.Vendor.TxResponse> {

      /* transfer abi */
    const transferABI = {"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"};    
    const currentPriceAuditFeeAmountInVetForGame = this.auditFixFeeService.getPlayerAuditFeeInVet(game.minimumGamePlayers, this.binanceApiService.binanceTickerResponseResult.price);
    const randomOrgVetinWeiFee = (currentPriceAuditFeeAmountInVetForGame).toString().padEnd(20, '0');          
    const transferMethod = this.connex.thor.account('0x' + this.donationWalletAddress).method(transferABI).value(randomOrgVetinWeiFee);       
    const randomOrgReadableAmount = parseInt(randomOrgVetinWeiFee) / 1e18;

    const amount = game.gameBetSize / 1e18;
    
    const joinGameMethod = this.connex.thor.account(
      this.getContractAddressForRollIt()
    )
      .method(this.getContractFunctionABIfor('joinExistingGame'))
      .value(game.gameBetSize)
      
      .caller(this.walletService.walletCertificate.annex.signer);

    let signer =  
    game.isAuditEnabled ? 
        this.connex.vendor.sign('tx',    
          [
            {
              ...joinGameMethod.asClause(game.id),
              comment: `Transfer ${amount} VET to join the pool id ${game.id}. This is refundable if you leave the pool before execution.`
            },
            
            {
              ...transferMethod.asClause('0x' + this.donationWalletAddress, '0x' + randomOrgVetinWeiFee),
              comment: `Transfer ${randomOrgReadableAmount} VET to reserve a random.org lottery drawing for pool id ${game.id}. This small reservation fee will not be refundable if you leave the pool early before it executes. However, your primary entry fee is always refunded when you exit a pool.`,
            }

          ])
          .signer(this.walletService.walletCertificate.annex.signer) 
          
          :
          
          this.connex.vendor.sign('tx',    
          [
            {
              ...joinGameMethod.asClause(game.id),
              comment: `Transfer ${amount} VET to join the pool id ${game.id}. This is refundable if you leave the pool before execution.`
            },                        

          ])
          .signer(this.walletService.walletCertificate.annex.signer);
      

      return signer
      .comment( game.isAuditEnabled ? 
        `You are joining a VeChain executed random.org audit protected pool drawing for pool ${game.id}. Provably unbiased. Random.org holds and selects the game winner and then the smart contract is updated for the pool. An audit link is provided by random.org once the game is completed. Intended for high stakes, unbiased, auditable protected drawings.` :
        `You are joining a VeChain executed lottery drawing pool ${game.id}`
      )
      .request();
  }

  async createGame(
    minPlayers: number,
    isAuditEnabled: boolean,
    wagerAmountInVET: number
  ): Promise<Connex.Vendor.TxResponse> {
    
    
    const transferABI = {"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"};    
    const currentPriceAuditFeeAmountInVetForGame = this.auditFixFeeService.getPlayerAuditFeeInVet(minPlayers, this.binanceApiService.binanceTickerResponseResult.price);
    const randomOrgVetinWeiFee = (currentPriceAuditFeeAmountInVetForGame).toString().padEnd(20, '0');          
    const transferMethod = this.connex.thor.account('0x' + this.donationWalletAddress).method(transferABI).value(randomOrgVetinWeiFee);       
    const randomOrgReadableAmount = parseInt(randomOrgVetinWeiFee) / 1e18;

    const amount = wagerAmountInVET;
    const vetamount = '0x' + (amount * 1e18).toString(16);

    const startGameMethod = this.connex.thor
      .account(this.getContractAddressForRollIt())
      .method(this.getContractFunctionABIfor('createGame'))
      .value(vetamount)
      .caller(this.walletService.walletCertificate.annex.signer);

    let signer =  isAuditEnabled ? 
    
    this.connex.vendor.sign('tx', [
        {
          ...startGameMethod.asClause(minPlayers, isAuditEnabled),
          comment: `Transfer ${amount} VET to create a new lottery pool. Fully refundable at anytime up until the lottery player limit is reached and the contract executes.`
        },
        {
          ...transferMethod.asClause('0x' + this.donationWalletAddress, '0x' + randomOrgVetinWeiFee),
          comment: `Transfer ${randomOrgReadableAmount} VET to reserve a random.org lottery drawing pool. This small reservation fee will not be refundable if you leave the pool early before it executes. However, your primary entry fee is always refunded when you exit a pool.`,
        }
      ]).signer(this.walletService.walletCertificate.annex.signer) 

      :         
      
      this.connex.vendor.sign('tx', [
        {
          ...startGameMethod.asClause(minPlayers, isAuditEnabled),
          comment: `Transfer ${amount} VET to create a new lottery pool. Fully refundable at anytime up until the lottery player limit is reached and the contract executes.`
        }
      ]).signer(this.walletService.walletCertificate.annex.signer) 
    
    return signer
    .comment(isAuditEnabled ? 
      `You are creating a VeChain executed random.org audit protected pool. Provably unbiased. Random.org holds and selects the game winner when the player limit is reached and then the smart contract is updated for the pool with results. An audit link is provided by random.org once the game is completed. Intended for high stakes, unbiased, auditable protected drawings.` :
      `You are creating a VeChain executed lottery drawing pool.`
    )
    .request();
   
  }


  async getGameByGameId(gameId: number): Promise<GameEntry> {
    const getGameByIdMethod =
      this.connex.thor.account(this.getContractAddressForRollIt())
        .method(this.getContractFunctionABIfor('getGameById'));
    const detail = await getGameByIdMethod.call(gameId);
    this.loggingService.writeDebug(detail);    
    const decodedGame = detail.decoded as DecodedGameEntity;
    const gameEntry = this.convertDecodedGameEntryToGameEntry(decodedGame);

    this.loggingService.writeDebug(gameEntry);
    return gameEntry;
  }

  async getGamesAwaitingGameCriteriaMet(): Promise<void> {
    const getGameMethod =
      this.connex.thor.account(this.getContractAddressForRollIt())
        .method(this.getContractFunctionABIfor('getGamesByStatus'));
    const detail = await getGameMethod.call(this.gameStatusService.AWAITING_GAME_CRITERIA_MET);
    this.loggingService.writeDebug(detail);
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

  private getContractFunctionABIfor(name: string): any {
    const func = RollItVetMultiPlayerGameDefinition.abi.find(item => item.name === name && item.type === 'function');
    return func;
  }
  private getContractAddressForRollIt(): string {       
   if(environment.production) {
     return RollItDeployedProductionContractAddress.address;
   }else if (environment.test) {
     return RollItDeployedTestContractAddress.address;
   }
   else {
    return RollItDeployedDevelopmentContractAddress.address;
   }                      
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
}
