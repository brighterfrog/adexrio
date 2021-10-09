import md5 = require("md5")
import { RandomOrgSecretDetails } from "src/models/all-models";
var request = require('request');

export class RandomOrgApiService {

    secretDetails: RandomOrgSecretDetails

    constructor(secretDetails: RandomOrgSecretDetails) {
        this.secretDetails = secretDetails;
    }

    // todo: implement logging
    getDrawRequestResultForGame(game: RandomDrawGame): Promise<RandomDrawRequestResult> {
        const drawRequest = new RandomDrawRequest(this.secretDetails, game);
        const self = this;

        const callBack = new Promise<RandomDrawRequestResult>(function (resolve, reject) {
            self.sendApiCall(drawRequest)
                .then(function (result: RandomDrawRequestResult) {
                    resolve(result);
                }).catch(function (error: any) {
                    reject(error);
                });
        });
        return callBack;
    }

    private sendApiCall(drawRequest: RandomDrawRequest): Promise<RandomDrawRequestResult> {
        const options = {
            hostname: process.env.RANDOM_ORG_API_ENDPOINT,
            method: 'POST'
        };

        var request = require('request');

        const callBack = new Promise<RandomDrawRequestResult>(function (resolve, reject) {
            request.post(
                process.env.RANDOM_ORG_API_ENDPOINT,
                {
                    json: drawRequest
                },
                function (error: any, response: any, body: any) {
                    if (!error && response.statusCode == 200) {
                        // console.log(body);
                        //todo: log body
                        resolve(body as RandomDrawRequestResult);
                    }
                    else {
                        //todo: log error
                        reject(error);
                    }
                }
            );
        });
        return callBack;
    }
}

export class RandomDrawGame {
    playerAddresses: string[];
    gameId: number;
    winnerCount = 1;
    gameTitle: string;

    constructor(
        gameId: number,
        gameTitle: string,
        playerAddresses: string[]) {

        this.gameId = gameId;
        this.playerAddresses = playerAddresses;
        this.gameTitle = gameTitle;
    }
}
export class RandomDrawRequest {
    jsonrpc: string;
    method: string;
    params: RandomDrawRequestParams;
    id: number;

    constructor(secretDetails: RandomOrgSecretDetails, game: RandomDrawGame) {
        this.jsonrpc = "2.0";
        this.method = "holdDraw";
        this.id = game.gameId;
        this.params = new RandomDrawRequestParams(secretDetails, game);
    }
}
export class RandomDrawRequestParams {
    credentials: RandomDrawRequestCredentials;
    title: string;
    recordType: string;
    entries: string[];
    entriesDigest: string;
    winnerCount: number;

    constructor(secretDetails: RandomOrgSecretDetails, game: RandomDrawGame) {
        this.credentials = new RandomDrawRequestCredentials(secretDetails);
        this.title = game.gameTitle;
        this.recordType = process.env.RECORD_TYPE;
        this.entries = game.playerAddresses;
        this.entriesDigest = this.getDigestValueFor(this.entries);
        this.winnerCount = game.winnerCount;
    }
    getDigestValueFor(entries: string[]): string {
        const digest = md5(JSON.stringify(entries));
        return digest;
    }
}
export class RandomDrawRequestCredentials {
    constructor(secretDetails: RandomOrgSecretDetails) {
        this.login = secretDetails.login;
        this.password = secretDetails.password;
    }
    login: string;
    password: string;
}
export class RandomDrawRequestResult {
    jsonrpc: string;
    result: RandomDrawResult;
    id: number;
    error?: RandomDrawRequestError;
}
export class RandomDrawRequestError {
    code: number;
    message: string;
    data: string[];
}
export class RandomDrawResult {
    drawId?: number;
    status: string;
    entryCount: number;
    winners: string[];
    completionTime: string;
    recordUrl?: string;
}
