"use strict";
const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({region: `${process.env.REGION}`});

async function readLastBlockForEventsProcessed() {
    console.log('start readLastBlockForEventsProcessed');  
    let response;

    try{
        // var input = {
        //     Key: {
        //       "id": process.env.BLOCK_LOOKUP_TABLE_ID_KEY      
        //     }, 
        //     TableName: process.env.BLOCK_LOOKUP_TABLE_NAME
        // };
        
        var input = {
            Key: {
              "id": process.env.BLOCK_LOOKUP_TABLE_ID_KEY      
            }, 
            TableName: `${process.env.BLOCK_LOOKUP_TABLE_NAME}-${process.env.ENV}`
        };
        const command = new GetItemCommand(input);
        const response = await client.send(command);
    
        console.log('readLastBlockForEventsProcessed response', response);
         
        if(!response.Item) {
            console.log(`No last block found, returning 0`);  
            response = 0;
        }
        else {
            console.log(`last block found ${result.Item.lambdaProcessorDecisionCheckForNextBlocknumber}`);  
            response = result.Item.lambdaProcessorDecisionCheckForNextBlocknumber;
        }         
    }
    catch(err) {
        console.log(err);
        throw err;
    }

    return response;
    
}

 module.exports = { readLastBlockForEventsProcessed };