import { TestBed } from '@angular/core/testing';

import { ArenaChatService } from './arena-chat.service';

describe('ArenaChatService', () => {
  let service: ArenaChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArenaChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
