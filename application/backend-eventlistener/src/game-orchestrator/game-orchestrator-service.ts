import { BlockChainService } from "../blockchain/blockchain-service";
import { BlockchainEventListener } from "../blockchain/blockchain-event-listener";
import {
    BlockchainResultGameDetails,
    GameEvent, PerformLotteryFinalResult, RandomOrgSecretDetails, SelectGameWinnerResult, SetGameWinnerRequest, WalletSecretDetails
} from "../models/all-models";
import { GameNoAuditService } from "./game-no-audit-service";
import { RandomDrawRequestResult } from "../random_org/random-org-service";
import { GameAuditEnabledService } from "./game-audit-enabled-service";
import { request } from "http";
import { GameSummaryApiService } from "./game-summary-api-service";
import { APIService } from "../API";
import { GameProcessLimboService } from "./game-process-limbo-service";
import { GlobalErrorService } from "../globals/global-error-service";

export class GameOrchestratorService {
    
    blockChainService: BlockChainService;
    gameFactory: GameProcessorFactoryService;
    gameSummaryApiService: GameSummaryApiService;
    gameProcessLimboService: GameProcessLimboService;
    apiService: APIService;
    errorService: GlobalErrorService;
            
    constructor(private walletSecretDetails: WalletSecretDetails, private randomOrgSecretDetails: RandomOrgSecretDetails, apiService: APIService, errorService: GlobalErrorService) {        
        this.blockChainService = new BlockChainService(this.walletSecretDetails);
        this.gameFactory = new GameProcessorFactoryService(errorService);
        this.apiService = apiService;
        this.gameSummaryApiService = new GameSummaryApiService(
            this.apiService,
            this.blockChainService
        );
        this.errorService = errorService;
    }   

    registerGameProcessLimboService(): void {
        this.gameProcessLimboService = new GameProcessLimboService(this.blockChainService);
        this.gameProcessLimboService.processAllGamesInTheAwaitingLotteryState();
    }

    registerGameSummaryApiToEvents(): void {
        this.blockChainService.eventListener.gameCompletedEvent.subscribe({
            next: (event) => {
                console.log('game-summary-api-service process completed event');
                this.gameSummaryApiService.processCompletedGameEvent(event);
            },
            error: (err) => {
                console.log(err);
                this.errorService.logError(err);
            }
        })
    }

    registerBlockchainEventSubscriptions(): void {
        this.blockChainService.eventListener.gameCreatedEvent.subscribe({
            next: (item) => {

                //gameId
                //get game details - is game audit, get all player wallets
                //log winner
                console.log('gameCreatedEvent subscribe');
                console.log(item);

            },
            error: (err) => {
                console.log(err);
                this.errorService.logError(err);
            }
        });

        this.blockChainService.eventListener.gameAwaitingLotteryEvent.subscribe({
            next: (item) => {

                console.log('gameAwaitingLotteryEvent subscriber');

                this.gameFactory
                    .build(item, this.blockChainService)
                    .then((game) => {
                        console.log('before performLotteryForGame with game of');
                        console.log(game);
                        return this.performLotteryForGame(game);
                    }).then((lotteryResult) => {
                        console.log('done with perform lottery, result:');
                        console.log(lotteryResult);
                    }).catch((err) => {
                        console.log(`gameAwaitingLotteryEvent subscriber failed to build game ${JSON.stringify(item)} with error ${err}`);
                        this.errorService.logError(err);
                    });

            },
            error: (err) => {
                this.errorService.logError(err);
            }
        });

    }


    performLotteryForGame(game: BlockchainResultGameDetails): Promise<PerformLotteryFinalResult> {

        console.log('performLotteryForGame has a game value of');
        console.log(game);

        const resultPromise = new Promise<PerformLotteryFinalResult>(
            (resolve, reject) => {

                this.selectGameWinner(game)
                    .then((selectGameWinnerResult) => {

                        console.log('before setting winner on blockchain');

                        const setWinnerRequest = new SetGameWinnerRequest(game,
                            selectGameWinnerResult.winner,
                            selectGameWinnerResult?.randomOrgResult?.result?.drawId ?? 0,
                            game.gameResult.decoded.gcsIsAuditEnabled
                        );
                        this.setWinnerOnBlockchain(setWinnerRequest,
                            this.blockChainService
                        ).then((transactionResult) => {
                            console.log('setWinnerOnBlockchain gameCompletedEvent');
                            console.log(transactionResult);
                            console.log(game);
                            console.log(selectGameWinnerResult);
                            resolve(
                                new PerformLotteryFinalResult(
                                    game,
                                    selectGameWinnerResult,
                                    transactionResult)
                            );

                        });

                    }).catch((err) => {
                        const errorMsg = `selectGameWinner exception: ${err} with game ${JSON.stringify(game)}`;
                        console.log(errorMsg);
                        this.errorService.logError(err);
                        reject(`selectGameWinner exception: ${err} with game ${JSON.stringify(game)}`)
                    });
            });

        return resultPromise;

    }

