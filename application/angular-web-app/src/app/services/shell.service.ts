import { Injectable, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { environment } from 'src/environments/environment';
import { FeedbackDialogComponent, FeedbackDialogData } from '../components/feedback-dialog/feedback-dialog.component';
import { ProfileDialogComponent, ProfileDialogData } from '../components/profile-dialog/profile-dialog.component';

import { DateConversionService } from '../pages/games/rollit/helper-services/date-conversion.service';

import { WalletService } from '../pages/games/rollit/helper-services/wallet-service';
import { BlockchainService } from '../pages/games/rollit/blockchain.service';
import { BinanceApiService } from '../pages/games/rollit/binance.api.service';
import { DonateDialogComponent, DonateDialogData } from '../components/donate-dialog/donate-dialog.component';
import { SyncNotConnectedDialogComponent } from '../components/sync-not-detected-dialog/sync-not-detected-dialog.component';

import { APIService, feedbackStatus } from '../API.service';

import DonationKeystoreDevelopment from '../../../../wallets/sync2/addresses/vechain.dev.donation.address.json';
import DonationKeystoreTest from '../../../../wallets/sync2/addresses/vechain.test.donation.address.json';
import DonationKeystoreProduction from '../../../../wallets/sync2/addresses/vechain.main.donation.address.json';

import { LoggingService } from './logging.service';
import { MatMenuTrigger } from '@angular/material/menu';


@Injectable({
  providedIn: 'root'
})
export class ShellService {

  @ViewChild('mobileToolbarMenuTrigger') mobileToolbarMenuTrigger: MatMenuTrigger;

  @Output()
  headerTitle: string;
  dialogFeedbackResult: FeedbackDialogData | undefined;
  dialogUserWalletProfileResult: ProfileDialogData | undefined;
  dialogDonateResult: DonateDialogData | undefined;

  walletService: WalletService;
  blockChainService: BlockchainService;
  binanceApiService: BinanceApiService;

  dateConversionService: DateConversionService;

  apiService: APIService;

  profileTooltipText!: string;
  profileIconThemeColoring!: string;

  feedbackTooltipText!: string;
  feedbackIconThemeColoring!: string;

  donateTooltipText!: string;
  donateIconThemeColoring!: string;

  joinTheGameTooltipText!: string;
  joinTheGameIconThemeColoring!: string;

  donationWalletAddress: string;

  constructor(
    public dialog: MatDialog,
    walletService: WalletService,
    blockChainService: BlockchainService,
    binanceApiService: BinanceApiService,
    dateConversionService: DateConversionService,
    apiService: APIService,
    private loggingService: LoggingService
  ) {
    this.headerTitle = 'adexr.io';
    this.walletService = walletService;
    this.blockChainService = blockChainService;
    
    this.binanceApiService = binanceApiService;
    this.dateConversionService = dateConversionService;
    this.apiService = apiService;    

    this.donationWalletAddress = this.getDonationWalletAddress();
    this.blockChainService.donationWalletAddress = this.donationWalletAddress;

    this.walletService.walletSubject.subscribe({
      next: (item) => {
        if (item) {
          this.profileTooltipText = 'Profile Settings';
          this.profileIconThemeColoring = 'accent';

          this.feedbackTooltipText = 'Help us with your feedback';
          this.feedbackIconThemeColoring = '';

          this.donateTooltipText = 'Donate';
          this.donateIconThemeColoring = '';

          this.joinTheGameTooltipText = 'Join the games here';
          this.joinTheGameIconThemeColoring = 'accent';
        }
        else {
          const loginText = 'Login first to start using the dApp';

          this.profileTooltipText = loginText;
          this.profileIconThemeColoring = 'warn';

          this.feedbackTooltipText = loginText;
          this.feedbackIconThemeColoring = 'warn';

          this.donateTooltipText = loginText;
          this.donateIconThemeColoring = 'warn';

          this.joinTheGameTooltipText = loginText;
          this.joinTheGameIconThemeColoring = 'warn';
        }
      },
      error: (error) => {
        this.loggingService.writeDebug(error);
      }
    });

    this.walletService.walletSubject.next(undefined);
  }
  getDonationWalletAddress(): string {
    if (environment.local) {
      return DonationKeystoreDevelopment.address;
    }
    else if (environment.test) {
      return DonationKeystoreTest.address;
    }
    else if (environment.production) {
      return DonationKeystoreProduction.address;
    }
    else {
      throw Error('Donation address not found from environment file');
    }
  }

  openDonationDialog(): void {

    if (!this.isUserConnexAuthorized()) {
      const dialogRef = this.dialog.open(SyncNotConnectedDialogComponent, {
        data: {
          message: ''
        }
      });
    }
    else if (this.walletService.userIsLoggedInToWallet()) {
      const dialogRef = this.dialog.open(DonateDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.dialogDonateResult = result;
          this.blockChainService.signAndSendDonation(
            result.donateVETAmount,
            this.donationWalletAddress).then((donationResult) => {
              this.loggingService.writeDebug('donation completed');
              this.loggingService.writeDebug(donationResult);              
            }).catch((err) => {
              this.loggingService.writeDebug('error occurred');
              this.loggingService.writeDebug(err);              
            });
        }
      });
    }
  }

  openFeedbackDialog(): void {

    if (!this.isUserConnexAuthorized()) {
      const dialogRef = this.dialog.open(SyncNotConnectedDialogComponent);
    }
    else if (this.walletService.userIsLoggedInToWallet()) {
      const dialogRef = this.dialog.open(FeedbackDialogComponent);

      dialogRef.afterClosed().subscribe(dialogResult => {
        this.loggingService.writeDebug('The dialog was closed with result' + dialogResult);
        if (dialogResult?.feedback) {
          this.apiService.CreateFeedback({
            comment: dialogResult.feedback,
            commentType: dialogResult.feedbackType,
            status: feedbackStatus.pending,
            wallet: this.walletService.walletCertificate.annex.signer
          }).then(success => {

          }, error => {
            this.loggingService.writeDebug(error);
          });

        }
      });
    }
  }
  openUserWalletProfile(): void {

    if (!this.isUserConnexAuthorized()) {
      const dialogRef = this.dialog.open(SyncNotConnectedDialogComponent, {
        data: {
          message: ''
        }
      });
    }
    else {
      if (this.walletService.walletCertificate !== undefined) {
        const dialogRef = this.dialog.open(ProfileDialogComponent, {
          data: {
            feedback: '',
            isUserConnexAuthorized: this.isUserConnexAuthorized(),
            walletService: this.walletService,
            convertedDate: this.dateConversionService
              .convertContractDateToReadable(this.walletService.walletCertificate.annex.timestamp)
          }
        });

        dialogRef.afterClosed().subscribe(dialogResult => {
          if (dialogResult?.logout) {
            this.walletService.clearWalletCertificate();
          }
        });
      }
      else {
        this.blockChainService.requestIdentitySigning().then((certificateResponse) => {
          this.loggingService.writeDebug(certificateResponse);
          this.walletService.addNewSigningCertificate(certificateResponse);
        });
      }
    }
  }
  processMobileToolbarMenuClick(): void {
    if(this.walletService.userIsLoggedInToWallet()) {
      debugger;
      this.mobileToolbarMenuTrigger.openMenu();
    }else {      
      this.openUserWalletProfile();
    }
  }

  isUserAdmin(): boolean {
    return false;
  }
  isUserConnexAuthorized(): boolean {
    // CAN BE DELETED AND REPLACED WITH LINES 207 WHEN SYNC2 IS RELEASED 
    // For Sync1
    //const authorized = window.connex ? true : false;
    // CAN BE DELETED AND REPLACED

    // For Sync2
    const authorized = this.userIsConnectedWithSync(this.blockChainService.connex);
    if (environment.showDebug) {
      this.loggingService.writeDebug(authorized);
    }
    return authorized;
  }

  private userIsConnectedWithSync(connex: Connex): boolean {
    if (!connex) {
      return false;
    }
    return true;
  }

}
