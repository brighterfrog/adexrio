
"use strict";
const transformer = require('./transform-builder');
const dbClient = require('./dynamo-client');
const s3Storage = require('./s3-storage-service');


exports.handleEvent = async (event, context) => {  
        
    var lastBlock = await dbClient.readLastBlockForEventsProcessed();
    console.log(`Last block for events processed: ' ${lastBlock}`);
            
    event.Records.forEach(async (record) => {
    
        console.log(`Record: ${JSON.stringify(record)}`);
                                     
        if(record.kinesis.partitionKey === process.env.SHARD_TO_PROCESS) {                                               
            await s3Storage.addMessage( transformer.build(record, context, lastBlock) );            
        }
        else {          
            throw new Error('shard processor not found');
        }
               
    });
}