import { TestBed } from '@angular/core/testing';

import { UbicacionActivoService } from './ubicacion-activo.service';

describe('UbicacionActivoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UbicacionActivoService = TestBed.get(UbicacionActivoService);
    expect(service).toBeTruthy();
  });
});
