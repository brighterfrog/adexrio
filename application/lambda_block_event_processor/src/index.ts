"use strict";
//const stepFnService = require('./services/step-function-service');

export const handler = async (event: any, context: any): Promise<any> => {      
  console.log('lambda block event processor started with event ', event);  
  
  // const response = await stepFnService.startStepFn(event, context);  

  console.log('DONE');

  //FOR BLOCK
  //GET ALL CREATE EVENTS
    //check if record already exists, if does, skip, else, add
    //WRITE TO TABLE
  //GET PLAYER JOINED EVENTS
    //check if record already exists, if does, skip, else, add
    //WRITE TO TABLE
  //GET PLAYER LEFT EVENTS
    //check if record already exists, if does, skip, else, add
    //WRITE TO TABLE
  //GET COMPLETED POOL EVENTS
    //check if record already exists, if does, skip, else, add  
    //WRITE TO TABLE
  //GET AWAIT EXECUTION EVENTS
    //check if record already exists, if does, skip, else, add
    //WRITE TO TABLE
  
};
