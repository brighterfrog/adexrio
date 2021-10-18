import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { LoggingService } from 'src/app/services/logging.service';
import { BlockchainService } from './blockchain.service';
import { GameStatusService } from './helper-services/gamestatus.service';
import { WalletService } from './helper-services/wallet-service';
import { GameEntry } from './rollit_models';

@Injectable({
  providedIn: 'root'
})
export class GameTabsFilterService {

  gameStatusService: GameStatusService;
  blockChainService: BlockchainService;
  walletService: WalletService;

  openGameDisplayColumns: string[] = [];
  openGameEntriesSubject!: Subject<GameEntry[]>;
  openGameDataSource: MatTableDataSource<GameEntry>;

  yourGamesDisplayColumns: string[] = [];
  yourGamesEntriesSubject!: Subject<GameEntry[]>;
  yourGamesDataSource: MatTableDataSource<GameEntry>;

  completedGamesDisplayColumns: string[] = [];
  completedGamesEntriesSubject!: Subject<GameEntry[]>;
  completedGamesDataSource: MatTableDataSource<GameEntry>;

  hasCompletedRetrievingCurrentPlayersPlayerLeftGameEvents: boolean;

  eventsThePlayerHasLeftGame: Connex.Thor.Filter.Row<'event', Connex.Thor.Account.WithDecoded>[];

  constructor(
    gameStatusService: GameStatusService,
    blockChainService: BlockchainService,
    walletService: WalletService,
    private loggingService: LoggingService
  ) {
    this.gameStatusService = gameStatusService;
    this.blockChainService = blockChainService;
    this.walletService = walletService;

    this.openGameDataSource = new MatTableDataSource([]);
    this.openGameEntriesSubject = new Subject();
    this.openGameDisplayColumns = [
      'action',
      'id',
      'totalGameWagers',
      'gameTotalEligiblePlayers',
      'minimumGamePlayers',
      'isAuditEnabled'
    ];

    this.yourGamesDataSource = new MatTableDataSource([]);
    this.yourGamesEntriesSubject = new Subject();
    this.yourGamesDisplayColumns = [
      'action',
      'id',
      'totalGameWagers',
      'gameWinningPayout',
      'gameWinnerAddress',
      'gameTotalEligiblePlayers',
      'minimumGamePlayers',
      'isAuditEnabled'
    ];

    this.completedGamesDataSource = new MatTableDataSource([]);
    this.completedGamesEntriesSubject = new Subject();
    this.completedGamesDisplayColumns = [
      'action',
      'id',
      'totalGameWagers',
      'gameWinningPayout',
      'gameWinnerAddress',
      'gameTotalEligiblePlayers',
      'minimumGamePlayers',
      'isAuditEnabled'
    ];

    this.createBlockchainServiceSubscriptions();
    this.getInitialData();
  }

  createBlockchainServiceSubscriptions(): void {

    this.blockChainService.openGamesChanged?.subscribe((gameEntry) => {
      this.loggingService.writeDebug('blockChainService.openGamesChanged?.subscribe');
      this.openGameDataSource.data.unshift(gameEntry);
      this.openGameDataSource._updateChangeSubscription();
    });
    this.blockChainService.yourGamesChanged?.subscribe((gameEntry) => {
      this.loggingService.writeDebug('blockChainService.yourGamesChanged?.subscribe');
      this.loggingService.writeDebug('GameEntry to add is');
      this.loggingService.writeDebug(gameEntry);

      this.loggingService.writeDebug('yourGamesDataSource');
      this.loggingService.writeDebug(this.yourGamesDataSource);
      this.yourGamesDataSource.data.unshift(gameEntry);
      this.loggingService.writeDebug('New Your games array should be');

      this.loggingService.writeDebug(this.yourGamesDataSource.data);
      this.updateGameEntriesWithLeftGameEvent(this.yourGamesDataSource, this.eventsThePlayerHasLeftGame);
    });
    this.blockChainService.completedGamesChanged?.subscribe((gameEntry) => {
      this.loggingService.writeDebug('blockChainService.completedGamesChanged?.subscribe');

      this.removeItemFromDataSource(this.openGameDataSource, gameEntry);
      this.updateDataSourceExistingItem(this.yourGamesDataSource, gameEntry);
      this.addItemToDataSource(this.completedGamesDataSource, gameEntry);
    });
    this.blockChainService.existingGamesChanged?.subscribe((gameEntry) => {
      this.loggingService.writeDebug('blockChainService.existingGamesChanged?.subscribe');
      this.loggingService.writeDebug(gameEntry);

      this.removeOpenGameItemsThatAreFullPlayersAwaitingLotteryFromDataSource(this.openGameDataSource, gameEntry);

      this.updateDataSourceExistingItem(this.openGameDataSource, gameEntry);
      this.updateDataSourceExistingItem(this.yourGamesDataSource, gameEntry);
    });

    this.blockChainService.retrieveCompletedForYourLeaveEvents?.subscribe((events) => {
      console.log('retrieveCompletedForYourLeaveEvents');
      this.eventsThePlayerHasLeftGame = events;
      this.updateGameEntriesWithLeftGameEvent(
        this.openGameDataSource,
        this.eventsThePlayerHasLeftGame
      );

    });


    this.blockChainService.walletService.walletSubject.subscribe({
      next: (walletCertificate) => {
        if (walletCertificate) {
          this.getDataForYourGamesTab();
        }
        else {
          this.yourGamesDataSource.data = [];
          this.yourGamesDataSource.paginator.pageIndex = 0;

          this.yourGamesDataSource._updateChangeSubscription();
        }
      }
    });

  }

