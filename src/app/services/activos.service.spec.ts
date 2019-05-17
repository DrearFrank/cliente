import { TestBed } from '@angular/core/testing';

import { ActivosService } from './activos.service';

describe('ActivosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivosService = TestBed.get(ActivosService);
    expect(service).toBeTruthy();
  });
});
