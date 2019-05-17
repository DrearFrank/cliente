import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenadoresFormComponent } from './ordenadores-form.component';

describe('OrdenadoresFormComponent', () => {
  let component: OrdenadoresFormComponent;
  let fixture: ComponentFixture<OrdenadoresFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenadoresFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenadoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
