"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_summary_api_service_1 = require("../src/game-orchestrator/game-summary-api-service");
const chai_1 = require("chai");
require("mocha");
const API_1 = require("../src/API");
const blockchain_service_1 = require("../src/blockchain/blockchain-service");
const all_models_1 = require("../src/models/all-models");
const global_service_1 = require("../src/globals/global-service");
require('dotenv').config({ path: `.env.dev` });
describe('Can Create GameSummaryApiService test', () => {
    it('should return true', () => {
        const service = new game_summary_api_service_1.GameSummaryApiService(new API_1.APIService(), new blockchain_service_1.BlockChainService());
        chai_1.expect(service).is.not.null.to.equal(true);
    });
});
describe('Can Create GameSummaryApiService and add entry when no entry exists', () => {
    it('should return true', (done) => {
        const globalService = new global_service_1.GlobalService();
        globalService.registerAmplify();
        const service = new game_summary_api_service_1.GameSummaryApiService(new API_1.APIService(), new blockchain_service_1.BlockChainService());
        service.blockchainService.walletService
            .importWalletFromKeystore()
            .then(() => {
            const gameEntry = new all_models_1.GameCompletedEvent(0, 'testplayer', 1234, 2940000000000000000, '696969', 1234);
            service.processCompletedGameEvent(gameEntry).then((summary) => {
                console.log(summary);
                chai_1.expect(summary).is.not.null.to.equal(true);
                done();
            });
        });
    }).timeout(20000);
    ;
});
//# sourceMappingURL=game-summary-api-service.spec.js.map