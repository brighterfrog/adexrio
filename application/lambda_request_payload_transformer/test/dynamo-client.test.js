'use strict';

var chai  = require('chai');

const dbClient = require('../services/dynamo-client');

it('can connect to dynamodb', async () => {
    const result = await dbClient.readLastBlockForEventsProcessed();
    chai.assert(true, "connect to dynamodb")   
});
