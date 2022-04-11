'use strict';

import { Orchestrator } from "./services/orchestrator";
require("util").inspect.defaultOptions.depth = null;
 
async function lambdaHandler(event, context) {  
    
    console.log('lambda historical event process ', event);
    console.log('process.env.ENV', process.env.ENV);
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    
    await (new Orchestrator()).process(event);           

};

exports.handler = lambdaHandler;
