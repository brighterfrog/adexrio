import { ApiPoolAttributesService } from "./services/core/api-pool-attributes-service";
import { PoolPlayerService } from "./services/core/pool-player-service";
import { PoolService } from "./services/core/pool-service";
import { UserWalletService } from "./services/core/user-wallet-service";
import { Orchestrator } from "./services/orchestrator";

async function lambdaHandler(event, context) {  
    console.log(JSON.stringify(event, null, 2));
    
    const userWalletService = new UserWalletService();
    const apiPoolAttributesService = new ApiPoolAttributesService();
    const poolPlayerService = new PoolPlayerService();
    const poolService = new PoolService();

    const orchestrator = new Orchestrator(userWalletService, apiPoolAttributesService, poolPlayerService, poolService);
    
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