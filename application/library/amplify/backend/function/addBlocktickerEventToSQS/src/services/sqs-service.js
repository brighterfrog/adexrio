"use strict";
const { SQSClient, SendMessageCommand  } = require("@aws-sdk/client-sqs");
const client = new SQSClient();

const CONSTANTS = require('./constants');

const block_events_queue = `${process.env.BLOCK_EVENT_QUEUE_NAME}_${process.env.ENV}`; 
const block_events_queue_url = `https://sqs.${process.env.REGION}.amazonaws.com/${process.env.ACCOUNTID}/${block_events_queue}.fifo`;

console.log('block_events_queue', block_events_queue);
console.log("block_events_queue_url", block_events_queue_url);
    
const historical_events_queue = `${process.env.HISTORICAL_EVENT_QUEUE_NAME}_${process.env.ENV}`;
const historical_events_queue_url = `https://sqs.${process.env.REGION}.amazonaws.com/${process.env.ACCOUNTID}/${historical_events_queue}.fifo`;
    
console.log('historical_events_queue', historical_events_queue);
console.log("historical_events_queue_url", historical_events_queue_url);


async function sendMessage(eventType, event) {                 
    const responseFromSqs = await client.send(getSendMessageCommand(eventType, event));

    console.log('responseFromSqs', responseFromSqs);

    return responseFromSqs;    
}

function getSendMessageCommand(eventType, event) {    

    let sendMessageInput = {
        MessageBody: JSON.stringify(event),
        MessageDeduplicationId: event.arguments.input.event.head.number,  // Required for FIFO queues
        MessageGroupId: "Group1"
    };

    if(eventType === CONSTANTS.EVENT_TYPE.CURRENT_BLOCK) {
        sendMessageInput.QueueUrl = block_events_queue_url;
        sendMessageInput.createdFromHistoricalQueue = false;
    }
    else if(eventType === CONSTANTS.EVENT_TYPE.HISTORICAL_BLOCKS) {
        sendMessageInput.QueueUrl = historical_events_queue_url;
        sendMessageInput.createdFromHistoricalQueue = true;
    }
    else {
        throw Error(`UNKNOWN EVENT - FAILED TO WRITE TO SQS WITH eventType ${eventType}`);
    }
       
    return new SendMessageCommand(sendMessageInput);
}

module.exports = {
    sendMessage   
}
