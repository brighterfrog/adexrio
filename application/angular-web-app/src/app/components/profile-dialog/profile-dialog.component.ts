import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateConversionService } from 'src/app/pages/games/rollit/helper-services/date-conversion.service';
import { WalletService } from 'src/app/pages/games/rollit/helper-services/wallet-service';
import { ShellService } from 'src/app/services/shell.service';

export interface ProfileDialogData {
  isUserConnexAuthorized: boolean;
  walletService: WalletService;
  convertedDate: string;
}

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProfileDialogData
  ) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  logoutWallet(): void {
    this.dialogRef.close({
      logout: true
    });
  }

}
