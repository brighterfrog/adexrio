import { BlockChainService } from "../blockchain/blockchain-service";
import {
    GameEvent, SelectGameWinnerResult, BlockchainResultGameDetails
} from "../models/all-models";
import { IGameService } from "./game-service-interface";

export class GameNoAuditService implements IGameService {
    selectWinner(game: BlockchainResultGameDetails): Promise<SelectGameWinnerResult> {

        console.log('selectWinner game');
        console.log(game);
        const resultPromise = new Promise<SelectGameWinnerResult>(
            (resolve, reject) => {
                console.log('INNER PROMISE');
                console.log(game);
                console.log(game.playerResult.decoded.playerWallets);
                console.log(game.playerResult.decoded.playerWallets.length);
                if (game.playerResult.decoded.playerWallets.length > 0) {
                    console.log('RESOLVING WINNER');
                    console.log(game.playerResult);

                    const winner = this.getRandomAddress(game.playerResult.decoded.playerWallets);
                    const selectGameWinnerResult = new SelectGameWinnerResult(
                        game.gameResult.decoded.gcsIsAuditEnabled,
                        winner,
                        null
                    );
                    resolve(selectGameWinnerResult);
                }
                else {
                    reject('No player wallets found in game.playerResult.playerWallets');
                }
            });

        return resultPromise;
    }

    getRandomAddress(playerResultWallets: string[]): string {
        return playerResultWallets[
            Math.floor(
                Math.random() * playerResultWallets.length
            )
        ];
    }

}