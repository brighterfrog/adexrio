import { TestBed } from '@angular/core/testing';

import { ConnexGuard } from './connex.guard';

describe('ConnexGuard', () => {
  let guard: ConnexGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConnexGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
