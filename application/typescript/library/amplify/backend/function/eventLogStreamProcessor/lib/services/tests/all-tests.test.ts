import 'jest';
import { SearchablePoolFilterInput } from '../../library/codegen/API';
import { ApiPoolAttributesService } from '../core/api-pool-attributes-service';
import { LotteryPoolAttributesService } from '../core/lottery-pool-attributes-service';
import { PoolPlayerService } from '../core/pool-player-service';
import { PoolService } from '../core/pool-service';
import { UserWalletService } from '../core/user-wallet-service';
import { SecretsManager } from '../../library//backend/aws-services/secrets-manager';
import { BlockChainService } from '../../library/backend/blockchain/blockchain-service';

import { Orchestrator } from '../orchestrator';


// describe("blockchain legacy service tests", () => {

//     test('blockchain service production retrieve gameId result', async () => {

//         const secretsManager = new SecretsManager();

//         const secretsData = await secretsManager.getSecretValue("adexrio/wallets/mnemonics");

//         const secret = JSON.parse(secretsData.SecretString);

//         process.env.NODE_ENV = 'prod';
//         process.env.VECHAIN_API_NODE="https://vethor-node.vechain.com"
//         process.env.RECORD_TYPE="test"
//         process.env.RANDOM_ORG_API_ENDPOINT="https://api.random.org/json-rpc/2/invoke"
//         process.env.DEBUG_ON="false";

//         const blockchainLegacyService = new BlockChainService(secret);   
//         await blockchainLegacyService.initializeWallet();

//         const blockchainGameDetails = await blockchainLegacyService.getGameById(1);

//         console.log('blockchainGameDetails', blockchainGameDetails);
//     });

// });

