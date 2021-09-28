import { RandomDrawGame, RandomDrawRequestResult, RandomOrgApiService } from "../random_org/random-org-service";
import { BlockChainService } from "../blockchain/blockchain-service";
import {
    GameEvent, SelectGameWinnerResult
} from "../models/all-models";
import { BlockchainResultGameDetails } from "../models/all-models";
import { IGameService } from "./game-service-interface";

export class GameAuditEnabledService implements IGameService {

    randomOrgService: RandomOrgApiService;

    constructor()
    {
        this.randomOrgService = new RandomOrgApiService();
    }

    getRandomOrgGameFromBlockchainResultGameDetails(game: BlockchainResultGameDetails): RandomDrawGame {
        return new RandomDrawGame(game.gameResult.decoded.gameId,
            `adexr.io game ${game.gameResult.decoded.gameId}`,
            game.playerResult.decoded.playerWallets
        );
    }

    selectWinner(game: BlockchainResultGameDetails): Promise<SelectGameWinnerResult> {

        const resultPromise = new Promise<SelectGameWinnerResult>(
            (resolve, reject) => {
                console.log('selectWinner game');

                const randomDrawGame = this.getRandomOrgGameFromBlockchainResultGameDetails(game);

                console.log('Random Draw Game')
                console.log(randomDrawGame);

                this.randomOrgService.getDrawRequestResultForGame(randomDrawGame)
                    .then((drawResult) => {

                        console.log(drawResult);

                        const selectGameWinnerResult =
                            new SelectGameWinnerResult(
                                game.gameResult.decoded.gcsIsAuditEnabled,
                                drawResult.result.winners[0],
                                drawResult)

                        resolve(selectGameWinnerResult);

                    }).catch((err) => {

                        console.log(err);
                        reject(err);
                    });
            });

        return resultPromise;
    }

}