import { TestBed } from '@angular/core/testing';

import { RegReservasService } from './reg-reservas.service';

describe('RegReservasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegReservasService = TestBed.get(RegReservasService);
    expect(service).toBeTruthy();
  });
});
