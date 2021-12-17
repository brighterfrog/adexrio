"use strict";
const stepFnService = require('./services/step-function-service');

exports.handler = async (event, context) => {    
  console.log('lambda historical event process ', event);  
  
  const response = await stepFnService.startStepFn(event, context);  

  console.log('done with response', response);
};
