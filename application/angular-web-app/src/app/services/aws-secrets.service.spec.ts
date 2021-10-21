import { TestBed } from '@angular/core/testing';

import { AwsSecretsService } from './aws-secrets.service';

describe('AwsSecretsService', () => {
  let service: AwsSecretsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsSecretsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
