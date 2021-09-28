import { Injectable } from '@angular/core';
import { APIService, ListMessagesQuery } from '../API.service';
import { WalletService } from '../pages/games/rollit/helper-services/wallet-service';
import { RollItChatMessage } from '../pages/games/rollit/rollit_models';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ArenaChatService {

  apiService: APIService;
  walletService: WalletService;

  chatMessages: RollItChatMessage[];
  maxChatMessageBufferSize: number;
  cutOffMessagesAtMaxBufferSize: boolean;

  constructor(
    apiService: APIService,
    walletService: WalletService,
    private loggingService: LoggingService
  )
  {
    this.apiService = apiService;
    this.walletService = walletService;

    this.chatMessages = [];

    this.maxChatMessageBufferSize = 200;
    this.cutOffMessagesAtMaxBufferSize = false;

    this.registerSubscriptionListeners();
    this.getLast200Entries();
  }

  private async getLast200Entries(): Promise<void> {
    this.loggingService.writeDebug('getLast200Entries');
    const entries = await this.apiService.ListMessages({
      createdAt: {
        gt: '0'
      },
    }, 200);
    this.loggingService.writeDebug(entries);

    this.addListOfChatMessages(entries);
  }

  private addListOfChatMessages(list: ListMessagesQuery): void {
    const sortedArray = list.items.sort((a, b) => {
      return ((a.createdAt <= b.createdAt) ? -1 : 1);
    });

    sortedArray.forEach((item) => {
      this.addNewChatMessageToMessagesList(
        new RollItChatMessage(
          item.wallet,
          item.message,
          new Date(item.createdAt)
        )
      );
    });

  }

  private addNewChatMessageToMessagesList(message: RollItChatMessage): void {
    this.chatMessages.unshift(message);

    if (this.cutOffMessagesAtMaxBufferSize &&
      this.chatMessages.length === this.maxChatMessageBufferSize) {
      this.chatMessages.slice(this.maxChatMessageBufferSize, 1);
    }
  }

  private registerSubscriptionListeners(): void {
    this.apiService.OnCreateMessageListener.subscribe((message: any) => {
      this.loggingService.writeDebug('OnCreateMessageListener');
      this.loggingService.writeDebug('logging date below and message');

      this.loggingService.writeDebug(message.value.data);
      this.loggingService.writeDebug(message.value.data.onCreateMessage);

      this.addNewChatMessageToMessagesList(
        new RollItChatMessage(
          message.value.data.onCreateMessage.wallet,
          message.value.data.onCreateMessage.message,
          new Date(message.value.data.onCreateMessage.createdAt))
      );

    }, (error) => {
      this.loggingService.writeDebug(error);
    });
  }

  createMessage(message: string): void {
    if (this.walletService?.walletCertificate) {
      this.apiService.CreateMessage({
        message,
        wallet: this.walletService.walletCertificate.annex.signer
      });
    }
    else {
      this.loggingService.writeDebug('not signed in');
    }
  }
}
