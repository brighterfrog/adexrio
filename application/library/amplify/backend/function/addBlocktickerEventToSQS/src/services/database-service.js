"use strict";
const { DynamoDBClient, BatchExecuteStatementCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient(config);
const command = new GetItemCommand(input);
const response = await client.send(command);



// var dbClient = new AWS.DynamoDB.DocumentClient();

// async function readLastBlockForEventsProcessed() {
//     console.log('start readLastBlockForEventsProcessed');   
//     var params = {
//         Key: {
//           "id": process.env.BLOCK_LOOKUP_TABLE_ID_KEY      
//         }, 
//         TableName: process.env.BLOCK_LOOKUP_TABLE_NAME
//     };
//     var result = await dbClient.get(params).promise();

//     console.log(`dbClient.get called in buildTransformedData with result: ${JSON.stringify(result)}`);      

//     if(!result.Item) {
//         console.log(`No last block found, returning 0`);  
//         return 0;
//     }
//     else {
//         console.log(`last block found ${result.Item.lambdaProcessorDecisionCheckForNextBlocknumber}`);  
//         return result.Item.lambdaProcessorDecisionCheckForNextBlocknumber;
//     }         
// }

//   module.exports = { readLastBlockForEventsProcessed };