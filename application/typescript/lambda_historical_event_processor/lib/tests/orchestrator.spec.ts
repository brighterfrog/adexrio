"use strict";
import { doesNotMatch } from 'assert';
import { expect } from 'chai';
import { assert } from 'console';
import 'mocha';


// Production values
process.env.NODE_ENV = "prod";
process.env.VECHAIN_API_NODE = "https://vethor-node.vechain.com";
process.env.RECORD_TYPE = "public";
process.env.RANDOM_ORG_API_ENDPOINT = "https://api.random.org/json-rpc/2/invoke";
process.env.DEBUG_ON = "false";
// Production values

import { EVENTS } from './../library/backend/blockchain/constants';
import { BlockchainEventProcessorService } from '../../lib/services/blockchain-event-retriever-service';
import { ContractRawEvent } from '../../lib/models/types'
import { EventHandlerProcessMapper } from '../../lib/services/dynamodb-event-processor-service';
import { GraphQLService } from '../../lib/services/graphql-service';
import { Orchestrator } from '../../lib/services/orchestrator';

let blockchainEventProcessorService: BlockchainEventProcessorService;
let eventHandlerProcessMapper: EventHandlerProcessMapper;


/**
 * Test Setup
 */
 
before(async () => {
    console.log('init running..');
    blockchainEventProcessorService = new BlockchainEventProcessorService();
    eventHandlerProcessMapper = new EventHandlerProcessMapper(new GraphQLService());
    await blockchainEventProcessorService.initialize();
    console.log('init completed');

    process.env.IS_TEST = "true";
    process.env.NODE_ENV = "prod";
    process.env.VECHAIN_API_NODE = "https://vethor-node.vechain.com";
    process.env.RECORD_TYPE = "public";
    process.env.RANDOM_ORG_API_ENDPOINT = "https://api.random.org/json-rpc/2/invoke";
    process.env.DEBUG_ON = "false";
})



describe('Can retrieve a specific type of events by name filter',
    () => {
        it('should return true', async () => {

            const test_event = {
                Records: [
                  {
                    messageId: '2e739875-f0d0-42e7-b376-f367b07844b5',
                    receiptHandle: 'AQEBdfhwEfm8mUneMYSGfyT09eoXEsxAjcPSBrv/yxKeEa0i81d8A9w4k9Rlri+SODhtQDWR8C+kjyA4smq1EOGU63ux2fJOB8svh9lwEodRbCl3xS6+ecnchtd+cYsit2P0IOK9pCmFBfIJMqJZIojEn/c8t6r7Vans6LrpwTtUc9TPGKUlQ+zpzUTSWUH/DfeIm8jqfDOHaP7ZOFAVCb+isFEOajCjh2DOg0MCEyf2XCrrxBYMwe3aF20UWrrnI5Taz1TRMiOSkJt65diHFzYkmkv3Uxk5tz/Bf61l5v5iJHo=',
                    body: '{"typeName":"Mutation","fieldName":"createIngestionEvent","arguments":{"input":{"event":{"head":{"id":"0x00b6022eeac06b85d5b6402c53f0c6309a0b17aac23fcee4eefa419c35b12f2a","number":11928110,"timestamp":1649802120,"parentID":"0x00b6022dfda240a2bff31d72302b89b8ab56a49d72ca5153dbd6bac7d9eb3265","txsFeatures":1,"gasLimit":19303009},"application":"adexrio-backend-blockchain-ticker","event_name":"block_ticker"}}},"identity":null,"source":null,"request":{"headers":{"x-forwarded-for":"173.28.0.160, 130.176.163.71","cloudfront-is-tablet-viewer":"false","cloudfront-viewer-country":"US","x-amzn-requestid":"9cec7112-aeef-4a60-b750-1f59c968ca40","via":"1.1 aed3beaec016b65de5ed1eccb0322158.cloudfront.net (CloudFront)","x-api-key":"da2-jclr2houancpxjnpiplhjasy24","cloudfront-forwarded-proto":"https","content-type":"application/json; charset=UTF-8","x-amzn-trace-id":"Root=1-6255fb89-5479ae7c7d496c9a157d1b1f","x-amz-cf-id":"0jg2UjhS9w0Vt-SGVmXt_i127TCYLD2ADf5VUgPTyHcHQUnf6fqf2g==","content-length":"533","x-amz-user-agent":"aws-amplify/3.8.23 js","x-forwarded-proto":"https","host":"gt5l3zczp5e6rorucdtkaagnty.appsync-api.us-east-1.amazonaws.com","user-agent":"axios/0.21.1","cloudfront-is-desktop-viewer":"true","accept":"application/json, text/plain, */*","cloudfront-is-mobile-viewer":"false","x-forwarded-port":"443","cloudfront-is-smarttv-viewer":"false"},"domainName":null},"prev":{"result":{"ETag":"\\"4e5d33f670c8a7d8f0ab9637cabfe1bf\\""}},"lambdaProcessorDecisionCheckForNextBlocknumber":0}',
                    attributes: {
                      ApproximateReceiveCount: '1',
                      SentTimestamp: '1649802125547',
                      SequenceNumber: '18869093417849583872',
                      MessageGroupId: 'Group1',
                      SenderId: 'AROA47BHYUMKQAX7JDCWT:addBlocktickerEventToSQS-dev',
                      MessageDeduplicationId: '11928110',
                      ApproximateFirstReceiveTimestamp: '1649802125547'
                    },
                    messageAttributes: {},
                    md5OfBody: 'd42a99c976e2f7fdf512de33af057403',
                    eventSource: 'aws:sqs',
                    eventSourceARN: 'arn:aws:sqs:us-east-1:891289117461:historical_events_dev.fifo',
                    awsRegion: 'us-east-1'
                  }
                ]
              };
           
              console.log('process.env.IS_TEST', process.env.IS_TEST);

              await (new Orchestrator()).process(test_event);  
           
              console.log('TEST DONE');

        });
    });







