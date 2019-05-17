import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosFormComponent } from './espacios-form.component';

describe('EspaciosFormComponent', () => {
  let component: EspaciosFormComponent;
  let fixture: ComponentFixture<EspaciosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaciosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaciosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
