import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegReservasListComponent } from './reg-reservas-list.component';

describe('RegReservasListComponent', () => {
  let component: RegReservasListComponent;
  let fixture: ComponentFixture<RegReservasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegReservasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegReservasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
