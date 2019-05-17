import { TestBed } from '@angular/core/testing';

import { RegPrestamoService } from './reg-prestamo.service';

describe('RegPrestamoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegPrestamoService = TestBed.get(RegPrestamoService);
    expect(service).toBeTruthy();
  });
});
