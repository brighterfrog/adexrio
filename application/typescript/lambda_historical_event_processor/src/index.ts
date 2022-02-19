'use strict';

// import { getHighestBlockNumberFromRecordBatch } from  "./services/sqs-historical-service";

import { Orchestrator } from "./services/orchestrator";
// import { EVENTS } from ""

 export const handler = async (event: any, context: any): Promise<any> => {
    
    console.log('lambda historical event process ', event);

    await (new Orchestrator()).process(event);           

};