    setWinnerOnBlockchain(        
        setGameWinnerRequest: SetGameWinnerRequest,
        blockchainService: BlockChainService): Promise<Connex.Vendor.TxResponse> {

        const resultPromise = new Promise<Connex.Vendor.TxResponse>(
            (resolve, reject) => {
                
                switch (setGameWinnerRequest.isAuditGame) {
                    case true: {

                        blockchainService.setGameWinnerAudit(setGameWinnerRequest)
                            .then((trx) => {
                                console.log(trx);
                                resolve(trx);
                            }).catch((err) => {
                                console.log(err);
                                this.errorService.logError(err);
                                reject(err);
                            });
                        break;

                    }
                    case false: {

                        console.log('setWinnerOnBlockchain: audit enabled false')
                        blockchainService.setGameWinnerNoAudit(setGameWinnerRequest)
                            .then((trx) => {
                                console.log(trx);
                                resolve(trx);
                            }).catch((err) => {
                                console.log(err);
                                this.errorService.logError(err);
                                reject(err);
                            });
                        break;

                    }

                }

            });

        return resultPromise;

    }

    selectGameWinner(game: BlockchainResultGameDetails): Promise<SelectGameWinnerResult> {
        
        console.log('selectGameWinner before logging game');
        console.log(game);
        console.log('logging game.gameResult.gcsIsAuditEnabled');
        console.log(game.gameResult.decoded.gcsIsAuditEnabled);

        const resultPromise = new Promise<SelectGameWinnerResult>(
            (resolve, reject) => {

                console.log('inner promise area game')
                console.log(game);
                switch (game.gameResult.decoded.gcsIsAuditEnabled) {
                    case true: {

                        const service = new GameAuditEnabledService(this.randomOrgSecretDetails);
                            service.selectWinner(game).then((winner) => {
                                console.log(winner);
                                resolve(winner);
                            }).catch((err) => {
                                this.errorService.logError(err);
                                reject(err);
                            }).catch((err) => {
                                console.log(err);
                                this.errorService.logError(err);
                            });
                                              

                        break;
                        
                    }

                    case false: {

                        console.log('FALSE CASE');
                        const service = new GameNoAuditService();
                        service.selectWinner(game).then((winner) => {
                            console.log('selected winner');
                            console.log(winner);

                            resolve(winner);
                        }).catch((err) => {
                            this.errorService.logError(err);
                            reject(err);
                        }).catch((err) => {
                            this.errorService.logError(err);
                            console.log(err);
                        });;

                        break;
                    }

                }

            });

        return resultPromise;
    }

}

export class GameProcessorFactoryService {

    errorService: GlobalErrorService;

    constructor(errorService: GlobalErrorService) {
        this.errorService = errorService;
    }


    build(gameEvent: GameEvent, blockChainService: BlockChainService): Promise<BlockchainResultGameDetails> {

        const resultPromise = new Promise<BlockchainResultGameDetails>(
            (resolve, reject) => {

                blockChainService
                    .getGameById(gameEvent.gameId)
                    .then((gameResult: Connex.VM.Output & Connex.Thor.Account.WithDecoded) => {

                        blockChainService
                            .getEligiblePlayersForLotteryByGameId(gameEvent.gameId)
                            .catch((err) => {
                                console.log('getEligiblePlayersForLotteryByGameId exception')
                                console.log(err);
                                this.errorService.logError(err);
                                reject(err);
                            })
                            .then((playerResult: Connex.VM.Output & Connex.Thor.Account.WithDecoded) => {

                                if (playerResult.reverted) {
                                    reject("getEligiblePlayersForLotteryByGameId Transaction Reverted");
                                }
                                const gameDetails = new BlockchainResultGameDetails(gameResult, playerResult);
                                console.log('build() BlockchainResultGameDetails are');
                                console.log(gameDetails);
                                resolve(gameDetails);

                            }).catch((err) => {
                                reject(`getEligiblePlayersForLotteryByGameId ${gameEvent.gameId} failed with error ${err}`);
                            });

                    }).catch((err) => {
                        reject(`getGameById ${gameEvent.gameId} failed with error ${err}`);
                    });

            });

        return resultPromise;
    }

}
