import { HostBinding, Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import { Connex } from '@vechain/connex';
import { Subject } from 'rxjs';
import RollItVetMultiPlayerGameDefinition from '../../../../../../vechain-contracts/build/contracts/RollItVetMultiPlayerGame.json';
import { ConnexService } from './helper-services/connex-service';
import { DateConversionService } from './helper-services/date-conversion.service';
import { GameStatusService } from './helper-services/gamestatus.service';
import { GlobalService } from './helper-services/globals-service';
import { WagerConversionService } from './helper-services/wager-conversion.service';
import { ContractEvent, DecodedGameEntries as DecodedGameEntries, DecodedGameEntity, EventObject, GameEntry } from './rollit_models';
import { environment } from '../../../../environments/environment';
import { WalletService } from './helper-services/wallet-service';
import { LoggingService } from 'src/app/services/logging.service';


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

  constructor(
    globalService: GlobalService,
    gameStatusService: GameStatusService,
    wagerConversionService: WagerConversionService,
    dateConversionService: DateConversionService,
    connexService: ConnexService,
    walletService: WalletService,
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

    // const signingService = this.connex.vendor.sign('tx');
    // signingService.comment(`Donate ${vetAmount} to adexr.io`);

    // return signingService.request([{
    //   to: donationAddress,
    //   value: this.wagerConversionService.convertVETtoWei(vetAmount),
    //   data: '0x',
    // }]);

    return this.connex.vendor.sign('tx',
      [
        {
          to: `0x${donationAddress}`,
          value: this.wagerConversionService.convertVETtoWei(vetAmount),
          // data: '0x'
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

  async joinOpenGame(
    gameId: number,
    gameBetSize: number): Promise<Connex.Vendor.TxResponse> {

    const amount = gameBetSize / 1e18;
    const joinGameMethod = this.connex.thor.account(
      this.getContractAddressForRollIt()
    )
      .method(this.getContractFunctionABIfor('joinExistingGame'))
      .value(gameBetSize)
      .caller(this.walletService.walletCertificate.annex.signer);

    return this.connex.vendor.sign('tx',
      [
        {
          ...joinGameMethod.asClause(gameId),
          comment: `Transfer ${amount} VET`
        }
      ])
      .signer(this.walletService.walletCertificate.annex.signer)
      .comment('Join Game')
      .request();
  }

  async createGame(
    minPlayers: number,
    isAuditEnabled: boolean,
    wagerAmountInVET: number
  ): Promise<Connex.Vendor.TxResponse> {
    const amount = wagerAmountInVET;
    const vetamount = '0x' + (amount * 1e18).toString(16);

    const startGameMethod = this.connex.thor
      .account(this.getContractAddressForRollIt())
      .method(this.getContractFunctionABIfor('createGame'))
      .value(vetamount)
      .caller(this.walletService.walletCertificate.annex.signer);

    return this.connex.vendor.sign('tx', [
      {
        ...startGameMethod.asClause(minPlayers, isAuditEnabled),
        comment: `Transfer ${amount} VET`
      }
    ]).signer(this.walletService.walletCertificate.annex.signer)
      .comment('Create New Game')
      .request();

  }


  async getGameByGameId(gameId: number): Promise<GameEntry> {
    const getGameByIdMethod =
      this.connex.thor.account(this.getContractAddressForRollIt())
        .method(this.getContractFunctionABIfor('getGameById'));
    const detail = await getGameByIdMethod.call(gameId);
    console.log(detail);
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
    return RollItVetMultiPlayerGameDefinition.networks[5777].address;
  }
  private getEventsFromContract(): ContractEvent[] {
    const events = RollItVetMultiPlayerGameDefinition.networks[5777].events as EventObject<object>;
    const eventKeys = Object.keys(events) as { [key: string]: any };
    const wrappedEvents: ContractEvent[] = [];
    eventKeys.forEach((key: string) => {
      const item = events[key];
      wrappedEvents.push({
        key,
        abi: item
      });
    });

    return wrappedEvents;
  }
}
