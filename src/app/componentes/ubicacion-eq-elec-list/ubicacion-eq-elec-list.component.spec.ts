import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionEqElecListComponent } from './ubicacion-eq-elec-list.component';

describe('UbicacionEqElecListComponent', () => {
  let component: UbicacionEqElecListComponent;
  let fixture: ComponentFixture<UbicacionEqElecListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionEqElecListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionEqElecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
