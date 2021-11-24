"use strict";

const eventDecisionService = require('./event-decision-service');

async function build(record, context, lastBlock) {                            

   var payload = Buffer.from(record.kinesis.data, 'base64').toString('ascii');
   console.log('Decoded payload:', payload);

   var eventType = eventDecisionService.getEventType(payload_headblock, lastBlock);
    
   buildTransformedRecordFromEventType(eventType, payload);
  }

 async function buildTransformedRecordFromEventType(eventType, payload) {
    var timestamp = record.ApproximateArrivalTimestamp; 
    
    return buildTransformedResult(eventType);
    
    function buildTransformedResult(eventType) {
        if(eventType === eventDecisionService.block_history_event_type) {
            return {
                Key: getBucketKey('block_history'),
                Bucket: process.env.INGESTION_BUCKET,
                Body: getBucketBody(payload)
            }
        }
        else if (eventType === eventDecisionService.block_ticker_event_type) {
            return {
                Key: getBucketKey('block_ticker'),
                Bucket: process.env.INGESTION_BUCKET,
                Body: getBucketBody(payload)            
            }
        }
        else {
            console.log('eventType does not match known events');
            throw new Error("eventtype did not find a match");
        }
    }
     function getBucketBody() {
         return {
             payload_event_timestamp: record.ApproximateArrivalTimestamp,
             payload_headblock: payload.payload_headblock,
             payload_event_name: payload.payload_event_name,
             stream_event_type: eventDecisionService.block_ticker_event_type
         };
     }     

     function getBucketKey(prefix) {
         return `${prefix}/${new Date().timestamp}.json`;
     }
 } 

  module.exports = {
    build
  }




//   "use strict";
// const eventDecisionService = require('./event-decision-service');

// async function build(record, context, lastBlockForEventsProcessed) {
//     var timestamp = record.ApproximateArrivalTimestamp;         
//     var payload = Buffer.from(record.kinesis.data, 'base64').toString('ascii');
//     console.log('Decoded payload:', payload);
// }

// module.exports = {
//     block_history_event_type,
//     block_ticker_event_type,
//     getEventType
// }