
"use strict";
const recordProcessor = require('./record-processor');

exports.handleEvent = async (event, context) => {  
        
    recordProcessor.processEvent(event, context, await dynamoClient.readLastBlockForEventsProcessed());    

}

