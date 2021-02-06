import { TestBed } from '@angular/core/testing';

import { PluviometrieService } from './pluviometrie.service';

describe('PluviometrieService', () => {
  let service: PluviometrieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PluviometrieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
