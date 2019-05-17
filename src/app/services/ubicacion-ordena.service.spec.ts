import { TestBed } from '@angular/core/testing';

import { UbicacionOrdenaService } from './ubicacion-ordena.service';

describe('UbicacionOrdenaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UbicacionOrdenaService = TestBed.get(UbicacionOrdenaService);
    expect(service).toBeTruthy();
  });
});
