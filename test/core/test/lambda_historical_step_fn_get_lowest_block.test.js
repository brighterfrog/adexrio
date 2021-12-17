"use strict";

const { expect } = require("chai");

const lambda = require("../../../application/lambda_historical_step_fn_get_highest_block");

it("can get highest block from a batch messageIds are equal", async () => {
  var expected = {
    highestBlockMessageFromBatch: {
      message: {
        messageId: "0c64045d-b2fe-46ae-9595-96d844300152",
        receiptHandle:
          "AQEBB85xZATaNY+5DPFAHdfu4SkrBmuGwOH5LvtNEMg25KSU+vQl3zRdiS2yeKgPF1bMfJxfAatzIFzLNiRsz1Ba3TMW+CsvK2RR1UlPeiSKfeBQBidFZTbnWi4FlZkaufR9Y7xZhRwD62QJhwxOzGfxII7k3UnPv0vT8+4bijBzGvNV7PhtchoQ328PN8I4rbw4ufzR0cCSaIrLZIVGBg0Tb2eD21vIGXoOwkNPrCyMXZ8A9zRmiDtjTmBLIv9/NH1J7FHIl2qeO8u994Y5ejvNghOaFYxeTQsM2MLmTD+zVnZOmkxJlHihYpDgggXIk9/iaqIQBUFOSa1hrKKA7X5z1Q==",
        body: '{"typeName":"Mutation","fieldName":"createIngestionEvent","arguments":{"input":{"event":{"head":{"id":"0x00010e9f67ab0e90cf7f4342860d8618cfca5c70481f0d660c3b416cdb8a60c7","number":69279,"timestamp":1639619580,"parentID":"0x00010e9e2f63de8e9196b473abf15b09fbf4a5a6b9bccd4e0d0d477ee764a7db","txsFeatures":1,"gasLimit":10000000},"application":"adexrio-backend-blockchain-ticker","event_name":"block_ticker"}}},"identity":null,"source":null,"request":{"headers":{"x-forwarded-for":"173.28.0.160, 130.176.11.79","cloudfront-is-tablet-viewer":"false","cloudfront-viewer-country":"US","x-amzn-requestid":"4dd9925a-559a-4e69-b6ba-97ab6de47397","via":"1.1 f3784375413c3c1fd8e02b9ecec32db7.cloudfront.net (CloudFront)","x-api-key":"da2-j4dnoi742jdi3g7h6ok3c6lf4i","cloudfront-forwarded-proto":"https","content-type":"application/json; charset=UTF-8","x-amzn-trace-id":"Root=1-61ba9c06-209e70391e309ae9737bd448","x-amz-cf-id":"fhCjQ3UBz4y8n9dhUQGDiZGkklN70JgzJ-LRx_LQxi7s5h-PXrgFxA==","content-length":"534","x-amz-user-agent":"aws-amplify/3.8.23 js","x-forwarded-proto":"https","host":"gt5l3zczp5e6rorucdtkaagnty.appsync-api.us-east-1.amazonaws.com","user-agent":"axios/0.21.1","cloudfront-is-desktop-viewer":"true","accept":"application/json, text/plain, */*","cloudfront-is-mobile-viewer":"false","x-forwarded-port":"443","cloudfront-is-smarttv-viewer":"false"},"domainName":null},"prev":{"result":{"ETag":"\\"125017fb5cfe90f7785484861bf5b39d\\""}}}',
        attributes: [null],
        messageAttributes: {},
        md5OfBody: "5dcc06af77b0a18cbd3c2c29b35c172e",
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-east-1:891289117461:ingestion_ingress_historical_fifo_queue_dev.fifo",
        awsRegion: "us-east-1",
      },
      bodyObject: {
        typeName: "Mutation",
        fieldName: "createIngestionEvent",
        arguments: {
          input: {
            event: {
              head: {
                id: "0x00010e9f67ab0e90cf7f4342860d8618cfca5c70481f0d660c3b416cdb8a60c7",
                number: 69279,
                timestamp: 1639619580,
                parentID:
                  "0x00010e9e2f63de8e9196b473abf15b09fbf4a5a6b9bccd4e0d0d477ee764a7db",
                txsFeatures: 1,
                gasLimit: 10000000,
              },
              application: "adexrio-backend-blockchain-ticker",
              event_name: "block_ticker",
            },
          },
        },
        identity: null,
        source: null,
        request: {
          headers: {
            "x-forwarded-for": "173.28.0.160, 130.176.11.79",
            "cloudfront-is-tablet-viewer": "false",
            "cloudfront-viewer-country": "US",
            "x-amzn-requestid": "4dd9925a-559a-4e69-b6ba-97ab6de47397",
            via: "1.1 f3784375413c3c1fd8e02b9ecec32db7.cloudfront.net (CloudFront)",
            "x-api-key": "da2-j4dnoi742jdi3g7h6ok3c6lf4i",
            "cloudfront-forwarded-proto": "https",
            "content-type": "application/json; charset=UTF-8",
            "x-amzn-trace-id": "Root=1-61ba9c06-209e70391e309ae9737bd448",
            "x-amz-cf-id":
              "fhCjQ3UBz4y8n9dhUQGDiZGkklN70JgzJ-LRx_LQxi7s5h-PXrgFxA==",
            "content-length": "534",
            "x-amz-user-agent": "aws-amplify/3.8.23 js",
            "x-forwarded-proto": "https",
            host: "gt5l3zczp5e6rorucdtkaagnty.appsync-api.us-east-1.amazonaws.com",
            "user-agent": "axios/0.21.1",
            "cloudfront-is-desktop-viewer": "true",
            accept: "application/json, text/plain, */*",
            "cloudfront-is-mobile-viewer": "false",
            "x-forwarded-port": "443",
            "cloudfront-is-smarttv-viewer": "false",
          },
          domainName: null,
        },
        prev: { result: { ETag: '"125017fb5cfe90f7785484861bf5b39d"' } },
      },
    },
  };

  var payloadEvent = {
    Records: [
      {
        messageId: "b895a50c-b559-4d7b-a079-55a26352904d",
        receiptHandle:
          "AQEBXiN+y11/7uleEyO7UhhSFUuDhQ/7bphomX5yQUbbIFP+vxZTCZNER5sv/q+BwoQ5KEJlb1ICaCvXHiwyRo6hXE9oujvlfJEk/l4aij1h/Xe3Oufixc9a+HUnaEHR1N7wv926y88CbMx407lThmt3dClOtOxJK94h7SnBXAQEPziRHwaLYvhdZ3atP1vYLclzVHwl74FgYama9WQ9ajPP4jvB4sK4Zc3O6YiH0Rqhf2EIsIayAsA8QkIEORcUIa0MrDnqFI+s5x98sUQmqaN8ioPrOF7dUPJtAFF/UcpY/fntKLWWKgNtESk/lm6YWR8hRIgL7sd/MmlvFhwHAWfA7w==",
        body: '{"typeName":"Mutation","fieldName":"createIngestionEvent","arguments":{"input":{"event":{"head":{"id":"0x00010ea001325e2924d3cb9006c4f04f1fa1cb5d2ebd5f9b39b050b4f1a205f9","number":69280,"timestamp":1639619590,"parentID":"0x00010e9f67ab0e90cf7f4342860d8618cfca5c70481f0d660c3b416cdb8a60c7","txsFeatures":1,"gasLimit":10000000},"application":"adexrio-backend-blockchain-ticker","event_name":"block_ticker"}}},"identity":null,"source":null,"request":{"headers":{"x-forwarded-for":"173.28.0.160, 130.176.11.88","cloudfront-is-tablet-viewer":"false","cloudfront-viewer-country":"US","x-amzn-requestid":"b25210bf-6203-4dcb-ac64-24079248a4f4","via":"1.1 1b4178b2d0c62891561e881584b58e09.cloudfront.net (CloudFront)","x-api-key":"da2-j4dnoi742jdi3g7h6ok3c6lf4i","cloudfront-forwarded-proto":"https","content-type":"application/json; charset=UTF-8","x-amzn-trace-id":"Root=1-61ba9c09-6e8bf871597df9335f25954a","x-amz-cf-id":"liKUpHxmsG_CY_ByrHNOZU8paxb-_pg_WKohgYYIj0yuldB3dhpWdA==","content-length":"534","x-amz-user-agent":"aws-amplify/3.8.23 js","x-forwarded-proto":"https","host":"gt5l3zczp5e6rorucdtkaagnty.appsync-api.us-east-1.amazonaws.com","user-agent":"axios/0.21.1","cloudfront-is-desktop-viewer":"true","accept":"application/json, text/plain, */*","cloudfront-is-mobile-viewer":"false","x-forwarded-port":"443","cloudfront-is-smarttv-viewer":"false"},"domainName":null},"prev":{"result":{"ETag":"\\"693489d0767716130ccde98250fd75d7\\""}}}',
        attributes: [Object],
        messageAttributes: {},
        md5OfBody: "75efdbaedb19fb47ac3e29a82197e1cd",
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-east-1:891289117461:ingestion_ingress_historical_fifo_queue_dev.fifo",
        awsRegion: "us-east-1",
      },
      {
        messageId: "24be9798-83de-424c-84ef-a7f7a7ce23e6",
        receiptHandle:
          "AQEBOSQz3gqzAxSkiAROc3PV117bdf3tWGkVC9/Xo8kyZCj+Ba4FlxI0O3bGzyU6BWWYd8gzFFvG73Ef1pmBAC2Euy3G4mc6tw+CEDnLqJpmw6WcIG83oDwzobvs8aekDDeHT//jdcMIOIBg0S+jolEZdyzIO84Bmi1CEGNLP526576CBRCMyJCE8G8w55nBkZyu4Z6ZW8zcVHfwGOgqIG0z2BpUTs4d0f1QtRSxvEj9GbOYjmPpUhVAYAvEbAGbaLxuyNdZPydGbgFBQDg4LiS8F1iCGptks2ksipB0FUR8DWSe87TokuQ5WAbgRL2FECnT+HTqZhjt4ZDbjc/3yhXo2g==",
        body: '{"typeName":"Mutation","fieldName":"createIngestionEvent","arguments":{"input":{"event":{"head":{"id":"0x00010ea1c42961220f984b7f0b2289e0de6547e0df612fe66eecb8e69b89e01a","number":69281,"timestamp":1639619600,"parentID":"0x00010ea001325e2924d3cb9006c4f04f1fa1cb5d2ebd5f9b39b050b4f1a205f9","txsFeatures":1,"gasLimit":10000000},"application":"adexrio-backend-blockchain-ticker","event_name":"block_ticker"}}},"identity":null,"source":null,"request":{"headers":{"x-forwarded-for":"173.28.0.160, 130.176.11.144","cloudfront-is-tablet-viewer":"false","cloudfront-viewer-country":"US","x-amzn-requestid":"6f415bc4-aecd-4662-8b57-82e6d1da1285","via":"1.1 b4f7f1c60303af2482879b8aae947ea2.cloudfront.net (CloudFront)","x-api-key":"da2-j4dnoi742jdi3g7h6ok3c6lf4i","cloudfront-forwarded-proto":"https","content-type":"application/json; charset=UTF-8","x-amzn-trace-id":"Root=1-61ba9c13-2fba740a29f1d4cc3575ab9f","x-amz-cf-id":"toq8P263gfiYk6Z3CBwcnj3WoiGCuZo1h31o_HBjzn3OAXan8qyHtA==","content-length":"534","x-amz-user-agent":"aws-amplify/3.8.23 js","x-forwarded-proto":"https","host":"gt5l3zczp5e6rorucdtkaagnty.appsync-api.us-east-1.amazonaws.com","user-agent":"axios/0.21.1","cloudfront-is-desktop-viewer":"true","accept":"application/json, text/plain, */*","cloudfront-is-mobile-viewer":"false","x-forwarded-port":"443","cloudfront-is-smarttv-viewer":"false"},"domainName":null},"prev":{"result":{"ETag":"\\"174977c08c14669d6794996630b3aed9\\""}}}',
        attributes: [Object],
        messageAttributes: {},
        md5OfBody: "46a43217dcd92e506b6323cd67fbd6ab",
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-east-1:891289117461:ingestion_ingress_historical_fifo_queue_dev.fifo",
        awsRegion: "us-east-1",
      },
      {
        messageId: "14d6b8c7-6485-49d2-9c41-ff31ce33c7f3",
        receiptHandle:
          "AQEBgX7gglds10tLMu9+0kL7FfXLqAatg5BviG0WrSgQVNDBVHIVC7nROhH1c+yBWvG6CgL09Dm8MbEM3vQcb88dlv1jPX2g+ngv6Fgn0a7UFvDdVMtsa6e76BM1nH9OHIN54FZ5mUIArptSul2UxITMxPWFZwWrOTmGi64Aebm0aKn2I4MJepHIEOUQNoKdja9AIhNj8YTGSdSDILjZB4cQCF3WFHuN5s1/fgQsrE6QA33pS7Z0uJaXsymDxRB3pErMoRFHuqHpAtXUmQ4tkspwecyikcEdVjVQOvw0gApadz7pcrR2Ujp8v686gw2k2S3J7PtaEgX9Di/UPhr5t6iWWQ==",
        body: '{"typeName":"Mutation","fieldName":"createIngestionEvent","arguments":{"input":{"event":{"head":{"id":"0x00010ea20699c3c7b5765eaeee422f493ae96b014dd7b70e35a0dc9b604e04e9","number":69282,"timestamp":1639619610,"parentID":"0x00010ea1c42961220f984b7f0b2289e0de6547e0df612fe66eecb8e69b89e01a","txsFeatures":1,"gasLimit":10000000},"application":"adexrio-backend-blockchain-ticker","event_name":"block_ticker"}}},"identity":null,"source":null,"request":{"headers":{"x-forwarded-for":"173.28.0.160, 130.176.11.173","cloudfront-is-tablet-viewer":"false","cloudfront-viewer-country":"US","x-amzn-requestid":"8e4b24ac-d982-4beb-aa42-cf5c32e007f1","via":"1.1 6cda46bd8bc8c679982032dd94e49162.cloudfront.net (CloudFront)","x-api-key":"da2-j4dnoi742jdi3g7h6ok3c6lf4i","cloudfront-forwarded-proto":"https","content-type":"application/json; charset=UTF-8","x-amzn-trace-id":"Root=1-61ba9c1d-632dba77319449f77168b16f","x-amz-cf-id":"uXElA00sEpBqwZoa44TJ17TZJZRzUlAaXeGvBZUsX9Lqy-J-1DX5Xg==","content-length":"534","x-amz-user-agent":"aws-amplify/3.8.23 js","x-forwarded-proto":"https","host":"gt5l3zczp5e6rorucdtkaagnty.appsync-api.us-east-1.amazonaws.com","user-agent":"axios/0.21.1","cloudfront-is-desktop-viewer":"true","accept":"application/json, text/plain, */*","cloudfront-is-mobile-viewer":"false","x-forwarded-port":"443","cloudfront-is-smarttv-viewer":"false"},"domainName":null},"prev":{"result":{"ETag":"\\"4fe2a242aaf8a2ae8327bf926f9ff40d\\""}}}',
        attributes: [Object],
        messageAttributes: {},
        md5OfBody: "1381f5aea95575ebf90519f3d1d848e4",
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-east-1:891289117461:ingestion_ingress_historical_fifo_queue_dev.fifo",
        awsRegion: "us-east-1",
      },
      {
        messageId: "dcd08e57-bc6c-4eee-9b09-3a513df30143",
        receiptHandle:
          "AQEBvbEbXfONdmEcB8TA4uWgPydkGZ3zrX8bLD1yHHhxpayah7wAFB3Cbn1zaWrAfeoENv0Pd/wQ3MmZ2k1/J+EcnmNcICjQmxIAp64ScPURwNKjHJGzBXe17wTXy9/NiK7Ofxms3zLRSVidv0UGGvXPvhTivQwimJtnSfYuqOe9+nNc34jcuLOtTqrED1fVKQERFsUlR7C0frhVtV3DFfCO2aKE6OjqxMGKlm1pgpvVLl6s/A6ZYlo02t/VMgBTpC8WvGJwTXOQ/OrZlqDO0q3jhMKrh2jJNyynXbGX/3Bmc/NX0Zzc2eoM3Y1He5rfdlnjyEXN8B3bMSReqkHcJC0drA==",
        body: '{"typeName":"Mutation","fieldName":"createIngestionEvent","arguments":{"input":{"event":{"head":{"id":"0x00010ea32d806a89081d7d6d4195dc0b4967470fe4b7c21e859051c6ea22510a","number":69283,"timestamp":1639619620,"parentID":"0x00010ea20699c3c7b5765eaeee422f493ae96b014dd7b70e35a0dc9b604e04e9","txsFeatures":1,"gasLimit":10000000},"application":"adexrio-backend-blockchain-ticker","event_name":"block_ticker"}}},"identity":null,"source":null,"request":{"headers":{"x-forwarded-for":"173.28.0.160, 130.176.11.147","cloudfront-is-tablet-viewer":"false","cloudfront-viewer-country":"US","x-amzn-requestid":"baaf645f-ee36-4082-ab51-ace10b1fda52","via":"1.1 0babf5cf71b3ffbd2b1b3edc368c0afc.cloudfront.net (CloudFront)","x-api-key":"da2-j4dnoi742jdi3g7h6ok3c6lf4i","cloudfront-forwarded-proto":"https","content-type":"application/json; charset=UTF-8","x-amzn-trace-id":"Root=1-61ba9c27-2e4c20a4382f8a0f463544e8","x-amz-cf-id":"attN2ZCbf5zpEA_p86VXuLPRbvTmh-iIgcDYEQLecBc5QmMgDId0Lg==","content-length":"534","x-amz-user-agent":"aws-amplify/3.8.23 js","x-forwarded-proto":"https","host":"gt5l3zczp5e6rorucdtkaagnty.appsync-api.us-east-1.amazonaws.com","user-agent":"axios/0.21.1","cloudfront-is-desktop-viewer":"true","accept":"application/json, text/plain, */*","cloudfront-is-mobile-viewer":"false","x-forwarded-port":"443","cloudfront-is-smarttv-viewer":"false"},"domainName":null},"prev":{"result":{"ETag":"\\"590177d5f55847f490359db2af966eeb\\""}}}',
        attributes: [Object],
        messageAttributes: {},
        md5OfBody: "dd852dbef35c0c3f320eac4479b5d62e",
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-east-1:891289117461:ingestion_ingress_historical_fifo_queue_dev.fifo",
        awsRegion: "us-east-1",
      },
      {
        messageId: "f2c48daf-ff82-4d19-90ef-8a7c0ce660c5",
        receiptHandle:
          "AQEB7a4IV4M3wKBX6upXrGnkfWkMins8O4VzYC0RyyXy53NMwcwJqisIzc9fzG3ceFlqEhBn6/6MEb4RlkK//mgj3wnbS9SdoKMOtXF2PO8xtOsoN7VTId+63xZa7s8JLqpWxdi4m/tfxjd7os+JRGM+GwtkoltHeYTS3ra0PZg6++dXhVqFoeiEJmcPkV32oNNJF9UL+8s/cB+/k6Kg7FG0cDzFZFnrT/jtJ5mMBLWUGO1Rbmmg5zhYYDmRyxyDPCeNZB7Y2+Xc31FmucsafowQvr8a9bzn4MsuBbgDwJU6cudUXd5pasEqFijTLvvnC5GtAaKBT0zD6rbbzRE3vVRuOw==",
        body: '{"typeName":"Mutation","fieldName":"createIngestionEvent","arguments":{"input":{"event":{"head":{"id":"0x00010ea4b04e1f15840a8c16cd00b501adcd42d5cd0a1cbc8d5292137d2daf58","number":69284,"timestamp":1639619630,"parentID":"0x00010ea32d806a89081d7d6d4195dc0b4967470fe4b7c21e859051c6ea22510a","txsFeatures":1,"gasLimit":10000000},"application":"adexrio-backend-blockchain-ticker","event_name":"block_ticker"}}},"identity":null,"source":null,"request":{"headers":{"x-forwarded-for":"173.28.0.160, 130.176.11.147","cloudfront-is-tablet-viewer":"false","cloudfront-viewer-country":"US","x-amzn-requestid":"c96e22b1-0793-4ab5-99ca-a96dfb2d0ac4","via":"1.1 7c58aa8e0e966d9b2b6f395985608e99.cloudfront.net (CloudFront)","x-api-key":"da2-j4dnoi742jdi3g7h6ok3c6lf4i","cloudfront-forwarded-proto":"https","content-type":"application/json; charset=UTF-8","x-amzn-trace-id":"Root=1-61ba9c31-75cc7eb17e163e306dbf38e1","x-amz-cf-id":"FdxxUcUTzorDUVNJNxeTVIqd57QXYc5OZWdMnMSM4_fHjoFeSm5Gag==","content-length":"534","x-amz-user-agent":"aws-amplify/3.8.23 js","x-forwarded-proto":"https","host":"gt5l3zczp5e6rorucdtkaagnty.appsync-api.us-east-1.amazonaws.com","user-agent":"axios/0.21.1","cloudfront-is-desktop-viewer":"true","accept":"application/json, text/plain, */*","cloudfront-is-mobile-viewer":"false","x-forwarded-port":"443","cloudfront-is-smarttv-viewer":"false"},"domainName":null},"prev":{"result":{"ETag":"\\"e9154abfcc9d299d49ba211e8d9899b7\\""}}}',
        attributes: [Object],
        messageAttributes: {},
        md5OfBody: "a6c6ec5a0a5a0eff6d1aa42835bce3bf",
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-east-1:891289117461:ingestion_ingress_historical_fifo_queue_dev.fifo",
        awsRegion: "us-east-1",
      },
      {
        messageId: "3036f6fc-1e55-47f1-85bf-ac4874fbf17d",
        receiptHandle:
          "AQEB/Ht6st6A11OAbtj/kNdHqL+zrPahQcNP2VuAk+Cnd2/9Gmxf9QZ6Nlzm10QT1931GVq1QrMfTBbvR08ocCsg5bhklDTr1efXZi8aGHVF3Wa65eU/tqDMB+T9TMEUUwTZ94fRq90RyARJGUXwGgLmMHByXA3q+5HJpLdahAt3kzvHSYTKMjEs5qDjOcdqn9doPOuxhDP4qFpaaf6r5Vp7A/JJzKvRyXorIdnwcSTVg//So1prQwbsPLqd8laM2nz3PzJjmv0upX0uXdvhbrvFtqQ0Qh7mNoVCqtpNbUqyyJv/iZTwrTa8mH9ifWQqy3SEcxGXLhgU4qCFTxEW3WUrmQ==",
        body: '{"typeName":"Mutation","fieldName":"createIngestionEvent","arguments":{"input":{"event":{"head":{"id":"0x00010ea5bf8382088af630c1b6c907bbd2ce2cdd13f68de0f383ce631ca44417","number":69285,"timestamp":1639619640,"parentID":"0x00010ea4b04e1f15840a8c16cd00b501adcd42d5cd0a1cbc8d5292137d2daf58","txsFeatures":1,"gasLimit":10000000},"application":"adexrio-backend-blockchain-ticker","event_name":"block_ticker"}}},"identity":null,"source":null,"request":{"headers":{"x-forwarded-for":"173.28.0.160, 130.176.11.79","cloudfront-is-tablet-viewer":"false","cloudfront-viewer-country":"US","x-amzn-requestid":"2ee4557b-43e2-43d3-b17a-36e243312e8f","via":"1.1 1b4178b2d0c62891561e881584b58e09.cloudfront.net (CloudFront)","x-api-key":"da2-j4dnoi742jdi3g7h6ok3c6lf4i","cloudfront-forwarded-proto":"https","content-type":"application/json; charset=UTF-8","x-amzn-trace-id":"Root=1-61ba9c3b-26fc3469084769842a6d7b00","x-amz-cf-id":"_eCFLc7TkqT9Ebu2wB3PSqUhl4AOXF6M56c5bMEuynL8XkcRtlFm3Q==","content-length":"534","x-amz-user-agent":"aws-amplify/3.8.23 js","x-forwarded-proto":"https","host":"gt5l3zczp5e6rorucdtkaagnty.appsync-api.us-east-1.amazonaws.com","user-agent":"axios/0.21.1","cloudfront-is-desktop-viewer":"true","accept":"application/json, text/plain, */*","cloudfront-is-mobile-viewer":"false","x-forwarded-port":"443","cloudfront-is-smarttv-viewer":"false"},"domainName":null},"prev":{"result":{"ETag":"\\"eca5aa17f2d361301477d8c6ee7db62d\\""}}}',
        attributes: [Object],
        messageAttributes: {},
        md5OfBody: "1533d38f6ea98964e44b8b39b6b86d36",
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-east-1:891289117461:ingestion_ingress_historical_fifo_queue_dev.fifo",
        awsRegion: "us-east-1",
      },
      {
        messageId: "0b3c3ebd-3582-46bc-996b-6561d93218b7",
        receiptHandle:
          "AQEBjv3xM5E+KAJ/jejJBSZKQATaSZfD9gi7sLTjIs54zcZYDKXVR7i6QBhXraOnGeG7PtJwKauuo8noBzMRgosylE0pa8TxYk0XkV4PRGhoDMVQikGcsI8QjFRy32W/FHQqXsKL2dbCNo19Mz8JSnTyEkVcXlG2qGp5qvIFuFrvFNTE4ih7WyIAeME/DCCN9gcMWiuHrO0I5Q7vLYNy5EVzB4qsM/Ri9a+4CczNrkP6Y+u2NNK56I5nnIoNgtDYg4LhEQczH0effdspkY1m7RZItt4p4cIY9xi+V80ufFqCMlT0WhhPteLJ86vo1WVQqvmbhRcNl1T6dxsNIGlhjFg14w==",
        body: '{"typeName":"Mutation","fieldName":"createIngestionEvent","arguments":{"input":{"event":{"head":{"id":"0x00010ea6a347dedcb082e544ebe571aa12e48dc4f6ad771179843470c1ba7947","number":69286,"timestamp":1639619650,"parentID":"0x00010ea5bf8382088af630c1b6c907bbd2ce2cdd13f68de0f383ce631ca44417","txsFeatures":1,"gasLimit":10000000},"application":"adexrio-backend-blockchain-ticker","event_name":"block_ticker"}}},"identity":null,"source":null,"request":{"headers":{"x-forwarded-for":"173.28.0.160, 130.176.11.79","cloudfront-is-tablet-viewer":"false","cloudfront-viewer-country":"US","x-amzn-requestid":"15b4d7e4-c762-41d1-bf82-9e33917e3a4d","via":"1.1 83ac07892fa0e0fd0b9db6e878d848aa.cloudfront.net (CloudFront)","x-api-key":"da2-j4dnoi742jdi3g7h6ok3c6lf4i","cloudfront-forwarded-proto":"https","content-type":"application/json; charset=UTF-8","x-amzn-trace-id":"Root=1-61ba9c45-0e7ec14d750a82a5321495eb","x-amz-cf-id":"ixNOmmUFk4rOPcxTA2gDOZZRA_SGLVepilZwzd-TEuMkkdV0pL5dfA==","content-length":"534","x-amz-user-agent":"aws-amplify/3.8.23 js","x-forwarded-proto":"https","host":"gt5l3zczp5e6rorucdtkaagnty.appsync-api.us-east-1.amazonaws.com","user-agent":"axios/0.21.1","cloudfront-is-desktop-viewer":"true","accept":"application/json, text/plain, */*","cloudfront-is-mobile-viewer":"false","x-forwarded-port":"443","cloudfront-is-smarttv-viewer":"false"},"domainName":null},"prev":{"result":{"ETag":"\\"0815d54b562a6e1dc255882b5adb382c\\""}}}',
        attributes: [Object],
        messageAttributes: {},
        md5OfBody: "6e042b9e15f1166f6f22da2c2473e607",
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-east-1:891289117461:ingestion_ingress_historical_fifo_queue_dev.fifo",
        awsRegion: "us-east-1",
      },
      {
        messageId: "d04561fa-18a2-49da-8a04-dc9794695aaa",
        receiptHandle:
          "AQEBsOIgwbdRhn6jcutlJVflMbp9YNVGUlkXBglsCMDTW4zPI8mJj/pgMUeb5uDvImSAuDBGKQ9ESVbckAw1M3O/dYgGye+WBB4o/trM5LaoVBWEE7qq0HptEmBnGMOEerVnR4wPZM9ZW2CeBBXN1AhVQK1+aK5CTSbCE2PjtPJhiUUs6HFD/WOfUHHVbUXMlwN3V9o+iTUjXNHMOD8ehZZDgycoNfjjODmWY9n7IVWFDUF0epy8DWano8kJ84mM7wAaCT9OZ7fdbkRcQQHsocZCFyV9uSdjNwkY6fr432UzQRUeC3Odm2jd49GzndE6LroS40ePZ6ZleY6HJsURY3RYQQ==",
        body: '{"typeName":"Mutation","fieldName":"createIngestionEvent","arguments":{"input":{"event":{"head":{"id":"0x00010ea7c0f7f723a9abe4c4a6bb42c3d62dcce41af9af30ff49455d62d9329e","number":69287,"timestamp":1639619660,"parentID":"0x00010ea6a347dedcb082e544ebe571aa12e48dc4f6ad771179843470c1ba7947","txsFeatures":1,"gasLimit":10000000},"application":"adexrio-backend-blockchain-ticker","event_name":"block_ticker"}}},"identity":null,"source":null,"request":{"headers":{"x-forwarded-for":"173.28.0.160, 130.176.11.132","cloudfront-is-tablet-viewer":"false","cloudfront-viewer-country":"US","x-amzn-requestid":"89c4204a-2caa-4dab-ba35-d75fd509608a","via":"1.1 4d8fb668652ab3e226314572d782218f.cloudfront.net (CloudFront)","x-api-key":"da2-j4dnoi742jdi3g7h6ok3c6lf4i","cloudfront-forwarded-proto":"https","content-type":"application/json; charset=UTF-8","x-amzn-trace-id":"Root=1-61ba9c4f-51e796f27b32ac0d3a3acace","x-amz-cf-id":"VbGKAfyWxjYtgDFgSzAXXGUFDuoUR9ZC8SfzgIUx3DlnPPlgRPPY1Q==","content-length":"534","x-amz-user-agent":"aws-amplify/3.8.23 js","x-forwarded-proto":"https","host":"gt5l3zczp5e6rorucdtkaagnty.appsync-api.us-east-1.amazonaws.com","user-agent":"axios/0.21.1","cloudfront-is-desktop-viewer":"true","accept":"application/json, text/plain, */*","cloudfront-is-mobile-viewer":"false","x-forwarded-port":"443","cloudfront-is-smarttv-viewer":"false"},"domainName":null},"prev":{"result":{"ETag":"\\"765784784b933179be0631c9a7af50dd\\""}}}',
        attributes: [Object],
        messageAttributes: {},
        md5OfBody: "ec33fdf54e97a4ddeee872c9bc6e6e6b",
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-east-1:891289117461:ingestion_ingress_historical_fifo_queue_dev.fifo",
        awsRegion: "us-east-1",
      },
      {
        messageId: "0c64045d-b2fe-46ae-9595-96d844300152",
        receiptHandle:
          "AQEBB85xZATaNY+5DPFAHdfu4SkrBmuGwOH5LvtNEMg25KSU+vQl3zRdiS2yeKgPF1bMfJxfAatzIFzLNiRsz1Ba3TMW+CsvK2RR1UlPeiSKfeBQBidFZTbnWi4FlZkaufR9Y7xZhRwD62QJhwxOzGfxII7k3UnPv0vT8+4bijBzGvNV7PhtchoQ328PN8I4rbw4ufzR0cCSaIrLZIVGBg0Tb2eD21vIGXoOwkNPrCyMXZ8A9zRmiDtjTmBLIv9/NH1J7FHIl2qeO8u994Y5ejvNghOaFYxeTQsM2MLmTD+zVnZOmkxJlHihYpDgggXIk9/iaqIQBUFOSa1hrKKA7X5z1Q==",
        body: '{"typeName":"Mutation","fieldName":"createIngestionEvent","arguments":{"input":{"event":{"head":{"id":"0x00010e9f67ab0e90cf7f4342860d8618cfca5c70481f0d660c3b416cdb8a60c7","number":69279,"timestamp":1639619580,"parentID":"0x00010e9e2f63de8e9196b473abf15b09fbf4a5a6b9bccd4e0d0d477ee764a7db","txsFeatures":1,"gasLimit":10000000},"application":"adexrio-backend-blockchain-ticker","event_name":"block_ticker"}}},"identity":null,"source":null,"request":{"headers":{"x-forwarded-for":"173.28.0.160, 130.176.11.79","cloudfront-is-tablet-viewer":"false","cloudfront-viewer-country":"US","x-amzn-requestid":"4dd9925a-559a-4e69-b6ba-97ab6de47397","via":"1.1 f3784375413c3c1fd8e02b9ecec32db7.cloudfront.net (CloudFront)","x-api-key":"da2-j4dnoi742jdi3g7h6ok3c6lf4i","cloudfront-forwarded-proto":"https","content-type":"application/json; charset=UTF-8","x-amzn-trace-id":"Root=1-61ba9c06-209e70391e309ae9737bd448","x-amz-cf-id":"fhCjQ3UBz4y8n9dhUQGDiZGkklN70JgzJ-LRx_LQxi7s5h-PXrgFxA==","content-length":"534","x-amz-user-agent":"aws-amplify/3.8.23 js","x-forwarded-proto":"https","host":"gt5l3zczp5e6rorucdtkaagnty.appsync-api.us-east-1.amazonaws.com","user-agent":"axios/0.21.1","cloudfront-is-desktop-viewer":"true","accept":"application/json, text/plain, */*","cloudfront-is-mobile-viewer":"false","x-forwarded-port":"443","cloudfront-is-smarttv-viewer":"false"},"domainName":null},"prev":{"result":{"ETag":"\\"125017fb5cfe90f7785484861bf5b39d\\""}}}',
        attributes: [Object],
        messageAttributes: {},
        md5OfBody: "5dcc06af77b0a18cbd3c2c29b35c172e",
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-east-1:891289117461:ingestion_ingress_historical_fifo_queue_dev.fifo",
        awsRegion: "us-east-1",
      },
      {
        messageId: "01aae09e-1e01-47fa-a34c-a89fca75da6b",
        receiptHandle:
          "AQEBdHJMY8AJHFd8GF+p+fMxCeurwo1qNy8762d/4cbSteZqfWTRF5zwYOcILVSFD6pA9VvXDob9zq8KbzJ1cFMQ7HJItZQiCgQ+WigrudHsWv3Qz3VJt9jfl9y7nXbOywL1MRePjBj3eWX5USG6mwiDeGD2QTjhgrwtFpbum8wLrAP3mqMJj7QnmibP6MhzjDhJ+F90SuhlAIpuFgeK6OCJotDHF1tae+g55kmWWZ2qIq4YmEwvFRjVGeXJmB8LMSC+c/hb7sAJOEAxdAcovHVnebiGcNFRHEglmrhGTIQZjbjOcA9HrrCDbSMBaZpQV328OtnSq8o3ezOM4eAt9mk3Hg==",
        body: '{"typeName":"Mutation","fieldName":"createIngestionEvent","arguments":{"input":{"event":{"head":{"id":"0x00010ea81adc3bd88a953143edd7f3705be5b76bf3224ac188ce6ad4acd3737d","number":69288,"timestamp":1639619670,"parentID":"0x00010ea7c0f7f723a9abe4c4a6bb42c3d62dcce41af9af30ff49455d62d9329e","txsFeatures":1,"gasLimit":10000000},"application":"adexrio-backend-blockchain-ticker","event_name":"block_ticker"}}},"identity":null,"source":null,"request":{"headers":{"x-forwarded-for":"173.28.0.160, 130.176.11.110","cloudfront-is-tablet-viewer":"false","cloudfront-viewer-country":"US","x-amzn-requestid":"26c7685c-f945-4a9b-9225-2cfa921acd6a","via":"1.1 6e618790e28163ec91041a24942fdc3c.cloudfront.net (CloudFront)","x-api-key":"da2-j4dnoi742jdi3g7h6ok3c6lf4i","cloudfront-forwarded-proto":"https","content-type":"application/json; charset=UTF-8","x-amzn-trace-id":"Root=1-61ba9c59-07bf1c1247e78a0a51a50205","x-amz-cf-id":"TN5GHMNSrnDXQLeWAOZFLiS6W-LgPpqZPk2v-H1f5FW1pV9DEMTTrQ==","content-length":"534","x-amz-user-agent":"aws-amplify/3.8.23 js","x-forwarded-proto":"https","host":"gt5l3zczp5e6rorucdtkaagnty.appsync-api.us-east-1.amazonaws.com","user-agent":"axios/0.21.1","cloudfront-is-desktop-viewer":"true","accept":"application/json, text/plain, */*","cloudfront-is-mobile-viewer":"false","x-forwarded-port":"443","cloudfront-is-smarttv-viewer":"false"},"domainName":null},"prev":{"result":{"ETag":"\\"e4fad95a6c1ba10da04396f976120614\\""}}}',
        attributes: [Object],
        messageAttributes: {},
        md5OfBody: "00382bf89da4d85cd0fe4017501256c7",
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-east-1:891289117461:ingestion_ingress_historical_fifo_queue_dev.fifo",
        awsRegion: "us-east-1",
      },
    ],
  };

  const actual = await lambda.handler(payloadEvent, null);

  console.log('actual number', actual.highestBlockMessageFromBatch.bodyObject.arguments.input.event.head.number);
  console.log('expected number', expected.highestBlockMessageFromBatch.bodyObject.arguments.input.event.head.number);

  expect(actual.highestBlockMessageFromBatch.bodyObject.arguments.input.event.head.number).to.eql(expected.highestBlockMessageFromBatch.bodyObject.arguments.input.event.head.number);
});
