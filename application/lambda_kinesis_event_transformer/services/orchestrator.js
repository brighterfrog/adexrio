
"use strict";
const transformer = require('./transform-builder');
const dbClient = require('./dynamo-client');
const s3Storage = require('./s3-storage-service');

const { PayloadInspectorService } = require('./payload-inspector-service');


exports.handleEvent = async (event, context) => {  
   
    const _payloadInspectorService = new PayloadInspectorService();    
    // var lastBlock = await dbClient.readLastBlockForEventsProcessed();    
            
     event.Records.forEach(async (record) => {
    
        console.log(`Record: ${JSON.stringify(record)}`);

        let payloadObject = _payloadInspectorService.getPayloadAsObject(record);
        console.log('Payload Object', payloadObject);
         
        if(record.kinesis.partitionKey === process.env.SHARD_TO_PROCESS) {                                               
            await s3Storage.addMessage( transformer.build(record, context, lastBlock) );            
        }
        else {          
            throw new Error('shard processor not found');
        }
               
    });
}