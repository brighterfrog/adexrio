"use strict";
const orchestrator = require('./services/orchestrator');

exports.handler = async (event, context) => {    
  await orchestrator.handleEvent(event, context);
};