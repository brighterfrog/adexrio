'use strict';

// import { getHighestBlockNumberFromRecordBatch } from  "./services/sqs-historical-service";

import { Orchestrator } from "./services//orchestrator";


 export const handler = async (event: any, context: any): Promise<any> => {
//   console.log('lambda historical event process ', event);


    await (new Orchestrator()).process(event);



//   //const result = await blockEventService.buildAndWriteAllBlockEvents(event, highestBlockMessageFromBatch);


//   //console.log('done with processing historical event batch with result ', result);

//   // return {
//   //   completed: true
//   // };

};
