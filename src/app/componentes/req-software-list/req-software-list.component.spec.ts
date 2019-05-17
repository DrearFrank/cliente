import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqSoftwareListComponent } from './req-software-list.component';

describe('ReqSoftwareListComponent', () => {
  let component: ReqSoftwareListComponent;
  let fixture: ComponentFixture<ReqSoftwareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqSoftwareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqSoftwareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
