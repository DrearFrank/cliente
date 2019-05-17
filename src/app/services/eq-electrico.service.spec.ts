import { TestBed } from '@angular/core/testing';

import { EqElectricoService } from './eq-electrico.service';

describe('EqElectricoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EqElectricoService = TestBed.get(EqElectricoService);
    expect(service).toBeTruthy();
  });
});
