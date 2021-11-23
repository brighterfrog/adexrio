"use strict";
var dbClient = new AWS.DynamoDB.DocumentClient();

async function readLastBlockForEventsProcessed() {
    console.log('start readLastBlockForEventsProcessed');   
    var params = {
        Key: {
          "id": process.env.BLOCK_LOOKUP_TABLE_ID_KEY      
        }, 
        TableName: 'PoolSuccessfullBlockEventsProcessed-plrkzmrkj5bmbjslf67bwgzcfu-dev'
    };
    var result = await dbClient.get(params).promise();
    console.log(`dbClient.get called in buildTransformedData with result: ${JSON.stringify(result)}`);      
    return result;   
  }

  module.exports = { readLastBlockForEventsProcessed };