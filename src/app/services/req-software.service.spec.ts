import { TestBed } from '@angular/core/testing';

import { ReqSoftwareService } from './req-software.service';

describe('ReqSoftwareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReqSoftwareService = TestBed.get(ReqSoftwareService);
    expect(service).toBeTruthy();
  });
});
