"use strict";
var AWS = require("aws-sdk");
const s3 = new AWS.S3();

class S3StorageService {

  constructor() {}

  getBucketKey(prefix) {
    let current_datetime = new Date();
    let current_timestamp = current_datetime.toUTCString();
    let formatted_eventName = current_datetime.getFullYear() + "_" + (current_datetime.getMonth() + 1) + "_" + current_datetime.getDate() + "/" + current_timestamp

     return `${prefix}/${formatted_eventName}.json`;
 }

  async addMessage(storageDetails) { 
    console.log('S3 addMessage with', storageDetails);
    
    s3.putObject(storageDetails, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
}

}


module.exports = {
  S3StorageService   
}