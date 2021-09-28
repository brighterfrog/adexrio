import { TestBed } from '@angular/core/testing';

import { GamesDashboardSummaryService } from './games-dashboard-summary.service';

describe('GamesDashboardSummaryService', () => {
  let service: GamesDashboardSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesDashboardSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
