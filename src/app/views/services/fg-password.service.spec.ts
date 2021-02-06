import { TestBed } from '@angular/core/testing';

import { FgPasswordService } from './fg-password.service';

describe('FgPasswordService', () => {
  let service: FgPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FgPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
