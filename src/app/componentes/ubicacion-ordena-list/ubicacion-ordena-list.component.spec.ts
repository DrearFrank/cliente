import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionOrdenaListComponent } from './ubicacion-ordena-list.component';

describe('UbicacionOrdenaListComponent', () => {
  let component: UbicacionOrdenaListComponent;
  let fixture: ComponentFixture<UbicacionOrdenaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionOrdenaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionOrdenaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
