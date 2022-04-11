'use strict';

import { Orchestrator } from "./services/orchestrator";

async function lambdaHandler(event: any, context: any): Promise<any> {
    
    console.log('lambda block event process ', event);

    await (new Orchestrator()).process(event);           

};
exports.handler = lambdaHandler;