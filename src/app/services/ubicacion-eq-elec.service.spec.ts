import { TestBed } from '@angular/core/testing';

import { UbicacionEqElecService } from './ubicacion-eq-elec.service';

describe('UbicacionEqElecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UbicacionEqElecService = TestBed.get(UbicacionEqElecService);
    expect(service).toBeTruthy();
  });
});