  updateGameEntriesWithLeftGameEvent(
    dataSource: MatTableDataSource<GameEntry>,
    events: Connex.Thor.Filter.Row<'event', Connex.Thor.Account.WithDecoded>[]
  ): void {

    console.log('updateGameEntriesWithLeftGameEvent');
    console.log(events);
    events.forEach((event) => {
      const eventGameId = event.decoded.gameId;
      const foundGame = dataSource.data.find((existingGame) => existingGame.id === eventGameId);
      if (foundGame) {
        this.removeItemFromDataSource(dataSource, foundGame);
      }
    });

    this.hasCompletedRetrievingCurrentPlayersPlayerLeftGameEvents = true;
    dataSource._updateChangeSubscription();
  }

  private updateDataSourceExistingItem(dataSource: MatTableDataSource<GameEntry>, gameEntry: GameEntry): void {
    this.loggingService.writeDebug('updateDataSourceExistingItem');

    const foundGame = dataSource.data.find((existingGame) => existingGame.id === gameEntry.id);

    if (foundGame) {
      this.loggingService.writeDebug('existing game found');
      const index = dataSource.data.indexOf(foundGame);
      this.loggingService.writeDebug(index);
      this.loggingService.writeDebug(foundGame);
      dataSource.data[index] = gameEntry;
      // dataSource = new MatTableDataSource(dataSource.data);

      this.loggingService.writeDebug('logging dataSource');
      this.loggingService.writeDebug(dataSource.data);

      dataSource._updateChangeSubscription();
      this.loggingService.writeDebug('data source updated');
    }
  }

  private removeOpenGameItemsThatAreFullPlayersAwaitingLotteryFromDataSource(
    dataSource: MatTableDataSource<GameEntry>, gameEntry: GameEntry
  ): void {
    this.loggingService.writeDebug('removeOpenGameItemsThatAreFullPlayersAwaitingLotteryFromDataSource');
    this.loggingService.writeDebug(gameEntry.status.toString());
    if (gameEntry.status.toString() !== this.gameStatusService.AWAITING_GAME_CRITERIA_MET) {
      this.removeItemFromDataSource(dataSource, gameEntry);
    }
  }

  private addItemToDataSource(dataSource: MatTableDataSource<GameEntry>, gameEntry: GameEntry): void {
    dataSource.data.unshift(gameEntry);
    dataSource._updateChangeSubscription();
  }

  removeItemFromDataSource(dataSource: MatTableDataSource<GameEntry>, gameEntry: GameEntry): void {
    dataSource.data = dataSource.data.filter(item => item.id !== gameEntry.id);
    this.loggingService.writeDebug('removeItemFromDataSource');
    this.loggingService.writeDebug(dataSource.data);
    dataSource._updateChangeSubscription();
  }

  private async getInitialData(): Promise<void> {
    this.loggingService.writeDebug('get initial data worked');

    this.openGameEntriesSubject.next(await this.getDataForOpenGamesTab());

    this.getDataForCompletedGamesTabInBackground();
  }

  private async getDataForOpenGamesTab(): Promise<GameEntry[]> {
    this.loggingService.writeDebug('getDataForOpenGamesTab PRE-CALL');
    const data = await this.blockChainService.getOpenGameData();
    return data;
  }

  getDataForCompletedGamesTabInBackground(): void {
    this.blockChainService
      .getAllCompletedGamesByFilteringGameCompletedEvents();
  }
  getDataForYourGamesTab(): void {
    this.blockChainService
      .getAllYourGamesByFilteringCreatedJoinedLeaveEvents();
  }

}


