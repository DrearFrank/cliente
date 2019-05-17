import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqElectricoFormComponent } from './eq-electrico-form.component';

describe('EqElectricoFormComponent', () => {
  let component: EqElectricoFormComponent;
  let fixture: ComponentFixture<EqElectricoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqElectricoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqElectricoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
