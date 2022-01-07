"use strict";
const { SFNClient, StartExecutionCommand  } = require("@aws-sdk/client-sfn");
const client = new SFNClient({ region: process.env.REGION });

exports.startStepFn = async (event, context) => {

  const stepFnArn = process.env.stateMachineArn;

  console.log('starting block event step function:', stepFnArn)
  var input = {
    stateMachineArn: stepFnArn,
    input: JSON.stringify(event)
  };
  console.log('input sent to step fn is', input);
  
  const command = new StartExecutionCommand(input);
  const response = await client.send(command);

  console.log('StartExecutionCommand response', response);
  return response;
};