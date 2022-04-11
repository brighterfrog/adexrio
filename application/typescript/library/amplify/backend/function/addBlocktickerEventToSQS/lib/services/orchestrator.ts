
"use strict";
import { DatabaseService } from './database-service';
import { SQSDecisionService } from './sqs-decision-service';
import { SQSService } from './sqs-service';
  

export class Orchestrator {

    dbService: DatabaseService;
    sqsService: SQSService;
    sqsDecisionService: SQSDecisionService;    
                   
    constructor(
        dbService: DatabaseService,
        sqsService: SQSService,
        sqsDecisionService: SQSDecisionService
    ) {
        this.dbService = dbService;
        this.sqsService = sqsService;
        this.sqsDecisionService = sqsDecisionService;
    }
          
    async handleEvent(event) {
        console.log('handleEvent', event);

        const lastBlock = await this.dbService.readLastBlockForEventsProcessed();
        event.lambdaProcessorDecisionCheckForNextBlocknumber = lastBlock;  
        
        //decide which queue to drop message in
        const eventType = this.sqsDecisionService.getEventTypeBasedOnBlocksProcessed(event.arguments.input.event.head.number, lastBlock);
        
        //write event to queue      
        console.log('before sendMessage', eventType, event);
        const sendMessageSqsResult = await this.sqsService.sendMessage(eventType, event);
        
        const result = {
            s3: event.prev.result,
            sqs: sendMessageSqsResult
        };
        
        console.log('result returned is', result);
        
        return result; 
    }
}