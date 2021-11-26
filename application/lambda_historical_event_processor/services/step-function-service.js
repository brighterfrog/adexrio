"use strict";
var AWS = require("aws-sdk");
const StepFunctions = new AWS.StepFunctions()

exports.startStepFn = async (event, context) => {  

    var params = {
        stateMachineArn: 'STRING_VALUE', /* required */
        input: 'STRING_VALUE',
        name: 'STRING_VALUE',
        traceHeader: 'STRING_VALUE'
      };
    
      result = await StepFunctions.startExecution(params).promise();
      

}

