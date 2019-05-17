import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenadorListComponent } from './ordenador-list.component';

describe('OrdenadorListComponent', () => {
  let component: OrdenadorListComponent;
  let fixture: ComponentFixture<OrdenadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
