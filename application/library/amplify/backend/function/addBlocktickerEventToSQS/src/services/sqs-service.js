"use strict";
const { SQSClient, SendMessageCommand  } = require("@aws-sdk/client-sqs");
const client = new SQSClient();

async function sendMessage(sendMessageCommandInput) { 
            
    const command = new SendMessageCommand(sendMessageCommandInput);
    const responseFromSqs = await client.send(command);

    console.log(responseFromSqs);
    return responseFromSqs;    
}

module.exports = {
    sendMessage   
}