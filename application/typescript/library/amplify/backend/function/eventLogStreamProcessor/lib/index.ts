import { ApiPoolAttributesService } from "./services/core/api-pool-attributes-service";
import { PoolPlayerService } from "./services/core/pool-player-service";
import { PoolService } from "./services/core/pool-service";
import { UserWalletService } from "./services/core/user-wallet-service";
import { BlockChainService } from "./library/backend/blockchain/blockchain-service";
import { SecretsManager } from "./library/backend/aws-services/secrets-manager";
import { Orchestrator } from "./services/orchestrator";
import { LotteryPoolAttributesService } from "./services/core/lottery-pool-attributes-service";

async function lambdaHandler(event, context) {  
    console.log(JSON.stringify(event, null, 4));

    console.log(process.env.NODE_ENV);
    console.log(process.env.VECHAIN_API_NODE);
    console.log(process.env.RECORD_TYPE);
    console.log(process.env.RANDOM_ORG_API_ENDPOINT);
    console.log(process.env.DEBUG_ON);  
    
    const userWalletService = new UserWalletService();
    const apiPoolAttributesService = new ApiPoolAttributesService();
    const poolPlayerService = new PoolPlayerService();
    const poolService = new PoolService();
    const lotteryPoolAttributesService = new LotteryPoolAttributesService();
    const secretsManager = new SecretsManager();
    
    const secretsData = await secretsManager.getSecretValue("adexrio/wallets/mnemonics");
    const secret = JSON.parse(secretsData.SecretString);

    const legacyBlockchainService = new BlockChainService(secret);
    await legacyBlockchainService.initializeWallet();

    const orchestrator = new Orchestrator(
      userWalletService, 
      apiPoolAttributesService, 
      poolPlayerService, 
      poolService, 
      lotteryPoolAttributesService,
      legacyBlockchainService
      );
    
    for (const record of event.Records) {  
      console.log(record.eventID);
      console.log(record.eventName);
      console.log(record.eventSourceARN) 
      console.log('DynamoDB Record: %j', record.dynamodb);
      await orchestrator.handleEventRecord(record);       
    };
    
    console.log('EventLogStreamProcessor done');
};


exports.handler = lambdaHandler;

