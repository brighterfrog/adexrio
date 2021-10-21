import { RandomDrawGame, RandomDrawRequest, RandomOrgApiService } from '../src/random_org/random-org-service'
import { expect } from 'chai';
import 'mocha';
require('dotenv').config({ path: `.env.dev` });

describe('Can Create RandomOrgApiService test',
    () => {
        it('should return true', () => {
            const randomApiService = new RandomOrgApiService();
            expect(randomApiService).is.not.null.to.equal(true);
        });
    });

describe('Can create RandomDrawRequest from',
    () => {
        it('should return true', () => {
            const gameId = 0;
            const title = 'test title 1';
            const game = new RandomDrawGame(gameId, title, [
                '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed',
                '0xd3ae78222beadb038203be21ed5ce7c9b1bff602',
                '0x733b7269443c70de16bbf9b0615307884bcc5636',
                '0x115eabb4f62973d0dba138ab7df5c0375ec87256',
                '0x199b836d8a57365baccd4f371c1fabb7be77d389'
            ]);
            const request = new RandomDrawRequest(game);

            expect(game).is.not.null.to.equal(true);

            expect(request).is.not.null.to.equal(true);
            expect(request.id).is.not.null.to.equal(true);
            expect(request.jsonrpc).is.not.null.to.equal(true);
            expect(request.method).is.not.null.to.equal(true);
            expect(request.params).is.not.null.to.equal(true);

            expect(request.params.credentials).is.not.null.to.equal(true);
            expect(request.params.entries).is.not.null.to.equal(true);
            expect(request.params.entriesDigest).is.not.null.to.equal(true);
            expect(request.params.recordType).is.not.null.to.equal(true);
            expect(request.params.title).is.not.null.to.equal(true);
            expect(request.params.winnerCount).is.equal(1);

            console.log(request);

        });
    });

describe('Can call Random.org api and get test result',
    () => {
        it('should return true', async () => {
            const randomApiService = new RandomOrgApiService();

            const gameId = 0;
            const title = 'test title 1';
            const game = new RandomDrawGame(gameId, title, [
                '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed',
                '0xd3ae78222beadb038203be21ed5ce7c9b1bff602',
                '0x733b7269443c70de16bbf9b0615307884bcc5636',
                '0x115eabb4f62973d0dba138ab7df5c0375ec87256',
                '0x199b836d8a57365baccd4f371c1fabb7be77d389'
            ]);

            const gameResult = await randomApiService.getDrawRequestResultForGame(game);
            expect(gameResult).is.not.null;
            expect(gameResult.result.status).equals('test');

            console.log(gameResult);
        });
    });