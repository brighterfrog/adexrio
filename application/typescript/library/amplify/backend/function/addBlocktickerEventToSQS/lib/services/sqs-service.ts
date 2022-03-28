"use strict";
import { SendMessageCommand, SQSClient } from '@aws-sdk/client-sqs';

import { EVENT_TYPE } from './constants';

export class SQSService {

    client: SQSClient;

    block_events_queue: string;
    block_events_queue_url: string;
    historical_events_queue: string;
    historical_events_queue_url: string;
                   
    constructor() {
        this.client = new SQSClient({ region: process.env.REGION });
        this.block_events_queue = `${process.env.BLOCK_EVENT_QUEUE_NAME}_${process.env.ENV}`; 
        this.block_events_queue_url = `https://sqs.${process.env.REGION}.amazonaws.com/${process.env.ACCOUNTID}/${this.block_events_queue}.fifo`;
                                    
        console.log('block_events_queue', this.block_events_queue);
        console.log("block_events_queue_url", this.block_events_queue_url);

        this.historical_events_queue = `${process.env.HISTORICAL_EVENT_QUEUE_NAME}_${process.env.ENV}`;
        this.historical_events_queue_url = `https://sqs.${process.env.REGION}.amazonaws.com/${process.env.ACCOUNTID}/${this.historical_events_queue}.fifo`;
        console.log('historical_events_queue', this.historical_events_queue);
        console.log("historical_events_queue_url url", this.historical_events_queue_url);    
    }

    async sendMessage(eventType, event) {                 
        const responseFromSqs = await client.send(this.getSendMessageCommand(eventType, event));

        console.log('responseFromSqs', responseFromSqs);

        return responseFromSqs;    
    }

    getSendMessageCommand(eventType, event) {    

    let sendMessageInput = {
        MessageBody: JSON.stringify(event),
        MessageDeduplicationId: event.arguments.input.event.head.number,  // Required for FIFO queues
        MessageGroupId: "Group1",
        QueueUrl: null,
        createdFromHistoricalQueue: null
    };

    if(eventType === EVENT_TYPE.CURRENT_BLOCK) {
        sendMessageInput.QueueUrl = this.block_events_queue_url;
        sendMessageInput.createdFromHistoricalQueue = false;
    }
    else if(eventType === EVENT_TYPE.HISTORICAL_BLOCKS) {
        sendMessageInput.QueueUrl = this.historical_events_queue_url;
        sendMessageInput.createdFromHistoricalQueue = true;
    }
    else {
        throw Error(`UNKNOWN EVENT - FAILED TO WRITE TO SQS WITH eventType ${eventType}`);
    }
       
    return new SendMessageCommand(sendMessageInput);
    }
}
