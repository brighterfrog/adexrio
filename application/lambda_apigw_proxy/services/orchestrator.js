
"use strict";

const S3StorageService = require('./s3-storage-service');
const { PayloadInspectorService } = require('./payload-inspector-service');


exports.handleEvent = async (event, context) => {  
   
    const _s3Service = new S3StorageService();    
  
    let body;
    let statusCode = 200;
    const headers = {
      "Content-Type": "application/json"
    };    
    
    console.log(event);

    // body = await _s3Service.addMessage( {
      
    // });
    
    return {
        statusCode,
        body,
        headers
      };
     
}