describe("create pool service tests", () => {
     test('can create a pool from a test record', async () => {

        process.env.NODE_ENV = 'prod';
        process.env.VECHAIN_API_NODE="https://vethor-node.vechain.com"
        process.env.RECORD_TYPE="test"
        process.env.RANDOM_ORG_API_ENDPOINT="https://api.random.org/json-rpc/2/invoke"
        process.env.DEBUG_ON="false";

        // const testEvent = {
        //     "Records": [
        //         {
        //             "eventID": "e0b7cae185d96f018cc06f4e11614ce4",
        //             "eventName": "INSERT",
        //             "eventVersion": "1.1",
        //             "eventSource": "aws:dynamodb",
        //             "awsRegion": "us-east-1",
        //             "dynamodb": {
        //                 "ApproximateCreationDateTime": 1649908067,
        //                 "Keys": {
        //                     "id": {
        //                         "S": "98700bd8-4880-49f4-842d-b19b7e6f9428"
        //                     }
        //                 },
        //                 "NewImage": {
        //                     "decodedGameId": {
        //                         "N": "2"
        //                     },
        //                     "decodedPlayer": {
        //                         "S": "0x80a14141080f878260340986c7cf6e4a6b2ac504"
        //                     },
        //                     "__typename": {
        //                         "S": "CreatePoolEventLog"
        //                     },
        //                     "metaTxOrigin": {
        //                         "S": "0x80a14141080f878260340986c7cf6e4a6b2ac504"
        //                     },
        //                     "raw": {
        //                         "M": {
        //                             "address": {
        //                                 "S": "0x8d99795e74fdcbc1fed412874d04d3ac85808e2e"
        //                             },
        //                             "data": {
        //                                 "S": "0x"
        //                             },
        //                             "topics": {
        //                                 "L": [
        //                                     {
        //                                         "S": "0x055c5881ecddd2b670014114d0806730877835ac63b0299a9270f81b00bff672"
        //                                     },
        //                                     {
        //                                         "S": "0x0000000000000000000000000000000000000000000000000000000000000002"
        //                                     },
        //                                     {
        //                                         "S": "0x00000000000000000000000080a14141080f878260340986c7cf6e4a6b2ac504"
        //                                     },
        //                                     {
        //                                         "S": "0x000000000000000000000000000000000000000000000000000000006170b8b6"
        //                                     }
        //                                 ]
        //                             },
        //                             "meta": {
        //                                 "M": {
        //                                     "blockID": {
        //                                         "S": "0x009f1825bea0fd60919d2da5a555fe0ce585b6fffc641c98860dda239e12ec46"
        //                                     },
        //                                     "txOrigin": {
        //                                         "S": "0x80a14141080f878260340986c7cf6e4a6b2ac504"
        //                                     },
        //                                     "clauseIndex": {
        //                                         "N": "0"
        //                                     },
        //                                     "blockNumber": {
        //                                         "N": "10426405"
        //                                     },
        //                                     "txID": {
        //                                         "S": "0x67c340225ce41a3b036f71a3bf26747944e22b819aaba3a3a28ba3fef790adda"
        //                                     },
        //                                     "blockTimestamp": {
        //                                         "N": "1634777270"
        //                                     }
        //                                 }
        //                             },
        //                             "decoded": {
        //                                 "M": {
        //                                     "0": {
        //                                         "S": "2"
        //                                     },
        //                                     "1": {
        //                                         "S": "0x80a14141080f878260340986c7cf6e4a6b2ac504"
        //                                     },
        //                                     "2": {
        //                                         "S": "1634777270"
        //                                     },
        //                                     "gameId": {
        //                                         "S": "2"
        //                                     },
        //                                     "dateTime": {
        //                                         "S": "1634777270"
        //                                     },
        //                                     "player": {
        //                                         "S": "0x80a14141080f878260340986c7cf6e4a6b2ac504"
        //                                     }
        //                                 }
        //                             }
        //                         }
        //                     },
        //                     "txID": {
        //                         "S": "0x67c340225ce41a3b036f71a3bf26747944e22b819aaba3a3a28ba3fef790adda"
        //                     },
        //                     "createdAt": {
        //                         "S": "2022-04-14T03:47:47.131Z"
        //                     },
        //                     "metaBlockNumber": {
        //                         "N": "10426405"
        //                     },
        //                     "decodedDateTime": {
        //                         "S": "1634777270"
        //                     },
        //                     "metaBlockTimestamp": {
        //                         "N": "1634777270"
        //                     },
        //                     "metaClauseIndex": {
        //                         "N": "0"
        //                     },
        //                     "id": {
        //                         "S": "98700bd8-4880-49f4-842d-b19b7e6f9428"
        //                     },
        //                     "metaBlockID": {
        //                         "S": "0x009f1825bea0fd60919d2da5a555fe0ce585b6fffc641c98860dda239e12ec46"
        //                     },
        //                     "updatedAt": {
        //                         "S": "2022-04-14T03:47:47.131Z"
        //                     }
        //                 },
        //                 "SequenceNumber": "15376600000000022163615583",
        //                 "SizeBytes": 1268,
        //                 "StreamViewType": "NEW_AND_OLD_IMAGES"
        //             },
        //             "eventSourceARN": "arn:aws:dynamodb:us-east-1:891289117461:table/CreatePoolEventLog-plrkzmrkj5bmbjslf67bwgzcfu-dev/stream/2022-04-10T18:54:05.834"
        //         }
        //     ]
        // }

        const testEvent = {
            "Records": [
                {
                    "eventID": "8e6fabef236e9b05809c9ca4bc3655fe",
                    "eventName": "INSERT",
                    "eventVersion": "1.1",
                    "eventSource": "aws:dynamodb",
                    "awsRegion": "us-east-1",
                    "dynamodb": {
                        "ApproximateCreationDateTime": 1649974682,
                        "Keys": {
                            "id": {
                                "S": "f4f662c3-90d9-4f12-bcfe-97d593c2c309"
                            }
                        },
                        "NewImage": {
                            "decodedGameId": {
                                "N": "7"
                            },
                            "decodedPlayer": {
                                "S": "0xc4073dbea8a59c47d8f4e06939edc9fed868929c"
                            },
                            "__typename": {
                                "S": "PlayerJoinedPoolEventLog"
                            },
                            "metaTxOrigin": {
                                "S": "0xc4073dbea8a59c47d8f4e06939edc9fed868929c"
                            },
                            "raw": {
                                "M": {
                                    "address": {
                                        "S": "0x8d99795e74fdcbc1fed412874d04d3ac85808e2e"
                                    },
                                    "data": {
                                        "S": "0x"
                                    },
                                    "topics": {
                                        "L": [
                                            {
                                                "S": "0xaf826dfc28710e789b457fdaf15b1d85f98319d34d1af1a3760eb0ef295912cd"
                                            },
                                            {
                                                "S": "0x0000000000000000000000000000000000000000000000000000000000000007"
                                            },
                                            {
                                                "S": "0x000000000000000000000000c4073dbea8a59c47d8f4e06939edc9fed868929c"
                                            },
                                            {
                                                "S": "0x0000000000000000000000000000000000000000000000000000000061727386"
                                            }
                                        ]
                                    },
                                    "meta": {
                                        "M": {
                                            "blockID": {
                                                "S": "0x009f4469677df20de9324157b653aa7e567008c4facc5370ad872e17ba381a4b"
                                            },
                                            "txOrigin": {
                                                "S": "0xc4073dbea8a59c47d8f4e06939edc9fed868929c"
                                            },
                                            "clauseIndex": {
                                                "N": "0"
                                            },
                                            "blockNumber": {
                                                "N": "10437737"
                                            },
                                            "txID": {
                                                "S": "0xa9a4be28fbef844bdf281adcdcf41046ca9f68cff51c04f2d3f741582f9bcd5e"
                                            },
                                            "blockTimestamp": {
                                                "N": "1634890630"
                                            }
                                        }
                                    },
                                    "decoded": {
                                        "M": {
                                            "0": {
                                                "S": "7"
                                            },
                                            "1": {
                                                "S": "0xc4073dbea8a59c47d8f4e06939edc9fed868929c"
                                            },
                                            "2": {
                                                "S": "1634890630"
                                            },
                                            "gameId": {
                                                "S": "7"
                                            },
                                            "dateTime": {
                                                "S": "1634890630"
                                            },
                                            "player": {
                                                "S": "0xc4073dbea8a59c47d8f4e06939edc9fed868929c"
                                            }
                                        }
                                    }
                                }
                            },
                            "txID": {
                                "S": "0xa9a4be28fbef844bdf281adcdcf41046ca9f68cff51c04f2d3f741582f9bcd5e"
                            },
                            "createdAt": {
                                "S": "2022-04-14T22:18:02.240Z"
                            },
                            "metaBlockNumber": {
                                "N": "10437737"
                            },
                            "decodedDateTime": {
                                "S": "1634890630"
                            },
                            "metaBlockTimestamp": {
                                "N": "1634890630"
                            },
                            "metaClauseIndex": {
                                "N": "0"
                            },
                            "id": {
                                "S": "f4f662c3-90d9-4f12-bcfe-97d593c2c309"
                            },
                            "metaBlockID": {
                                "S": "0x009f4469677df20de9324157b653aa7e567008c4facc5370ad872e17ba381a4b"
                            },
                            "updatedAt": {
                                "S": "2022-04-14T22:18:02.240Z"
                            }
                        },
                        "SequenceNumber": "19298000000000022490543353",
                        "SizeBytes": 1274,
                        "StreamViewType": "NEW_AND_OLD_IMAGES"
                    },
                    "eventSourceARN": "arn:aws:dynamodb:us-east-1:891289117461:table/PlayerJoinedPoolEventLog-plrkzmrkj5bmbjslf67bwgzcfu-dev/stream/2022-04-10T18:54:05.496"
                }
            ]
        };

        const userWalletService = new UserWalletService();
        const apiPoolAttributesService = new ApiPoolAttributesService();
        const poolPlayerService = new PoolPlayerService();
        const poolService = new PoolService();
        const lotteryPoolAttributesService = new LotteryPoolAttributesService();

        const secretsManager = new SecretsManager();

        const secretsData = await secretsManager.getSecretValue("adexrio/wallets/mnemonics");
        const secret = JSON.parse(secretsData.SecretString);

        const blockchainLegacyService = new BlockChainService(secret);
        await blockchainLegacyService.initializeWallet();

        const orchestrator = new Orchestrator(
            userWalletService, 
            apiPoolAttributesService, 
            poolPlayerService, 
            poolService, 
            lotteryPoolAttributesService,
            blockchainLegacyService
            );        

        await orchestrator.handleEventRecord(testEvent.Records[0]);
    });

    // test('can retrieve players in a pool', async () => {        

    //     const testEvent = {
    //         "Records": [
    //             {
    //                 "eventID": "99488eb1efdb2f793082980b2df9d36d",
    //                 "eventName": "INSERT",
    //                 "eventVersion": "1.1",
    //                 "eventSource": "aws:dynamodb",
    //                 "awsRegion": "us-east-1",
    //                 "dynamodb": {
    //                     "ApproximateCreationDateTime": 1645150368,
    //                     "Keys": {
    //                         "id": {
    //                             "S": "37f77e87-e419-45ce-a472-62aebaa7fb7f"
    //                         }
    //                     },
    //                     "NewImage": {
    //                         "decodedGameId": {
    //                             "N": "429"
    //                         },
    //                         "decodedPlayer": {
    //                             "S": "0x80a14141080f878260340986c7cf6e4a6b2ac504"
    //                         },
    //                         "__typename": {
    //                             "S": "CreatePoolEventLog"
    //                         },
    //                         "metaTxOrigin": {
    //                             "S": "0x80a14141080f878260340986c7cf6e4a6b2ac504"
    //                         },
    //                         "raw": {
    //                             "M": {
    //                                 "address": {
    //                                     "S": "0x8d99795e74fdcbc1fed412874d04d3ac85808e2e"
    //                                 },
    //                                 "data": {
    //                                     "S": "0x"
    //                                 },
    //                                 "topics": {
    //                                     "L": [
    //                                         {
    //                                             "S": "0x055c5881ecddd2b670014114d0806730877835ac63b0299a9270f81b00bff672"
    //                                         },
    //                                         {
    //                                             "S": "0x00000000000000000000000000000000000000000000000000000000000001ad"
    //                                         },
    //                                         {
    //                                             "S": "0x00000000000000000000000080a14141080f878260340986c7cf6e4a6b2ac504"
    //                                         },
    //                                         {
    //                                             "S": "0x0000000000000000000000000000000000000000000000000000000061df060e"
    //                                         }
    //                                     ]
    //                                 },
    //                                 "meta": {
    //                                     "M": {
    //                                         "blockID": {
    //                                             "S": "0x00aa1d71066e37f7bca5ff00393bfbbda8f82466714f50bf8a83a3c0204f1d58"
    //                                         },
    //                                         "txOrigin": {
    //                                             "S": "0x80a14141080f878260340986c7cf6e4a6b2ac504"
    //                                         },
    //                                         "clauseIndex": {
    //                                             "N": "0"
    //                                         },
    //                                         "blockNumber": {
    //                                             "N": "11148657"
    //                                         },
    //                                         "txID": {
    //                                             "S": "0x31991f6e50d3acc2cde1862303936875b5ab704beccd369104a649988538aea6"
    //                                         },
    //                                         "blockTimestamp": {
    //                                             "N": "1642006030"
    //                                         }
    //                                     }
    //                                 },
    //                                 "decoded": {
    //                                     "M": {
    //                                         "0": {
    //                                             "S": "429"
    //                                         },
    //                                         "1": {
    //                                             "S": "0x80a14141080f878260340986c7cf6e4a6b2ac504"
    //                                         },
    //                                         "2": {
    //                                             "S": "1642006030"
    //                                         },
    //                                         "gameId": {
    //                                             "S": "429"
    //                                         },
    //                                         "dateTime": {
    //                                             "S": "1642006030"
    //                                         },
    //                                         "player": {
    //                                             "S": "0x80a14141080f878260340986c7cf6e4a6b2ac504"
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         },
    //                         "txID": {
    //                             "S": "0x31991f6e50d3acc2cde1862303936875b5ab704beccd369104a649988538aea6"
    //                         },
    //                         "createdAt": {
    //                             "S": "2022-02-18T02:12:47.564Z"
    //                         },
    //                         "metaBlockNumber": {
    //                             "N": "11148657"
    //                         },
    //                         "decodedDateTime": {
    //                             "S": "1642006030"
    //                         },
    //                         "metaBlockTimestamp": {
    //                             "N": "1642006030"
    //                         },
    //                         "metaClauseIndex": {
    //                             "N": "0"
    //                         },
    //                         "id": {
    //                             "S": "37f77e87-e419-45ce-a472-62aebaa7fb7f"
    //                         },
    //                         "metaBlockID": {
    //                             "S": "0x00aa1d71066e37f7bca5ff00393bfbbda8f82466714f50bf8a83a3c0204f1d58"
    //                         },
    //                         "updatedAt": {
    //                             "S": "2022-02-18T02:12:47.564Z"
    //                         }
    //                     },
    //                     "SequenceNumber": "19582300000000046949764648",
    //                     "SizeBytes": 1275,
    //                     "StreamViewType": "NEW_AND_OLD_IMAGES"
    //                 },
    //                 "eventSourceARN": "arn:aws:dynamodb:us-east-1:891289117461:table/CreatePoolEventLog-plrkzmrkj5bmbjslf67bwgzcfu-dev/stream/2022-02-13T23:15:31.456"
    //             }
    //         ]
    //     }

    //     const userWalletService = new UserWalletService();
    //     const apiPoolAttributesService = new ApiPoolAttributesService();
    //     const poolPlayerService = new PoolPlayerService();
    //     const poolService = new PoolService();

    //     const secretsManager = new SecretsManager();

    //     const secretsData = await secretsManager.getSecretValue("adexrio/wallets/mnemonics");
    //     const secret = JSON.parse(secretsData.SecretString);

    //     const blockchainLegacyService = new BlockChainService(secret);
    //     await blockchainLegacyService.initializeWallet();

    //     const searchGameId = parseInt(testEvent.Records[0].dynamodb.NewImage.decodedGameId.N);

    //     const result = await poolService.searchPoolByPoolId({ poolId: { eq: searchGameId } } as SearchablePoolFilterInput);
        
    //     console.log('result of searchPoolByPoolId', result);
        
    // });

});
