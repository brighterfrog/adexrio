import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SyncNotDetectedData {
  message: string;
}

@Component({
  selector: 'app-sync-not-detected-dialog',
  templateUrl: './sync-not-detected-dialog.component.html',
  styleUrls: ['./sync-not-detected-dialog.component.scss']
})
export class SyncNotConnectedDialogComponent implements OnInit {
  formBuilder: FormBuilder;
  donateForm: FormGroup;
  minimumDonationAmount: number;

  constructor(
    formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SyncNotConnectedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SyncNotDetectedData) {
  }


  ngOnInit(): void {
  }

}
