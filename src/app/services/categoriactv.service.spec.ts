import { TestBed } from '@angular/core/testing';

import { CategoriactvService } from './categoriactv.service';

describe('CategoriactvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriactvService = TestBed.get(CategoriactvService);
    expect(service).toBeTruthy();
  });
});
