import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormhelpersService } from 'src/app/services/formhelpers.service';

export interface FeedbackDialogData {
  feedback: string;
}

export enum feedbackType {
  general = 'general',
  enhancement = 'enhancement',
  bug = 'bug',
  interest = 'interest'
}

export class FeedbackTypes {
  name: string;
  type: feedbackType;
}

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent implements OnInit {
  formHelpersService: FormhelpersService;
  formBuilder: FormBuilder;
  form: FormGroup;

  selectedFeedbackType: string;
  feedbackTypes: FeedbackTypes [];

  constructor(
    formBuilder: FormBuilder,
    formHelpersService: FormhelpersService,
    public dialogRef: MatDialogRef<FeedbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FeedbackDialogData
  ) {
    this.formHelpersService = formHelpersService;
    this.formBuilder = formBuilder;
    this.form = this.formBuilder.group({
      feedbackControl: new FormControl('', [
        Validators.required
      ]),
      feedbackTypeControl: new FormControl('', [
        Validators.required
      ])

    });

    this.feedbackTypes = [
      { name: 'general', type: feedbackType.general },
      { name: 'enhancement', type: feedbackType.enhancement },
      { name: 'bug', type: feedbackType.bug },
      { name: 'interest', type: feedbackType.interest },

    ];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {

    if (this.form.valid) {

      this.dialogRef.close({
        feedback: this.form.get('feedbackControl').value,
        feedbackType: this.form.get('feedbackTypeControl').value,
      });
    }
    else {
      this.formHelpersService.markInputsAsTouch(this.form);
    }
  }

  ngOnInit(): void {
  }

}
