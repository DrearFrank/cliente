import { TestBed } from '@angular/core/testing';

import { CategoriaEqElectricoService } from './categoria-eq-electrico.service';

describe('CategoriaEqElectricoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriaEqElectricoService = TestBed.get(CategoriaEqElectricoService);
    expect(service).toBeTruthy();
  });
});
