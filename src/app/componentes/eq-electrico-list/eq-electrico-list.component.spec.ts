import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqElectricoListComponent } from './eq-electrico-list.component';

describe('EqElectricoListComponent', () => {
  let component: EqElectricoListComponent;
  let fixture: ComponentFixture<EqElectricoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqElectricoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqElectricoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
