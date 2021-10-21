import { AfterViewInit, Component, OnInit, ViewChild, QueryList } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, from, Subject } from 'rxjs';
import { CreateMessageMutation } from 'src/app/API.service';
import { SyncNotConnectedDialogComponent } from 'src/app/components/sync-not-detected-dialog/sync-not-detected-dialog.component';
import { CreateGameDialogComponent, CreateGameDialogData } from 'src/app/pages/games/rollit/components/create-game-dialog/create-game-dialog.component';
import { ArenaChatService } from 'src/app/services/arena-chat.service';
import { LoggingService } from 'src/app/services/logging.service';
import { ShellService } from 'src/app/services/shell.service';
import { environment } from 'src/environments/environment';
import { BinanceApiService } from './binance.api.service';
import { BlockchainService } from './blockchain.service';
import { ArenaChatBottomSheetComponent } from './components/arena-chat/arena-chat-bottomsheet.component';
import { GameTabsFilterService } from './game-tabs-filter.service';
import { GameStatusService } from './helper-services/gamestatus.service';
import { WalletService } from './helper-services/wallet-service';
import { GameEntry, RollItChatMessage } from './rollit_models';
import { WagerConversionService } from './helper-services/wager-conversion.service'
import { GameplayHelpDialogComponent } from './components/gameplay-help-dialog/gameplay-help-dialog.component';

@Component({
  selector: 'app-rollit',
  templateUrl: './rollit.component.html',
  styleUrls: ['./rollit.component.scss']
})
export class RollitComponent implements OnInit, AfterViewInit {

  formBuilder: FormBuilder;
  rollItForm!: FormGroup;

  vetBetButtons: BetButton[] = [];
  vthoBetButtons: BetButton[] = [];

  cryptoCurrencyOptions: CryptoCurrencyOption[] = [];

  vetBetMinValue: number;
  vetBetMaxValue: number;
  vetPotentialProfitDisplay: string;

  minPercentChanceOfWinning: number;
  maxPercentChanceOfWinning: number;

  shellService: ShellService;
  blockChainService: BlockchainService;
  walletService: WalletService;
  gameFilterService: GameTabsFilterService;
  gameStatusService: GameStatusService;
  arenaChatService: ArenaChatService;

  snackBar: MatSnackBar;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';

  binanceResultVetUsdtPrice: number;

  openAuditGameLinkTooltip: string;

  gameDetailsRetrievedForYourGamesTab: boolean;

  wagerConversionService: WagerConversionService;

  @ViewChild('openGamesPaginator') openGamesPaginator: MatPaginator;
  @ViewChild('completedGamesPaginator') completedGamesPaginator: MatPaginator;
  @ViewChild('yourGamesPaginator', { static: false }) yourGamesPaginator: MatPaginator;

  @ViewChild('openGamesSort') openGamesSort!: MatSort;
  @ViewChild('completedGamesSort') completedGamesSort: MatSort;
  @ViewChild('yourGamesSort') yourGamesSort: MatSort;

  constructor(
    private arenaChatBottomSheet: MatBottomSheet,
    public dialog: MatDialog,
    shellService: ShellService,
    blockChainService: BlockchainService,
    walletService: WalletService,
    gameFilterService: GameTabsFilterService,
    gameStatusService: GameStatusService,
    arenaChatService: ArenaChatService,
    formBuilder: FormBuilder,
    snackBar: MatSnackBar,
    wagerConversionService: WagerConversionService,
    private loggingService: LoggingService,    
  ) {
    this.gameDetailsRetrievedForYourGamesTab = false;
    this.shellService = shellService;
    shellService.headerTitle = 'roll it';
    this.openAuditGameLinkTooltip = environment.production ? 'Audit Enabled Game' :
      'Audit Enabled Game - Demo mode [Non-Production]: Opens a demonstration of an audited report for a game since reports are billable';

    this.snackBar = snackBar;
    const snackBarConfig = new MatSnackBarConfig();
    snackBarConfig.horizontalPosition = this.horizontalPosition;

    this.blockChainService = blockChainService;
    this.walletService = walletService;
    this.gameFilterService = gameFilterService;
    this.gameStatusService = gameStatusService;
    this.arenaChatService = arenaChatService;

    this.wagerConversionService = wagerConversionService;

    this.formBuilder = formBuilder;

    this.createGameTabFilterServiceSubscribers();
  }

  openRandomOrgAuditLinkByGameId(auditRecordDrawId: number): void {
    if (!environment.production) {
      this.snackBar.open('not a real money game', 'test-mode drawing enabled');
      this.loggingService.writeDebug(`openRandomOrgAuditLinkByGameId ${auditRecordDrawId}`);
      window.open(`https://www.random.org/draws/details/?draw=134655`);
    }
    else {
      window.open(`https://www.random.org/draws/details/?draw=${auditRecordDrawId}`);
    }
  }
  openVeChainTransactionInsightByGameId(gameTrxId: number): void {
    window.open(`https://insight.vecha.in/#/txs/${gameTrxId}`);
  }

