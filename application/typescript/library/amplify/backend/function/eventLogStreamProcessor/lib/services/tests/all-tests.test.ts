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
import { CreatePoolService } from '../event-log-processors/create-pool-service';


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

//describe("create pool service tests", () => {
//      test('can create a pool from a test record', async () => {

//         process.env.NODE_ENV = 'prod';
//         process.env.VECHAIN_API_NODE="https://vethor-node.vechain.com"
//         process.env.RECORD_TYPE="test"
//         process.env.RANDOM_ORG_API_ENDPOINT="https://api.random.org/json-rpc/2/invoke"
//         process.env.DEBUG_ON="false";
//         const testEvent = {
//             "Records": [
//                 {
//                     "eventID": "8e6fabef236e9b05809c9ca4bc3655fe",
//                     "eventName": "INSERT",
//                     "eventVersion": "1.1",
//                     "eventSource": "aws:dynamodb",
//                     "awsRegion": "us-east-1",
//                     "dynamodb": {
//                         "ApproximateCreationDateTime": 1649974682,
//                         "Keys": {
//                             "id": {
//                                 "S": "f4f662c3-90d9-4f12-bcfe-97d593c2c309"
//                             }
//                         },
//                         "NewImage": {
//                             "decodedGameId": {
//                                 "N": "7"
//                             },
//                             "decodedPlayer": {
//                                 "S": "0xc4073dbea8a59c47d8f4e06939edc9fed868929c"
//                             },
//                             "__typename": {
//                                 "S": "PlayerJoinedPoolEventLog"
//                             },
//                             "metaTxOrigin": {
//                                 "S": "0xc4073dbea8a59c47d8f4e06939edc9fed868929c"
//                             },
//                             "raw": {
//                                 "M": {
//                                     "address": {
//                                         "S": "0x8d99795e74fdcbc1fed412874d04d3ac85808e2e"
//                                     },
//                                     "data": {
//                                         "S": "0x"
//                                     },
//                                     "topics": {
//                                         "L": [
//                                             {
//                                                 "S": "0xaf826dfc28710e789b457fdaf15b1d85f98319d34d1af1a3760eb0ef295912cd"
//                                             },
//                                             {
//                                                 "S": "0x0000000000000000000000000000000000000000000000000000000000000007"
//                                             },
//                                             {
//                                                 "S": "0x000000000000000000000000c4073dbea8a59c47d8f4e06939edc9fed868929c"
//                                             },
//                                             {
//                                                 "S": "0x0000000000000000000000000000000000000000000000000000000061727386"
//                                             }
//                                         ]
//                                     },
//                                     "meta": {
//                                         "M": {
//                                             "blockID": {
//                                                 "S": "0x009f4469677df20de9324157b653aa7e567008c4facc5370ad872e17ba381a4b"
//                                             },
//                                             "txOrigin": {
//                                                 "S": "0xc4073dbea8a59c47d8f4e06939edc9fed868929c"
//                                             },
//                                             "clauseIndex": {
//                                                 "N": "0"
//                                             },
//                                             "blockNumber": {
//                                                 "N": "10437737"
//                                             },
//                                             "txID": {
//                                                 "S": "0xa9a4be28fbef844bdf281adcdcf41046ca9f68cff51c04f2d3f741582f9bcd5e"
//                                             },
//                                             "blockTimestamp": {
//                                                 "N": "1634890630"
//                                             }
//                                         }
//                                     },
//                                     "decoded": {
//                                         "M": {
//                                             "0": {
//                                                 "S": "7"
//                                             },
//                                             "1": {
//                                                 "S": "0xc4073dbea8a59c47d8f4e06939edc9fed868929c"
//                                             },
//                                             "2": {
//                                                 "S": "1634890630"
//                                             },
//                                             "gameId": {
//                                                 "S": "7"
//                                             },
//                                             "dateTime": {
//                                                 "S": "1634890630"
//                                             },
//                                             "player": {
//                                                 "S": "0xc4073dbea8a59c47d8f4e06939edc9fed868929c"
//                                             }
//                                         }
//                                     }
//                                 }
//                             },
//                             "txID": {
//                                 "S": "0xa9a4be28fbef844bdf281adcdcf41046ca9f68cff51c04f2d3f741582f9bcd5e"
//                             },
//                             "createdAt": {
//                                 "S": "2022-04-14T22:18:02.240Z"
//                             },
//                             "metaBlockNumber": {
//                                 "N": "10437737"
//                             },
//                             "decodedDateTime": {
//                                 "S": "1634890630"
//                             },
//                             "metaBlockTimestamp": {
//                                 "N": "1634890630"
//                             },
//                             "metaClauseIndex": {
//                                 "N": "0"
//                             },
//                             "id": {
//                                 "S": "f4f662c3-90d9-4f12-bcfe-97d593c2c309"
//                             },
//                             "metaBlockID": {
//                                 "S": "0x009f4469677df20de9324157b653aa7e567008c4facc5370ad872e17ba381a4b"
//                             },
//                             "updatedAt": {
//                                 "S": "2022-04-14T22:18:02.240Z"
//                             }
//                         },
//                         "SequenceNumber": "19298000000000022490543353",
//                         "SizeBytes": 1274,
//                         "StreamViewType": "NEW_AND_OLD_IMAGES"
//                     },
//                     "eventSourceARN": "arn:aws:dynamodb:us-east-1:891289117461:table/PlayerJoinedPoolEventLog-plrkzmrkj5bmbjslf67bwgzcfu-dev/stream/2022-04-10T18:54:05.496"
//                 }
//             ]
//         };

