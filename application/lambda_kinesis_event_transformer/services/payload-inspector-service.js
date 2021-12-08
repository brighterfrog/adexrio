"use strict";

class PayloadInspectorService {
    constructor() {

    }

    getPayloadAsObject(record) {
        let payload = JSON.parse(Buffer.from(record.kinesis.data, 'base64').toString('ascii'));
        console.log('getPayloadAsObject', payload);
        return payload;
    }
}
module.exports = {
    PayloadInspectorService
}