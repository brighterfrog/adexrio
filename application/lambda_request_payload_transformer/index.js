"use strict";

var AWS = require('aws-sdk'),
    dbClient = new AWS.DynamoDB.DocumentClient();

/*
INPUT
payload: {
	headblock: 1232131
	payload_event_name: block_ticker #block_history #block_ticker, block_number
}
*/

/*
OUTPUT
payload: {
	headblock: 1232131
	payload_event_name: block_ticker #block_history #block_ticker, block_number
	payload_stream_event:  #block_history, #block_number
	payload_event_timestamp: 12312321 epoch
}
*/

async function buildTransformedData(data) {
  lastBlock = await readLastBlockForEventsProcessed();  
  
  console.log(lastBlock);

  data.lastBlock = lastBlock;
  data.payload_event_timestamp = Math.floor(new Date().getTime() / 1000);
  data.payload_stream_event = "block_history";
  
  return data;
}

async function readLastBlockForEventsProcessed() {
  try {
    var params = {
        Key: {
        "id": "0"          
        }, 
        TableName: tableName
    };
    var result = await dbClient.get(params).promise();
    console.log(`buildTransformedData with request: ${JSON.stringify(data)} and result is: ${JSON.stringify(result)}`);      
    return result;
  } catch (error) {
      console.error(error);
  }
}

exports.handler = async (event, context) => {
    /* Process the list of records and transform them */
    const output = event.records.map((record) => ({
        /* This transformation is the "identity" transformation, the data is left intact */
        recordId: record.recordId,
        result: 'Ok',
        data: await buildTransformedData(record.data),        
    }));
    console.log(`Processing completed.  Successful records ${output.length}.`);
    return { records: output };
};