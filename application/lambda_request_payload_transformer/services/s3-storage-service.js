"use strict";
var AWS = require("aws-sdk");
const block_history_event_type = "BLOCK_HISTORY_EVENT";
const block_ticker_event_type = "BLOCK_TICKER_EVENT"
const unknown_event_type = "UNKNOWN_EVENT"
const s3 = new AWS.S3();

async function addMessage(storageDetails) {    
    s3.putObject(storageDetails, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
}

module.exports = {
    addMessage   
}