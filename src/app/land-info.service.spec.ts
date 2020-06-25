import { TestBed } from '@angular/core/testing';

import { LandInfoService } from './land-info.service';

describe('LandInfoService', () => {
  let service: LandInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
