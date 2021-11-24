// 'use strict';

// var chai  = require('chai');

// const orchestrator = require('../services/orchestrator');

// const encodedMessagePayLoadOneObject= {

// };
// const encodedPayloadMessageOne = Buffer.from(JSON.stringify(encodedMessagePayLoadOneObject)).toString('base64');

// const encodedMessagePayLoadTwoObject = {

// };
// const encodedPayloadMessageTwo =Buffer.from(JSON.stringify(encodedMessagePayLoadTwoObject)).toString('base64');


// const kinesisMockEvent =
// {
//     "Records": [
//         {
//             "kinesis": {
//                 "kinesisSchemaVersion": "1.0",
//                 "partitionKey": "1",
//                 "sequenceNumber": "49590338271490256608559692538361571095921575989136588898",
//                 "data": encodedPayloadMessageOne, 
//                 "approximateArrivalTimestamp": 1545084650.987
//             },
//             "eventSource": "aws:kinesis",
//             "eventVersion": "1.0",
//             "eventID": "shardId-000000000006:49590338271490256608559692538361571095921575989136588898",
//             "eventName": "aws:kinesis:record",
//             "invokeIdentityArn": "arn:aws:iam::123456789012:role/lambda-role",
//             "awsRegion": "us-east-1",
//             "eventSourceARN": "arn:aws:kinesis:us-east-1:123456789012:stream/lambda-stream"
//         },
//         {
//             "kinesis": {
//                 "kinesisSchemaVersion": "1.0",
//                 "partitionKey": "1",
//                 "sequenceNumber": "49590338271490256608559692540925702759324208523137515618",
//                 "data": encodedPayloadMessageTwo,
//                 "approximateArrivalTimestamp": 1545084711.166
//             },
//             "eventSource": "aws:kinesis",
//             "eventVersion": "1.0",
//             "eventID": "shardId-000000000006:49590338271490256608559692540925702759324208523137515618",
//             "eventName": "aws:kinesis:record",
//             "invokeIdentityArn": "arn:aws:iam::123456789012:role/lambda-role",
//             "awsRegion": "us-east-2",
//             "eventSourceARN": "arn:aws:kinesis:us-east-2:123456789012:stream/lambda-stream"
//         }
//     ]
// }

// it('can put a message on kinesis', async () => {
//     const result = await dbClient.readLastBlockForEventsProcessed();
//     chai.assert(true, "connect to dynamodb")   
// });