//         const userWalletService = new UserWalletService();
//         const apiPoolAttributesService = new ApiPoolAttributesService();
//         const poolPlayerService = new PoolPlayerService();
//         const poolService = new PoolService();
//         const lotteryPoolAttributesService = new LotteryPoolAttributesService();

//         const secretsManager = new SecretsManager();

//         const secretsData = await secretsManager.getSecretValue("adexrio/wallets/mnemonics");
//         const secret = JSON.parse(secretsData.SecretString);

//         const blockchainLegacyService = new BlockChainService(secret);
//         await blockchainLegacyService.initializeWallet();

//         const orchestrator = new Orchestrator(
//             userWalletService, 
//             apiPoolAttributesService, 
//             poolPlayerService, 
//             poolService, 
//             lotteryPoolAttributesService,
//             blockchainLegacyService
//             );        

//         await orchestrator.handleEventRecord(testEvent.Records[0]);
//     });

// });

// test('test record processed', async () => {        

//         const testEvent =         
//         {
//             eventID: '22003da59f1af7cea1ef7d962716e947',
//             eventName: 'INSERT',
//             eventVersion: '1.1',
//             eventSource: 'aws:dynamodb',
//             awsRegion: 'us-east-1',
//             dynamodb: {
//                 "ApproximateCreationDateTime": 1650051176,
//                 "Keys": {
//                     "id": {
//                         "S": "506a916d-e43a-4b6a-b215-e09050425602"
//                     }
//                 },
//                 "NewImage": {
//                     "decodedGameId": {
//                         "N": "167"
//                     },
//                     "decodedPlayer": {
//                         "S": "0x496f9a6b548a46b9035bf91e0be1aa1d03cd1d38"
//                     },
//                     "__typename": {
//                         "S": "CreatePoolEventLog"
//                     },
//                     "metaTxOrigin": {
//                         "S": "0x496f9a6b548a46b9035bf91e0be1aa1d03cd1d38"
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
//                                         "S": "0x00000000000000000000000000000000000000000000000000000000000000a7"
//                                     },
//                                     {
//                                         "S": "0x000000000000000000000000496f9a6b548a46b9035bf91e0be1aa1d03cd1d38"
//                                     },
//                                     {
//                                         "S": "0x0000000000000000000000000000000000000000000000000000000061806d74"
//                                     }
//                                 ]
//                             },
//                             "meta": {
//                                 "M": {
//                                     "blockID": {
//                                         "S": "0x00a0a99819c6f8a7b63e49049fcb7236c4ec42505f74aee1f7fdda9e10120f65"
//                                     },
//                                     "txOrigin": {
//                                         "S": "0x496f9a6b548a46b9035bf91e0be1aa1d03cd1d38"
//                                     },
//                                     "clauseIndex": {
//                                         "N": "0"
//                                     },
//                                     "blockNumber": {
//                                         "N": "10529176"
//                                     },
//                                     "txID": {
//                                         "S": "0xecc8a3467038e6593ea70e835348f4456813b9b43be143708682cdbe3cbd314a"
//                                     },
//                                     "blockTimestamp": {
//                                         "N": "1635806580"
//                                     }
//                                 }
//                             },
//                             "decoded": {
//                                 "M": {
//                                     "0": {
//                                         "S": "167"
//                                     },
//                                     "1": {
//                                         "S": "0x496f9a6b548a46b9035bf91e0be1aa1d03cd1d38"
//                                     },
//                                     "2": {
//                                         "S": "1635806580"
//                                     },
//                                     "gameId": {
//                                         "S": "167"
//                                     },
//                                     "dateTime": {
//                                         "S": "1635806580"
//                                     },
//                                     "player": {
//                                         "S": "0x496f9a6b548a46b9035bf91e0be1aa1d03cd1d38"
//                                     }
//                                 }
//                             }
//                         }
//                     },
//                     "txID": {
//                         "S": "0xecc8a3467038e6593ea70e835348f4456813b9b43be143708682cdbe3cbd314a"
//                     },
//                     "createdAt": {
//                         "S": "2022-04-15T19:32:56.354Z"
//                     },
//                     "metaBlockNumber": {
//                         "N": "10529176"
//                     },
//                     "decodedDateTime": {
//                         "S": "1635806580"
//                     },
//                     "metaBlockTimestamp": {
//                         "N": "1635806580"
//                     },
//                     "metaClauseIndex": {
//                         "N": "0"
//                     },
//                     "id": {
//                         "S": "506a916d-e43a-4b6a-b215-e09050425602"
//                     },
//                     "metaBlockID": {
//                         "S": "0x00a0a99819c6f8a7b63e49049fcb7236c4ec42505f74aee1f7fdda9e10120f65"
//                     },
//                     "updatedAt": {
//                         "S": "2022-04-15T19:32:56.354Z"
//                     }
//                 },
//                 "SequenceNumber": "23875300000000031210120582",
//                 "SizeBytes": 1273,
//                 "StreamViewType": "NEW_AND_OLD_IMAGES"
//             },
//             eventSourceARN: 'arn:aws:dynamodb:us-east-1:891289117461:table/CreatePoolEventLog-plrkzmrkj5bmbjslf67bwgzcfu-dev/stream/2022-04-10T18:54:05.834'
//           }
        
        

//         process.env.NODE_ENV = 'prod';
//         process.env.VECHAIN_API_NODE="https://vethor-node.vechain.com"
//         process.env.RECORD_TYPE="test"
//         process.env.RANDOM_ORG_API_ENDPOINT="https://api.random.org/json-rpc/2/invoke"
//         process.env.DEBUG_ON="false";

//         const userWalletService = new UserWalletService();
//         const apiPoolAttributesService = new ApiPoolAttributesService();
//         const poolPlayerService = new PoolPlayerService();
//         const poolService = new PoolService();
//         const lotteryPoolAttributesService = new LotteryPoolAttributesService();

//         const secretsManager = new SecretsManager();

//         const secretsData = await secretsManager.getSecretValue("adexrio/wallets/mnemonics");
//         const secret = JSON.parse(secretsData.SecretString);

//         const blockchainLegacyService = new BlockChainService(secret);
//         await blockchainLegacyService.initializeWallet();
        
//         const service = new CreatePoolService(userWalletService, apiPoolAttributesService, poolPlayerService, poolService, lotteryPoolAttributesService, blockchainLegacyService);
        
//         const result = await service.handleEventRecord(testEvent);
                
//         console.log('result of searchPoolByPoolId', result);        
//     });

// });
