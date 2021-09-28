import { GameNoAuditService } from '../src/game-orchestrator/game-no-audit-service'
import { expect } from 'chai';
import 'mocha';
require('dotenv').config({ path: `.env.dev` });

describe('Can create GameNoAuditService test',
    () => {
        it('should return true', () => {
            const randomApiService = new GameNoAuditService();
            expect(randomApiService).is.not.null.to.equal(true);
        });
    });

describe('Can generate random winners',
    () => {
        it('should return true', () => {
            const gameId = 0;
            const title = 'test title 1';
            const gameNoAuditService = new GameNoAuditService();

            const actualPlayerWalletList = [
                '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed',
                '0xd3ae78222beadb038203be21ed5ce7c9b1bff602',
                '0x733b7269443c70de16bbf9b0615307884bcc5636',
                '0x115eabb4f62973d0dba138ab7df5c0375ec87256',
                '0x199b836d8a57365baccd4f371c1fabb7be77d389',
                '0x5e4efedf3d71232340280d8bc475421352994b63',
                '0x29f72dc07224a4c6270407bfd6b8fec559d29f6c',
                '0x47109a193c49862c89bd76fe2de3585743dd2bb0',
                '0xa5e255d4c65af201b97210ff4cd9521a46427654',
                '0x0489a3fff1930b85f1d73eff8a4699281aadb558',
            ];

            let winnersArray: string[] = []; // create a dictionary with object properties as indexers

            for (let i = 0; i < 10; i++) {
                const winnerAddress = gameNoAuditService.getRandomAddress(actualPlayerWalletList);

                if (winnersArray.indexOf(winnerAddress) < 0) {
                    winnersArray.push(winnerAddress);
                }

                expect(winnerAddress).is.not.null.to.equal(true);
            }

            console.log(`winners array unique count is ${winnersArray.length}`);

            expect(winnersArray.length).is.greaterThan(actualPlayerWalletList.length - 6);
        });
    });

    describe('Iterations before all wallets win should be less than 10x size',
    () => {
        it('should return true', () => {
            const gameId = 0;
            const title = 'test title 1';
            const gameNoAuditService = new GameNoAuditService();

            const actualPlayerWalletList = [
                '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed',
                '0xd3ae78222beadb038203be21ed5ce7c9b1bff602',
                '0x733b7269443c70de16bbf9b0615307884bcc5636',
                '0x115eabb4f62973d0dba138ab7df5c0375ec87256',
                '0x199b836d8a57365baccd4f371c1fabb7be77d389',
                '0x5e4efedf3d71232340280d8bc475421352994b63',
                '0x29f72dc07224a4c6270407bfd6b8fec559d29f6c',
                '0x47109a193c49862c89bd76fe2de3585743dd2bb0',
                '0xa5e255d4c65af201b97210ff4cd9521a46427654',
                '0x0489a3fff1930b85f1d73eff8a4699281aadb558',
            ];

            let winnersArray: string[] = []; // create a dictionary with object properties as indexers
            let iterationsCount = 0;
            do {
                const winnerAddress = gameNoAuditService.getRandomAddress(actualPlayerWalletList);

                if (winnersArray.indexOf(winnerAddress) < 0) {
                    winnersArray.push(winnerAddress);
                }

                iterationsCount++;
            }
            while(winnersArray.length < actualPlayerWalletList.length)

            console.log(`iterationsCount count is ${iterationsCount}`);
            expect(iterationsCount).is.lessThan(winnersArray.length * 10);

        });

    });