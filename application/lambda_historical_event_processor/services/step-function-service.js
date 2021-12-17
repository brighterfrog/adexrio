"use strict";
const { SFNClient, StartExecutionCommand  } = require("@aws-sdk/client-sfn");
const client = new SFNClient({ region: process.env.REGION });

exports.startStepFn = async (event, context) => {
  console.log('starting historical step function:', process.env.stateMachineArnHistorical)
  var input = {
    stateMachineArn: process.env.stateMachineArnHistorical,
    input: JSON.stringify(event)
  };
  console.log('input is', input);
  
  const command = new StartExecutionCommand(input);
  const response = await client.send(command);

  console.log('StartExecutionCommand response', response);
  return response;
};