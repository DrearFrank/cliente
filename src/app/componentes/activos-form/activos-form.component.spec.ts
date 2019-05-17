import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivosFormComponent } from './activos-form.component';

describe('ActivosFormComponent', () => {
  let component: ActivosFormComponent;
  let fixture: ComponentFixture<ActivosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
