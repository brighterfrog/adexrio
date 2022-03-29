'use strict';

import { Orchestrator } from "./services/orchestrator";

 export const handler = async (event: any, context: any): Promise<any> => {
    
    console.log('lambda block event process ', event);

    await (new Orchestrator()).process(event);           

};
