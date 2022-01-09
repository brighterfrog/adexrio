"use strict";

import { getHighestBlockNumberFromRecordBatch } from  "./services/sqs-historical-service";
import { test } from  "./services/blockchain-event-processor-service";

// const historicalService = require('./services/sqs-historical-service');
// const blockEventService = require('./services/blockchain-event-processor-service');

console.log('PRE CALL');
test().then( (d) => {
    console.log('inner block');
    console.log(d);
});

  

