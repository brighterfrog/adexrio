import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DonateDialogData {
  donateVETAmount: number;
}

@Component({
  selector: 'app-donate-dialog',
  templateUrl: './donate-dialog.component.html',
  styleUrls: ['./donate-dialog.component.scss']
})
export class DonateDialogComponent implements OnInit {
  formBuilder: FormBuilder;
  donateForm: FormGroup;
  minimumDonationAmount: number;

  constructor(
    formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DonateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DonateDialogData) {
    this.minimumDonationAmount = 1;
    this.formBuilder = formBuilder;
    this.donateForm = this.formBuilder.group({
      donateVetControl: new FormControl('', [
        Validators.required,
        Validators.min(this.minimumDonationAmount),
        Validators.pattern('[0-9]+')
      ])
    });
  }

  onOkClick(): void {
    if (this.donateForm.valid) {
      this.dialogRef.close({ donateVETAmount: this.donateForm.get('donateVetControl').value });
    }
    else {
      this.donateForm.get('donateVetControl').markAsDirty();
      this.donateForm.get('donateVetControl').markAsTouched();
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
