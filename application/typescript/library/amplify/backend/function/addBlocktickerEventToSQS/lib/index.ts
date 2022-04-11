
"use strict";

import { DatabaseService } from './services/database-service';
import { Orchestrator } from './services/orchestrator'
import { SQSDecisionService } from './services/sqs-decision-service';
import { SQSService } from './services/sqs-service';


async function lambdaHandler(event, context) {    
  
    console.log("event is: ", JSON.stringify(event));
    let result;

    const dbService = new DatabaseService();
    const sqsService = new SQSService();
    const sqsDecisionService = new SQSDecisionService();

    console.log("pre Orchestrator");
    const orchestrator = new Orchestrator(dbService, sqsService, sqsDecisionService );
    console.log("post orchestrator");

    result = await orchestrator.handleEvent(event);
      
    console.log('result returned is', result);


    return result;    
};

exports.handler = lambdaHandler;
