import { TestBed } from '@angular/core/testing';

import { TipoManteniService } from './tipo-manteni.service';

describe('TipoManteniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoManteniService = TestBed.get(TipoManteniService);
    expect(service).toBeTruthy();
  });
});
