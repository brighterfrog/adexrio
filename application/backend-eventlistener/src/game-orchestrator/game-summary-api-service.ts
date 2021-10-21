import { BlockChainService } from "../blockchain/blockchain-service";
import { DecodedGameEntity, GameCompletedEvent, GameEvent, WrappedGameCompletedDetails } from "../models/all-models";
import { APIService, CreateGamesSummaryInput, CreateGamesSummaryMutation, GetGamesSummaryQuery, ListGamesSummarysQuery } from "../API";
import { wrap } from "module";
import { resolve } from "path";

export class GameSummaryApiService {

    awsAPIService: APIService;
    blockchainService: BlockChainService;

    constructor(
        awsAPIService: APIService,
        blockchainService: BlockChainService) {

        this.awsAPIService = awsAPIService;
        this.blockchainService = blockchainService;
    }

    private createGameSummaryInput(input: CreateGamesSummaryInput): Promise<CreateGamesSummaryMutation> {
        return this.awsAPIService.CreateGamesSummary(input);
    }
    private updateGameSummaryInput(input: CreateGamesSummaryInput): Promise<CreateGamesSummaryMutation> {
        return this.awsAPIService.UpdateGamesSummary(input);
    }

    private getSingleGameEntryToUpdate(): Promise<GetGamesSummaryQuery> {

        console.log('getSingleGameEntryToUpdate');

        const resultPromise = new Promise<GetGamesSummaryQuery>(
            (resolve, reject) => {

                this.awsAPIService.GetGamesSummary(0).then((query) => {
                    if (query) {
                        resolve(query);
                    }
                    else {
                        console.log('no existing ListGamesSummarysfound ');
                        resolve(null);
                    }
                }).catch((err) => {
                    console.log(`Exception in getSingleGameEntryToUpdate: ${err}`);
                    reject(err);
                });

            });

        return resultPromise;
    }

    private updateGamesSummaryDetail(
        wrappedGameDetails: WrappedGameCompletedDetails): Promise<CreateGamesSummaryMutation> {

        const resultPromise = new Promise<CreateGamesSummaryMutation>(
            (resolve, reject) => {

                this.getSingleGameEntryToUpdate()
                    .then((query) => {
                        if (!query) {

                            console.log('No existing entry found');
                            this.createGameSummaryInput({
                                id: 0,
                                highestPayout: this.convertWeiToVET(wrappedGameDetails.decodedGame.gameWinningPayout),
                                totalCompletedGames: 1,
                                totalPayouts: this.convertWeiToVET(wrappedGameDetails.decodedGame.gameWinningPayout),
                                totalUniquePlayers: Number(wrappedGameDetails.decodedGame.gameTotalEligiblePlayers)
                            }).then((complete) => {
                                console.log('Create Game Summary Complete');
                                resolve(complete);
                            }).catch((err) => {
                                reject(err);
                            });

                        }
                        else {

                            console.log('Existing entry found');
                            const updatedGameEntry = this.buildUpdateGameSummaryInput(query, wrappedGameDetails) as CreateGamesSummaryMutation;

                            console.log('updated game entry');
                            console.log(updatedGameEntry);

                            this.updateGameSummaryInput(updatedGameEntry)
                                .then((complete) => {
                                    console.log('Update Game Summary Complete');
                                    resolve(complete);
                                }).catch((err) => {
                                    reject(err);
                                });
                        }
                    }).catch((err) => {
                        reject(err);
                    });

            });

        return resultPromise;
    }
    private buildUpdateGameSummaryInput(
        query: GetGamesSummaryQuery,
        wrappedGameDetails: WrappedGameCompletedDetails): CreateGamesSummaryInput {

        console.log('buildUpdateGameSummaryInput');
        console.log(query);
        console.log(wrappedGameDetails);

        console.log('new number should be')
        console.log(Number(query.totalPayouts) +
            this.convertWeiToVET(Number(wrappedGameDetails.event.winningPayout)));

        const buildUpdatedGameSummary = {
            id: 0,
            highestPayout: this.getHighestPayoutFromNewAndExisting(
                query,
                wrappedGameDetails
            ),
            totalCompletedGames: query.totalCompletedGames + 1,
            totalUniquePlayers: Number(query.totalUniquePlayers) + Number(wrappedGameDetails.decodedGame.gameTotalEligiblePlayers),
            totalPayouts:
                Number(query.totalPayouts) +
                this.convertWeiToVET(Number(wrappedGameDetails.event.winningPayout))

        };
        return buildUpdatedGameSummary;
    }


    private getHighestPayoutFromNewAndExisting(
        query: GetGamesSummaryQuery,
        wrappedGameDetails: WrappedGameCompletedDetails): number {

        const convertedEventWinningPayout = this.convertWeiToVET(wrappedGameDetails.event.winningPayout);

        if (query.highestPayout <= convertedEventWinningPayout) {
            return convertedEventWinningPayout;
        }
        else {
            return query.highestPayout;
        }
    }

    private convertWeiToVET(value: number): number {
        return value / 1e18;
    }

    private convertVETtoWei(amount: number): string {
        return '0x' + (amount * 1e18).toString(16);
    }


    processCompletedGameEvent(gameCompletedEvent: GameCompletedEvent): Promise<CreateGamesSummaryMutation> {
        return this.blockchainService
            .getGameById(gameCompletedEvent.gameId)
            .then((game) => {
                console.log('getGameByGameId');
                console.log(game);

                return new WrappedGameCompletedDetails(
                    gameCompletedEvent,
                    game.decoded as DecodedGameEntity
                );

            })
            .then((wrappedGameDetails) => {
                console.log('updating game summary detail');
                return this.updateGamesSummaryDetail(wrappedGameDetails);
            });

    }

    // Test(): Promise<CreateGamesSummaryMutation> {
    //     this.awsAPIService.ListGamesSummarys(null, 1).then((existingItems) => {
    //         if (existingItems.items.length > 0) {

    //             const itemToUpdate = existingItems.items[0];

    //             itemToUpdate.highestPayout += 50;

    //             this.awsAPIService.UpdateGamesSummary(
    //                 itemToUpdate
    //             );

    //         }
    //         else {
    //             return this.awsAPIService.CreateGamesSummary({
    //             totalCompletedGames: 0,
    //             totalPayouts: 0,
    //             totalUniquePlayers: 0,
    //             highestPayout: 0
    //         });
    //         }
    //     });

    //     return null;

    // }

}