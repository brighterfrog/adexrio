import { AfterViewInit, Component, ElementRef, HostListener, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Wallet } from '@vechain/connex-driver';
import { APIService } from 'src/app/API.service';
import { FormhelpersService } from 'src/app/services/formhelpers.service';
import { WalletService } from '../../helper-services/wallet-service';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import {FocusMonitor, FocusTrap} from '@angular/cdk/a11y';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-arena-chat',
  templateUrl: './arena-chat-bottomsheet.component.html',
  styleUrls: ['./arena-chat-bottomsheet.component.scss']
})
export class ArenaChatBottomSheetComponent implements OnInit {

  formBuilder: FormBuilder;
  formGroup: FormGroup;

  messageMaxLength: number;

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  @ViewChild('messageContentControlTextArea', { static: false })
  set input(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  constructor(
    private ngZone: NgZone,
    formBuilder: FormBuilder,
    private formHelperService: FormhelpersService,
    private apiService: APIService,
    private walletService: WalletService,
    private bottomSheetRef: MatBottomSheetRef<ArenaChatBottomSheetComponent>,
    private loggingService: LoggingService

  ) {
    this.formBuilder = formBuilder;
    this.formGroup = this.formBuilder.group({
      messageContentControl: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.messageMaxLength)
      ])
    });
    this.messageMaxLength = 200;
  }

  enterKeyEvent(event: Event): void {
    event.preventDefault();
    this.sendChatMessage();
  }

  triggerResize(): void {
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit(): void {

  }

  sendChatMessage(): void {
    this.loggingService.writeDebug('entering sendChatMessage');
    if (this.formGroup.valid) {
      this.loggingService.writeDebug('sending sendChatMessage');
      this.apiService.CreateMessage({
        message: this.formGroup.get('messageContentControl').value,
        wallet: this.walletService.walletCertificate.annex.signer
      }).then((result) => {
        this.bottomSheetRef.dismiss(result);
      });
    }
    else {
      this.formHelperService.markInputsAsTouch(this.formGroup);
    }

  }
}
