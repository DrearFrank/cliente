import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqSoftwareFormComponent } from './req-software-form.component';

describe('ReqSoftwareFormComponent', () => {
  let component: ReqSoftwareFormComponent;
  let fixture: ComponentFixture<ReqSoftwareFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqSoftwareFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqSoftwareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
