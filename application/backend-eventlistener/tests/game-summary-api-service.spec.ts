import { GameSummaryApiService } from '../src/game-orchestrator/game-summary-api-service'
import { Assertion, expect } from 'chai';
import 'mocha';
import { APIService } from '../src/API';
import { BlockChainService } from '../src/blockchain/blockchain-service';
import { GameCompletedEvent } from '../src/models/all-models';
import { GlobalService } from '../src/globals/global-service';
require('dotenv').config({ path: `.env.dev` });


describe('Can Create GameSummaryApiService test',
    () => {
        it('should return true', () => {
            const service = new GameSummaryApiService(
                new APIService(),
                new BlockChainService()
            );
            expect(service).is.not.null.to.equal(true);
        });
    });

describe('Can Create GameSummaryApiService and add entry when no entry exists',

    () => {
        it('should return true', (done) => {

            const globalService = new GlobalService();
            globalService.registerAmplify();

            const service = new GameSummaryApiService(
                new APIService(),
                new BlockChainService()
            );

            service.blockchainService.walletService
                .importWalletFromKeystore()
                .then(() => {

                    const gameEntry = new GameCompletedEvent(
                        0,
                        'testplayer',
                        1234,
                        2940000000000000000,
                        '696969',
                        1234
                    );
                    service.processCompletedGameEvent(gameEntry).then((summary) => {
                        console.log(summary);

                        expect(summary).is.not.null.to.equal(true)
                        done();

                     });
         });

        }).timeout(20000);;
    });