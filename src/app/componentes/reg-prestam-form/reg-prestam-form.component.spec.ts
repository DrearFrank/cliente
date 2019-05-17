import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPrestamFormComponent } from './reg-prestam-form.component';

describe('RegPrestamFormComponent', () => {
  let component: RegPrestamFormComponent;
  let fixture: ComponentFixture<RegPrestamFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPrestamFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPrestamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
