import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPrestamoListComponent } from './reg-prestamo-list.component';

describe('RegPrestamoListComponent', () => {
  let component: RegPrestamoListComponent;
  let fixture: ComponentFixture<RegPrestamoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPrestamoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPrestamoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
