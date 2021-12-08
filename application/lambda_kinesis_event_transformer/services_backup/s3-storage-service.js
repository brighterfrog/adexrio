"use strict";
var AWS = require("aws-sdk");
const s3 = new AWS.S3();

async function addMessage(storageDetails) { 
    console.log('S3 addMessage with', storageDetails);
    
    s3.putObject(storageDetails, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
}

module.exports = {
    addMessage   
}