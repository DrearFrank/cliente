import { TestBed } from '@angular/core/testing';

import { MarcaOrdeService } from './marca-orde.service';

describe('MarcaOrdeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarcaOrdeService = TestBed.get(MarcaOrdeService);
    expect(service).toBeTruthy();
  });
});
