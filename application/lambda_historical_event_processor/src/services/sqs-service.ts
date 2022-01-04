// "use strict";
// const { SQSClient, SendMessageCommand, SendMessageBatchCommand  } = require("@aws-sdk/client-sqs");
// const client = new SQSClient();

// const block_events_queue = `${process.env.BLOCK_EVENT_QUEUE_NAME}`; 
// const block_events_queue_url = `https://sqs.${process.env.REGION}.amazonaws.com/${process.env.ACCOUNTID}/${block_events_queue}`;

// console.log('block_events_queue', block_events_queue);
// console.log("block_events_queue_url", block_events_queue_url);
 

// /* Batch */
// async function sendMessagesAsBatch(messages) {
//     const responseFromSqs = await client.send(getSendMessageBatchCommand(messages));
//     console.log('responseFromSqs', responseFromSqs);    
//     return responseFromSqs;    
// }
// function getSendMessageBatchCommand(messages) {       
//     let input = {
//             Entries: messages,
//             QueueUrl: block_events_queue_url    
//     };
 
//     return new SendMessageBatchCommand(input);
// }
// /* Batch */


// async function sendMessage(event) {                 
//     const responseFromSqs = await client.send(getSendMessageCommand(event));

//     console.log('responseFromSqs', responseFromSqs);
    
//     return responseFromSqs;    
// }
// function getSendMessageCommand(event, messageDeduplicationId) {    

//     let sendMessageInput = {
//         MessageBody: JSON.stringify(event),
//         MessageDeduplicationId: messageDeduplicationId,  
//         MessageGroupId: "Group1",
//         QueueUrl: block_events_queue_url
//     };
 
//     return new SendMessageCommand(sendMessageInput);
// }

// module.exports = {
//     sendMessage,
//     sendMessagesAsBatch   
// }
