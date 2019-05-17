import { TestBed } from '@angular/core/testing';

import { RegClaseService } from './reg-clase.service';

describe('RegClaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegClaseService = TestBed.get(RegClaseService);
    expect(service).toBeTruthy();
  });
});
