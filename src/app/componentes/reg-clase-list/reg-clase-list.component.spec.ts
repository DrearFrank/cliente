import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegClaseListComponent } from './reg-clase-list.component';

describe('RegClaseListComponent', () => {
  let component: RegClaseListComponent;
  let fixture: ComponentFixture<RegClaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegClaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegClaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
