import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CostPerGameService } from './costpergame-service';

describe('Check Cost Per Game Results', () => {
    let service: CostPerGameService;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [CostPerGameService] });
        service = TestBed.inject(CostPerGameService);
    });

    it('should create cost per game service', () => {
        expect(service).toBeTruthy();
    });
    it('should equal 4.95 for 499', () => {
        const fee = service.getRandomOrgGameFeeBasedOnPlayers(499);
        expect(fee).toEqual(4.95);
    });

    it('should equal 248.45 for 99,000', () => {
        const fee = service.getRandomOrgGameFeeBasedOnPlayers(99000);
        expect(fee).toEqual(248.45);
    });

    it('should equal 904.95 for 755,000', () => {
        const fee = service.getRandomOrgGameFeeBasedOnPlayers(755000);
        expect(fee).toEqual(904.95);
    });



});


