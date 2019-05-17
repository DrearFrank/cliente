import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionActivoListComponent } from './ubicacion-activo-list.component';

describe('UbicacionActivoListComponent', () => {
  let component: UbicacionActivoListComponent;
  let fixture: ComponentFixture<UbicacionActivoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionActivoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionActivoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
