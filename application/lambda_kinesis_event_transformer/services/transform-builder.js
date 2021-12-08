"use strict";

const eventDecisionService = require('./event-decision-service');

function build(record, context, lastBlock) {                            

   var payload = JSON.parse(Buffer.from(record.kinesis.data, 'base64').toString('ascii'));
   console.log('Decoded payload:', payload);

   var eventType = eventDecisionService.getEventType(payload.payload_headblock, lastBlock);
    
   return buildTransformedRecordFromEventType(record, payload, eventType, lastBlock);
  }

 function buildTransformedRecordFromEventType(record, payload, eventType, lastBlock) {               
    function buildTransformedResult(record, payload, eventType, lastBlock) {
        var result = {
            Key: getBucketKey(eventType, record.kinesis.sequenceNumber),
            Bucket: process.env.INGESTION_BUCKET,
            Body: getBucketBody(record, payload, eventType, lastBlock)
        };
                                               
        return result;
    }
     function getBucketBody(record, payload, eventType, lastBlock) {
        let bucketBody = JSON.stringify({             
             payload_headblock: payload.payload_headblock,             
             payload_event_name: payload.payload_event_name,
             stream_event_type: eventType,
             stream_approximate_arrival_timestamp: record.kinesis.approximateArrivalTimestamp,
             dynamodb_last_block_processed: lastBlock,             
         });
         console.log('getBucketBody', bucketBody);         
         return bucketBody;
     }     

     function getBucketKey(prefix, sequenceNumber) {
        let current_datetime = new Date();
        let formatted_eventName = current_datetime.getFullYear() + "_" + (current_datetime.getMonth() + 1) + "_" + current_datetime.getDate() + "/" + sequenceNumber

         return `${prefix}/${formatted_eventName}.json`;
     }

     return buildTransformedResult(record, payload, eventType, lastBlock);
 } 

  module.exports = {
    build
  }