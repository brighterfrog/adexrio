export interface EventObject<T> {
    [index: string]: T;
}
export interface ContractEvent {
    key: string;
    abi: any;
}

export class GameEntry extends Array {
    id!: number;
    status!: string;
    gameTotalEligiblePlayers!: number;
    totalGameWagers!: number;
    gameWinningPayout?: number;
    gameWinnerAddress?: string;
    minimumGamePlayers!: number;
    gameBetSize!: number;
    isAuditEnabled!: boolean;
    transactionId: number;
    auditRecordDrawId: number;
    hasPlayerLeftGameEvent: boolean;
}
export interface DecodedGameEntity {
    gameId: number;
    gameStatus: number;
    gameTotalWagers: number;
    gameWinningPayout?: number;
    gameWinnerAddress?: string;
    gameTotalEligiblePlayers: number;
    gcsMinGamePlayers: number;
    gcsGameBetSize: number;
    gcsIsAuditEnabled: boolean;
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
export interface DecodedGameCreatorSettings {
    isAuditEnabled: boolean;
    minGamePlayers: number;
    gameBetSize: number;
    createdDateTime: number;
}
export class BinanceTickerRequest {

    endpointBase: string;
    symbol: string;

    constructor() {
        this.symbol = 'VETUSDT';
        this.endpointBase = 'https://api.binance.com';
    }

    Build(): string {
        return `${this.endpointBase}/api/v3/ticker/price?symbol=${this.symbol}`;
    }
}
export class RollItChatMessage {
    content: string;
    fromWallet: string;
    createdAt: Date;

    constructor(fromWallet: string, content: string, createdAt: Date) {
        this.fromWallet = fromWallet;
        this.content = content;
        this.createdAt = createdAt;
    }
}
export class BinanceTickerResponse {

    constructor(price: number) {
        this.symbol = 'VETUSDT';
        this.price = price;
    }
    symbol: string;
    price: number;
}

export class CreateNewRollItGameSettings {
    constructor() {

    }
    players: number;
}
