import { CreatePoolService } from './event-log-processors/create-pool-service';
import { CreatePoolEventLog } from 'lib/codegen/API';
import { UserWalletService } from './core/user-wallet-service';
import { ApiPoolAttributesService } from './core/api-pool-attributes-service';
import { PoolPlayerService } from './core/pool-player-service';
import { PoolService } from './core/pool-service';
import { BlockChainService } from './legacy_contract_v1_helpers/backend/blockchain/blockchain-service';
import { LotteryPoolAttributesService } from './core/lottery-pool-attributes-service';
import { PlayerJoinedPoolService } from './event-log-processors/player-joined-pool-service';
import { PlayerLeftPoolService } from './event-log-processors/player-left-pool-service';
import { PoolCompletedService } from './event-log-processors/pool-completed';

export class Orchestrator {

    eventMap: Map<string, IEventLogProcessor>;

    createPoolService: CreatePoolService;
    createPlayerJoinedPoolService: PlayerJoinedPoolService;
    createPlayerLeftPoolService: PlayerLeftPoolService;
    createPoolCompletedService: PoolCompletedService;

    // createPlayerAwaitingPoolService: PlayerAwaitingExecutionPoolService;

    constructor(
        userWalletService: UserWalletService,
        apiPoolAttributesService: ApiPoolAttributesService,
        poolPlayerService: PoolPlayerService,
        poolService: PoolService,
        lotteryPoolAttributesService: LotteryPoolAttributesService,
        legacyBlockchainService: BlockChainService,
    ) {
        const self = this;

        self.createPoolService = new CreatePoolService(
            userWalletService,
            apiPoolAttributesService,
            poolPlayerService,
            poolService,
            lotteryPoolAttributesService,
            legacyBlockchainService);

            self.createPlayerJoinedPoolService = new PlayerJoinedPoolService(
            userWalletService,
            apiPoolAttributesService,
            poolPlayerService,
            poolService,
            legacyBlockchainService);

            self.createPlayerLeftPoolService = new PlayerLeftPoolService(
            userWalletService,
            apiPoolAttributesService,
            poolPlayerService,
            poolService,
            legacyBlockchainService);

            self.createPoolCompletedService = new PoolCompletedService(
            userWalletService,
            apiPoolAttributesService,
            poolPlayerService,
            poolService,
            lotteryPoolAttributesService,
            legacyBlockchainService);

            self.eventMap = new Map([
            ['CreatePoolEventLog', self.createPoolService as IEventLogProcessor],
            ['PlayerJoinedPoolEventLog', self.createPlayerJoinedPoolService as IEventLogProcessor],
            ['PlayerLeftPoolEventLog', self.createPlayerLeftPoolService as IEventLogProcessor],
            ['PoolCompletedEventLog', self.createPoolCompletedService as IEventLogProcessor]
        ]);
    }
    async handleEventRecord(eventRecord): Promise<void> {
        const self = this;
        const service = self.eventMap.get(self._getTableNameFromArn(eventRecord.eventSourceARN));
        console.log('orchestrator handleEventRecord self.eventMap.get service', service);

        if (eventRecord.eventName === 'INSERT') {
            await service.handleEventRecord(eventRecord);
        }
        else {
            console.log(`Not a new record entry event type. Event type is ${eventRecord.eventName}`)
        }
    }

    _getTableNameFromArn(arn) {
        return arn.split('table/')[1].split('-')[0];
    }
}