"use strict";
var AWS = require("aws-sdk");
const s3 = new AWS.S3();

async function addMessage(bucket, key, payload) { 
        
    try{
      const bucketParameters = {
        Bucket: bucket,
        Key: key,
        Body: JSON.stringify(payload)
      };
      
      console.log('addMessage with bucketParameters', bucketParameters);

      const s3PutObjectOutput = await s3.putObject(bucketParameters).promise();     
      
      console.log('s3PutObjectOutput', s3PutObjectOutput);
      return s3PutObjectOutput;
    }
    catch(ex) {
      console.log(ex);    
    }           
}

module.exports = {
    addMessage   
}