"use strict";
const { SQSClient, SendMessageCommand  } = require("@aws-sdk/client-sqs");
const client = new SQSClient();

const CONSTANTS = require('./constants');

const ingestion_ingress_current_block_fifo_queue = `${process.env.CurrentBlockQueue}${process.env.ENV}`; 
const current_block_fifo_url = `https://sqs.${process.env.REGION}.amazonaws.com/${process.env.ACCOUNTID}/${ingestion_ingress_current_block_fifo_queue}.fifo`;

console.log('ingestion_ingress_current_block_fifo_queue', ingestion_ingress_current_block_fifo_queue);
console.log("ingestion_ingress_current_block_fifo_queue url:", current_block_fifo_url);
    
const ingestion_ingress_historical_fifo_queue = `${process.env.HistoricalFifoQueue}${process.env.ENV}`;
const historical_fifo_url = `https://sqs.${process.env.REGION}.amazonaws.com/${process.env.ACCOUNTID}/${ingestion_ingress_historical_fifo_queue}.fifo`;
    
console.log('ingestion_ingress_historical_fifo_queue', ingestion_ingress_historical_fifo_queue);
console.log("ingestion_ingress_historical_fifo_queue url:", historical_fifo_url);


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
        sendMessageInput.QueueUrl = current_block_fifo_url;
    }
    else if(eventType === CONSTANTS.EVENT_TYPE.HISTORICAL_BLOCKS) {
        sendMessageInput.QueueUrl = historical_fifo_url;
    }
    else {
        throw Error(`UNKNOWN EVENT - FAILED TO WRITE TO SQS WITH eventType ${eventType}`);
    }
       
    return new SendMessageCommand(sendMessageInput);
}

module.exports = {
    sendMessage   
}

 // const input = {            
    //      MessageBody: JSON.stringify(event),
    //      MessageDeduplicationId: event.arguments.input.event.head.number,  // Required for FIFO queues
    //      MessageGroupId: "Group1",  // Required for FIFO queues
    //      QueueUrl: historical_fifo_url
    //    };