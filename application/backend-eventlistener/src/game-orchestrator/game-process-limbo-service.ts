import { GameAwaitingLotteryEvent } from "../models/all-models";
import { BlockChainService } from "../blockchain/blockchain-service";

export class GameProcessLimboService {

    blockChainService: BlockChainService

    constructor(blockChainService: BlockChainService) {
        this.blockChainService = blockChainService;
        console.log('GameProcessLimboService');
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