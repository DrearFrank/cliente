import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegReservasFormComponent } from './reg-reservas-form.component';

describe('RegReservasFormComponent', () => {
  let component: RegReservasFormComponent;
  let fixture: ComponentFixture<RegReservasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegReservasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegReservasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
