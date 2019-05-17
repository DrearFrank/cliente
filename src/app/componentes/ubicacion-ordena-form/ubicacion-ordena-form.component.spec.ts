import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionOrdenaFormComponent } from './ubicacion-ordena-form.component';

describe('UbicacionOrdenaFormComponent', () => {
  let component: UbicacionOrdenaFormComponent;
  let fixture: ComponentFixture<UbicacionOrdenaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionOrdenaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionOrdenaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
