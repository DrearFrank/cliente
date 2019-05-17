import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaEqElectricoFormComponent } from './categoria-eq-electrico-form.component';

describe('CategoriaEqElectricoFormComponent', () => {
  let component: CategoriaEqElectricoFormComponent;
  let fixture: ComponentFixture<CategoriaEqElectricoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaEqElectricoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaEqElectricoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