  openCreateArenaChatMessage(): void {

    debugger;
    if (!this.shellService.isUserConnexAuthorized()) {
      const dialogRef = this.dialog.open(SyncNotConnectedDialogComponent);
    }
    else if (this.walletService.userIsLoggedInToWallet()) {
      const bottomSheet = this.arenaChatBottomSheet.open(ArenaChatBottomSheetComponent, { autoFocus: true });
      bottomSheet.afterDismissed().subscribe((createMessageResult: CreateMessageMutation) => {

      }, (error) => {
        this.loggingService.writeDebug(error);
      });
    }
  }
  createGameTabFilterServiceSubscribers(): void {

    this.gameFilterService.openGameEntriesSubject.subscribe((next) => {
      this.loggingService.writeDebug('openGameEntriesSubject subscriber worked');
      this.gameFilterService.openGameDataSource = new MatTableDataSource(next);
      this.gameFilterService.openGameDataSource.paginator = this.openGamesPaginator;
      this.gameFilterService.openGameDataSource.sort = this.openGamesSort;
    }, (error) => {
      this.loggingService.writeDebug('observable subscribe error');
    });

    this.gameFilterService.completedGamesEntriesSubject.subscribe((next) => {
      this.loggingService.writeDebug('completedGamesEntriesSubject subscriber worked');
      this.gameFilterService.completedGamesDataSource = new MatTableDataSource(next);
      this.gameFilterService.completedGamesDataSource.paginator = this.completedGamesPaginator;
      this.gameFilterService.completedGamesDataSource.sort = this.completedGamesSort;
    }, (error) => {
      this.loggingService.writeDebug('observable subscribe error');
    });

    // DO I NEED THIS?
    this.gameFilterService.yourGamesEntriesSubject.subscribe((next) => {
      this.loggingService.writeDebug('yourGamesEntriesSubject subscriber worked');
      this.gameFilterService.yourGamesDataSource = new MatTableDataSource(next);
      this.gameFilterService.yourGamesDataSource.paginator = this.yourGamesPaginator;
      this.gameFilterService.yourGamesDataSource.sort = this.yourGamesSort;
    }, (error) => {
      this.loggingService.writeDebug('observable subscribe error');
    });
  }

  testMethod(gameId: number): void {
    this.blockChainService.testMethod(gameId);
  }
  joinOpenGame(gameId: number): void {
    if (this.shellService.isUserConnexAuthorized() && this.walletService.userIsLoggedInToWallet()) {
      this.blockChainService.getGameByGameId(gameId).then((game) => {
        this.blockChainService.joinOpenGame(game.id,
          game.gameBetSize).then(result => {
            this.loggingService.writeDebug(result);
            this.createTransactionVisitorForJoiningGame(result.txid, gameId);
          }).catch(ex => {
            this.loggingService.writeDebug(ex);
          });
      });
    }
  }

  leaveGame(gameId: number): void {
    if (this.shellService.isUserConnexAuthorized() && this.walletService.userIsLoggedInToWallet()) {

      this.blockChainService.leaveCurrentGame(gameId).then(result => {
        this.loggingService.writeDebug(result);
        this.createTransactionVisitorForLeavingGame(result.txid, gameId);
      }).catch(ex => {
        this.loggingService.writeDebug(ex);
      });

    }

  }

  private createTransactionVisitorForLeavingGame(trxid: string, gameId: number): void {
    this.loggingService.writeDebug('creating transaction visitor');
    const snackBarRef = this.snackBar;
    const transactionVisitor = this.blockChainService.connex.thor.transaction(trxid);

    snackBarRef.open('pending block confirmation');
    this.waitForAndCheckReceiptForLeavingGame(transactionVisitor, gameId);
  }

  private createTransactionVisitorForJoiningGame(trxid: string, gameId: number): void {
    this.loggingService.writeDebug('creating transaction visitor');
    const snackBarRef = this.snackBar;
    const transactionVisitor = this.blockChainService.connex.thor.transaction(trxid);

    snackBarRef.open('pending block confirmation');
    this.waitForAndCheckReceiptForJoiningGame(transactionVisitor, gameId);
  }

  private waitForAndCheckReceiptForLeavingGame(transactionVisitor: Connex.Thor.Transaction.Visitor, gameId: number): void {
    this.loggingService.writeDebug('waitForAndCheckReceiptForLeavingGame');
    const snackBarRef = this.snackBar;
    const timerId = window.setInterval(() =>
      transactionVisitor.getReceipt().then(tx => {
        this.loggingService.writeDebug(tx);
        if (tx !== null && tx?.reverted === true) {
          snackBarRef.open('error', 'transaction reverted', {
            duration: 1500
          });
        }
        else if (tx !== null && !tx?.reverted) {
          snackBarRef.open('success', 'transaction confirmed', {
            duration: 1500
          });
        }
        if (tx !== null) {
          clearInterval(timerId);

          this.blockChainService.getGameByGameId(gameId).then((game) => {

            this.gameFilterService.removeItemFromDataSource(
              this.gameFilterService.yourGamesDataSource,
              game
            );

          });
        }
      }),
      500
    );
  }



