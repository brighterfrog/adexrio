'use strict';

// import { getHighestBlockNumberFromRecordBatch } from  "./services/sqs-historical-service";

// import { test } from "./services/blockchain-event-processor-service";


// export const handler = async (event: any, context: any): Promise<any> => {
//   console.log('lambda historical event process ', event);

// //get highest block

//   const highestBlockMessageFromBatch = getHighestBlockNumberFromRecordBatch(event);

//   await test();


//   //grab all events for the block filters and build object to pass to write service
//   //add events to table
//   //start block & current headblock for filter

//   //const result = await blockEventService.buildAndWriteAllBlockEvents(event, highestBlockMessageFromBatch);


//   //console.log('done with processing historical event batch with result ', result);

//   // return {
//   //   completed: true
//   // };

// };
