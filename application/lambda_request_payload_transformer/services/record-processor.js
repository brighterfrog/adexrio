"use strict";
const eventDecisionService = require('./event-decision-service');

exports.processEvent =  async (event, context, lastBlockForEventsProcessed) => {  
    
    event.Records.forEach(function(record) {
    
    var shard = record.PartitionKey;
    var timestamp = record.ApproximateArrivalTimestamp;

    if(shard === process.env.SHARD_TO_PROCESS) {

        // calculate event type from block numbers
        // build transform event
        // push to s3
        
      eventService = eventDecisionService.processEventRecord(record);        
    }
    
    // Kinesis data is base64 encoded so decode here
    var payload = Buffer.from(record.kinesis.data, 'base64').toString('ascii');
    console.log('Decoded payload:', payload);

  });
}

module.exports = { processEvent };