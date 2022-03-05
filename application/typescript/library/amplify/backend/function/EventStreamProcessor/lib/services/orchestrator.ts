import { CreatePoolService } from './event-log-processors/create-pool-service';
import { CreatePoolEventLogV2 } from 'lib/codegen/API';
import { UserWalletService } from './core/user-wallet-service';
import { ApiPoolAttributesService } from './core/api-pool-attributes-service';
import { PoolPlayerService } from './core/pool-player-service';
import { PoolService } from './core/pool-service';
import { BlockChainService } from './legacy_contract_v1_helpers/backend/blockchain/blockchain-service';

export class Orchestrator {
    
    eventMap: Map<string, IEventLogProcessor>;
    createPoolService: CreatePoolService;
              
    constructor(
        userWalletService: UserWalletService,
        apiPoolAttributesService: ApiPoolAttributesService,
        poolPlayerService: PoolPlayerService,
        poolService: PoolService,
        legacyBlockchainService: BlockChainService
        ) {
        const self = this;
        
        this.createPoolService = new CreatePoolService(
            userWalletService, 
            apiPoolAttributesService, 
            poolPlayerService, 
            poolService, 
            legacyBlockchainService);
                
        this.eventMap = new Map([
            ['CreatePoolEventLogV2', self.createPoolService as IEventLogProcessor]            
          ]);
    }
    async handleEventRecord(eventRecord) {
        const self = this;                           
        const service = self.eventMap.get(self._getTableNameFromArn(eventRecord.eventSourceARN));
        console.log('orchestrator handleEventRecord self.eventMap.get service', service);

        if(eventRecord.eventName === 'INSERT') {
            await service.handleEventRecord(eventRecord);
        }
        else {
            console.log(`Not a new record entry event type. Event type is ${eventRecord.eventName}`)
        }        
    }

    async test() {
        const test = await this.createPoolService.userWalletService.searchUserWalletByWalletAddress({id: { eq: '123'}});
        return test;
    }

    _getTableNameFromArn(arn) {
        return arn.split('table/')[1].split('-')[0];
      }           
}