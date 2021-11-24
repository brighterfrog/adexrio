
"use strict";
const transformer = require('./transform-builder');
const dbClient = require('./dynamo-client');
const s3Storage = require('./s3-storage-service');


exports.handleEvent = async (event, context) => {  
    
    var lastBlock = await dbClient.readLastBlockForEventsProcessed();
    
    event.Records.forEach(function(record) {
    
        var shard = record.PartitionKey;

        if(shard === process.env.SHARD_TO_PROCESS) {                
            var transformedEvent = transformer.build(record, context, lastBlock);            
            s3Storage.addMessage(
               transformedEvent
            );            
        }
        else {
            console.log('shard processor not found');
            throw new Error('shard processor not found');
        }
               
    });
}