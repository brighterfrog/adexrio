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
  var lastBlock = await readLastBlockForEventsProcessed();  
  
  console.log(lastBlock);

  data.lastBlock = lastBlock;
  data.payload_event_timestamp = Math.floor(new Date().getTime() / 1000);
  data.payload_stream_event = "block_history";
  
  return data;
}

async function readLastBlockForEventsProcessed() {
  console.log('start readLastBlockForEventsProcessed');
  try {
    var params = {
        Key: {
        "id": process.env.BLOCK_LOOKUP_TABLE_ID_KEY      
        }, 
        TableName: process.env.BLOCK_LOOKUP_TABLE_NAME
    };
    var result = await dbClient.get(params).promise();
    console.log(`buildTransformedData with request: ${JSON.stringify(result)}`);      
    return result;
  } catch (error) {
      console.error(error);
  }
}

exports.handler = async (event, context) => {

  console.log('before readLastBlockForEventsProcessed');
  var lastBlockForEventsProcessed = await readLastBlockForEventsProcessed();
  console.log('after readLastBlockForEventsProcessed');

  event.Records.forEach(function(record) {
    
    var shard = record.PartitionKey;
    var timestamp = record.ApproximateArrivalTimestamp;

    if(shard === process.env.SHARD_TO_PROCESS) {

      //var s3prefix = getS3Prefix(record);      
    }
    
    // Kinesis data is base64 encoded so decode here
    var payload = Buffer.from(record.kinesis.data, 'base64').toString('ascii');
    console.log('Decoded payload:', payload);

  });
};


// export function receiveEvent(event, context, callback) {
//   console.log('demoHandler');
//   console.log(`Event: ${JSON.stringify(event, null, 2)}`);
//   console.log(`Context: ${JSON.stringify(context, null, 2)}`);
//   const base64Data = event.Records[0].kinesis.data;
//   const base64Decoded = new Buffer(base64Data, 'base64').toString()
//   console.log(base64Decoded);
//   return callback();
// }