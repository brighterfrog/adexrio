import { TestBed } from '@angular/core/testing';

import { GameTabsFilterService } from './game-tabs-filter.service';

describe('GameTabsFilterService', () => {
  let service: GameTabsFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameTabsFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
