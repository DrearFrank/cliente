import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaEqElectricoListComponent } from './categoria-eq-electrico-list.component';

describe('CategoriaEqElectricoListComponent', () => {
  let component: CategoriaEqElectricoListComponent;
  let fixture: ComponentFixture<CategoriaEqElectricoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaEqElectricoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaEqElectricoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
