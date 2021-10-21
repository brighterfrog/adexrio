import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackDialogComponent, FeedbackDialogData } from './components/feedback-dialog/feedback-dialog.component';
import { ShellService } from './services/shell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title: string;
  shellService: ShellService;
  dialogFeedbackResult: FeedbackDialogData | undefined;
  dialogDonateResult: FeedbackDialogData | undefined;

  constructor(shellService: ShellService, public dialog: MatDialog) {
    this.shellService = shellService;
    this.title = shellService.headerTitle;
  }
}
