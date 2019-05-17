import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegClaseFormComponent } from './reg-clase-form.component';

describe('RegClaseFormComponent', () => {
  let component: RegClaseFormComponent;
  let fixture: ComponentFixture<RegClaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegClaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegClaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