  private waitForAndCheckReceiptForJoiningGame(transactionVisitor: Connex.Thor.Transaction.Visitor, gameId: number): void {
    this.loggingService.writeDebug('waitForAndCheckReceiptForJoiningGame');
    const snackBarRef = this.snackBar;
    const timerId = window.setInterval(() =>
      transactionVisitor.getReceipt().then(tx => {
        this.loggingService.writeDebug(tx);
        if (tx !== null && tx?.reverted === true) {
          snackBarRef.open('error', 'transaction reverted', {
            duration: 1500
          });
        }
        else if (tx !== null && !tx?.reverted) {
          snackBarRef.open('success', 'transaction confirmed', {
            duration: 1500
          });
        }
        if (tx !== null) {
          clearInterval(timerId);

          this.blockChainService.getGameByGameId(gameId).then((game) => {
            console.log(game);
            this.blockChainService.yourGamesChanged?.next(game);
          });

        }
      }),
      500
    );
  }

  private createTransactionVisitor(trxid: string): void {
    this.loggingService.writeDebug('creating transaction visitor');
    const snackBarRef = this.snackBar;
    const transactionVisitor = this.blockChainService.connex.thor.transaction(trxid);

    snackBarRef.open('pending block confirmation');
    this.waitForAndCheckReceipt(transactionVisitor);
  }
  private waitForAndCheckReceipt(transactionVisitor: Connex.Thor.Transaction.Visitor): void {
    const snackBarRef = this.snackBar;
    const timerId = window.setInterval(() =>
      transactionVisitor.getReceipt().then(tx => {
        this.loggingService.writeDebug(tx);
        if (tx !== null && tx?.reverted === true) {
          snackBarRef.open('error', 'transaction reverted', {
            duration: 1500
          });
        }
        else if (tx !== null && !tx?.reverted) {
          snackBarRef.open('success', 'transaction confirmed', {
            duration: 1000
          });
        }
        if (tx !== null) {
          clearInterval(timerId);
        }
      }),
      1000
    );
  }

  openCreateGameDialog(): void {
    if (this.shellService.isUserConnexAuthorized() && this.walletService.userIsLoggedInToWallet()) {
      const dialogRef = this.dialog.open(CreateGameDialogComponent, {
      });

      dialogRef.afterClosed().subscribe({
        next: dialogResult => {
          const createGameSettings = (dialogResult?.data as CreateGameDialogData);
          if (createGameSettings?.createGame) {
            this.createGame(createGameSettings.VET, createGameSettings.players, createGameSettings.isAuditEnabled);
          }
        },
        error: err => {
          this.loggingService.writeDebug(err);
        }
      });
    }
  }

  openShowGameHelpDialog(): void {
    
      const dialogRef = this.dialog.open(GameplayHelpDialogComponent, {});

      dialogRef.afterClosed().subscribe({
        next: dialogResult => {         
        },
        error: err => {
          this.loggingService.writeDebug(err);
        }
      });
  }
  


  private createGame(wagerInVET: number, playerCount: number, isAuditEnabled: boolean): void {

    if (this.walletService.walletCertificate !== undefined) {
      this.blockChainService
        .createGame(
          playerCount,
          isAuditEnabled,
          wagerInVET).then(signingResponse => {
            this.loggingService.writeDebug(signingResponse);
            this.createTransactionVisitor(signingResponse.txid);
          }).catch(ex => {
            this.loggingService.writeDebug(ex);
          });
    }
    else {
      throw new Error('wallet certificate is undefined');
    }
  }

  ngOnInit(): void {
    this.rollItForm = this.formBuilder.group({
      betValueControl: new FormControl(this.vetBetMinValue, [
        Validators.required,
        Validators.min(this.vetBetMinValue),
        Validators.max(this.vetBetMaxValue),
        Validators.pattern('[0-9]+')
      ]),
      percentChanceOfWinningControl: new FormControl(50, [
        Validators.required,
        Validators.min(this.minPercentChanceOfWinning),
        Validators.max(this.maxPercentChanceOfWinning),
        Validators.pattern('[0-9]+')
      ])
    });
  }

  ngAfterViewInit(): void {
    this.gameFilterService.yourGamesDataSource.paginator = this.yourGamesPaginator;
    this.gameFilterService.yourGamesDataSource.sort = this.yourGamesSort;

    this.gameFilterService.completedGamesDataSource.paginator = this.completedGamesPaginator;
    this.gameFilterService.completedGamesDataSource.sort = this.completedGamesSort;
  }
}

class CryptoCurrencyOption {

  constructor(cryptoValueIdentifier: string, displayText: string, isChecked: boolean, isDisabled: boolean) {
    this.cryptoValueIdentifier = cryptoValueIdentifier;
    this.displayText = displayText;
    this.isChecked = isChecked;
    this.isDisabled = isDisabled;
  }

  isChecked!: boolean;
  isDisabled!: boolean;
  displayText!: string;
  cryptoValueIdentifier!: string;
}
class BetButton {
  constructor(value: number) {
    this.betText = value.toString();
    this.betValue = value;
  }
  betText!: string;
  betValue!: number;
}

