import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionEqElecFormComponent } from './ubicacion-eq-elec-form.component';

describe('UbicacionEqElecFormComponent', () => {
  let component: UbicacionEqElecFormComponent;
  let fixture: ComponentFixture<UbicacionEqElecFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionEqElecFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionEqElecFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
