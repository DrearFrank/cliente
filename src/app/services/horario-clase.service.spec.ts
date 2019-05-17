import { TestBed } from '@angular/core/testing';

import { HorarioClaseService } from './horario-clase.service';

describe('HorarioClaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorarioClaseService = TestBed.get(HorarioClaseService);
    expect(service).toBeTruthy();
  });
});
