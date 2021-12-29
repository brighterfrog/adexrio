"use strict";
//const stepFnService = require('./services/step-function-service');

exports.handler = async (event, context) => {    
  console.log('lambda block event processor started with event ', event);  
  
  //const response = await stepFnService.startStepFn(event, context);  

  //console.log('done with response', response);

  return {
    completed: true
  };  
};
