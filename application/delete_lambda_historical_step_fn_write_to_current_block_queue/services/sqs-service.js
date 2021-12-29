"use strict";
const { SQSClient, SendMessageCommand  } = require("@aws-sdk/client-sqs");
const client = new SQSClient();

const ingestion_ingress_current_block_fifo_queue = `${process.env.CurrentBlockQueue}`; 
const current_block_fifo_url = `https://sqs.${process.env.REGION}.amazonaws.com/${process.env.ACCOUNTID}/${ingestion_ingress_current_block_fifo_queue}`;

console.log('ingestion_ingress_current_block_fifo_queue', ingestion_ingress_current_block_fifo_queue);
console.log("ingestion_ingress_current_block_fifo_queue url:", current_block_fifo_url);
    

async function sendMessage(event) {                 
    const responseFromSqs = await client.send(getSendMessageCommand(event));

    console.log('responseFromSqs', responseFromSqs);
    return responseFromSqs;    
}

function getSendMessageCommand(event, messageDeduplicationId) {    

    let sendMessageInput = {
        MessageBody: JSON.stringify(event),
        MessageDeduplicationId: messageDeduplicationId,  
        MessageGroupId: "Group1",
        QueueUrl: current_block_fifo_url
    };
 
    return new SendMessageCommand(sendMessageInput);
}

module.exports = {
    sendMessage   
}
