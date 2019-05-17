import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioClaseFormComponent } from './horario-clase-form.component';

describe('HorarioClaseFormComponent', () => {
  let component: HorarioClaseFormComponent;
  let fixture: ComponentFixture<HorarioClaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioClaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioClaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
