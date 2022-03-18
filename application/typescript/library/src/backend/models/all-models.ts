import { RandomDrawRequestResult } from "../random_org/random-org-service";

export interface EventObject<T> {
    [index: string]: T;
}

export interface ContractEvent {
    key: string;
    abi: any;
}

export enum GameStatus {
    COMPLETE,
    AWAITING_GAME_CRITERIA_MET,
    CRITERIA_MET_AWAITING_LOTTERY
}
export class GameCreatedEvent {
    gameId: number;
    player: string;
    dateTime: number;

    constructor(gameId: number, player: string, dateTime: number) {
        this.gameId = gameId;
        this.player = player;
        this.dateTime = dateTime;
    }
}

export interface RandomOrgSecretDetails {
    login: string;
    password: string;
}
export interface WalletSecretDetails {
    "development-network": WalletSecretDetailsNetwork;
    "test-network":        WalletSecretDetailsNetwork;
    "main-network":        WalletSecretDetailsNetwork;
}
export interface WalletSecretDetailsNetwork {
    "contract-owner":        WalletInfo;
    "donation-wallet-owner": WalletInfo;
}
export interface WalletInfo {
    words:    string;
    password: string;
}


export interface DecodedGameEntries {
    gameIds: number[];
    gameStatus: number[];
    gameTotalWagers: number[];
    gameWinningPayout?: number[];
    gameWinnerAddress?: string[];
    gameTotalEligiblePlayers: number[];
    gcsMinGamePlayers: number[];
    gcsIsAuditEnabled: boolean[];
    gcsGameBetSize: number[];
}

export interface DecodedGameEntity {
    gameId: number;
    gameStatus: string;
    gameTotalWagers: string;
    gameWinningPayout?: string;
    gameWinnerAddress?: string;
    gameTotalEligiblePlayers: string;
    gcsMinGamePlayers: string;
    gcsGameBetSize: string;
    gcsIsAuditEnabled: boolean;
}

export class GameEvent {

    gameId: number;
    status?: GameStatus;
    dateTime?: number;

    constructor(gameId: number, status?: GameStatus, dateTime?: number) {
        this.gameId = gameId;
        this.status = status;
        this.dateTime = dateTime;
    }
}

export class GameAwaitingLotteryEvent {

    gameId: number;
    status?: GameStatus;
    dateTime?: number;

    constructor(gameId: number, status?: GameStatus, dateTime?: number) {
        this.gameId = gameId;
        this.status = status;
        this.dateTime = dateTime;
    }
}


export class GameCompletedEvent {
    gameId: number;
    winningPlayer: string;
    dateTime: number;
    winningPayout: number;
    transactionId: string;
    auditRecordDrawId: number;

    constructor(
        gameId: number,
        player: string,
        dateTime: number,
        winningPayout: number,
        transactionId: string,
        auditRecordDrawId: number
    ) {
        this.gameId = gameId;
        this.winningPlayer = player;
        this.dateTime = dateTime;
        this.winningPayout = winningPayout;
        this.transactionId = transactionId;
        this.auditRecordDrawId = auditRecordDrawId;
    }
}
export class WrappedGameCompletedDetails {
    event: GameCompletedEvent;
    decodedGame: DecodedGameEntity

    constructor(event: GameCompletedEvent, decodedGame: DecodedGameEntity) {
        this.event = event;
        this.decodedGame = decodedGame;
    }
}

export class BlockchainResultGameDetails {

    gameResult: Connex.VM.Output & Connex.Thor.Account.WithDecoded;
    playerResult: Connex.VM.Output & Connex.Thor.Account.WithDecoded;

    constructor(
        gameResult: Connex.VM.Output & Connex.Thor.Account.WithDecoded,
        playerResult: Connex.VM.Output & Connex.Thor.Account.WithDecoded
    ) {
        this.gameResult = gameResult;
        this.playerResult = playerResult;
    }
}

export class SelectGameWinnerResult {
    isAuditGame: boolean;
    winner: string;
    randomOrgResult: RandomDrawRequestResult

    constructor(isAuditGame: boolean, winner: string, randomOrgResult: RandomDrawRequestResult) {
        this.isAuditGame = isAuditGame;
        this.winner = winner;
        this.randomOrgResult = randomOrgResult;
    }
}
export class SetGameWinnerRequest {
    game: BlockchainResultGameDetails;
    winner: string;
    auditRecordDrawId: number;
    isAuditGame: boolean;

    constructor(
        game: BlockchainResultGameDetails,
        winner: string,
        auditRecordDrawId: number,
        isAuditGame: boolean) {

        this.game = game;
        this.winner = winner;
        this.auditRecordDrawId = auditRecordDrawId;
        this.isAuditGame = isAuditGame;
    }
}

export class PerformLotteryFinalResult {

    game: BlockchainResultGameDetails;
    selectGameWinnerResult: SelectGameWinnerResult;
    transactionResponse: Connex.Vendor.TxResponse;

    constructor(
        game: BlockchainResultGameDetails,
        selectGameWinnerResult: SelectGameWinnerResult,
        transactionResponse: Connex.Vendor.TxResponse
    ) {
        this.game = game;
        this.selectGameWinnerResult = selectGameWinnerResult;
        this.transactionResponse = transactionResponse;
    }
}