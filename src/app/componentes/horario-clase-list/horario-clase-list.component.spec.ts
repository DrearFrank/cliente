import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioClaseListComponent } from './horario-clase-list.component';

describe('HorarioClaseListComponent', () => {
  let component: HorarioClaseListComponent;
  let fixture: ComponentFixture<HorarioClaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioClaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioClaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
