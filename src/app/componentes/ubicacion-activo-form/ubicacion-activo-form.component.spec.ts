import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionActivoFormComponent } from './ubicacion-activo-form.component';

describe('UbicacionActivoFormComponent', () => {
  let component: UbicacionActivoFormComponent;
  let fixture: ComponentFixture<UbicacionActivoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionActivoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionActivoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
