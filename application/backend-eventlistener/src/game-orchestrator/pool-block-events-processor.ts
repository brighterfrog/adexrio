import { GameAwaitingLotteryEvent } from "../models/all-models";
import { BlockChainService } from "../blockchain/blockchain-service";

export class PoolBlockEventsProcessorService {

    blockChainService: BlockChainService

    constructor(blockChainService: BlockChainService) {
        this.blockChainService = blockChainService;
        console.log('GameProcessLimboService');


        (async () => {
            const ticker = this.blockChainService.walletService.connex.thor.ticker()
            for (;;) {
                await ticker.next()
                // do something here
                this.processAllGamesInTheAwaitingLotteryState();

                //fetch last block number without failure
                //fetch all completed game events
                //build CompletedPool
                //funnel to Pool Summary Aggregate from dynamodb
            }
        })
    }

    processAllGamesInTheAwaitingLotteryState(): void {

        this.blockChainService.getGamesAwaitingGameCriteriaMet().then((list) => {
            console.log(`PROCESS ALL GAMES IN THE AWAITING LOTTERY STATE ${list.gameIds.length}`)

            for (let i = 0; i < list.gameIds.length; i++) {

                this.blockChainService.eventListener.gameAwaitingLotteryEvent.next(
                    new GameAwaitingLotteryEvent(
                        list.gameIds[i],
                        list.gameStatus[i],
                        Date.now()
                    )
                );
            }

        });
    }
}