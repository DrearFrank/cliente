import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriactvFormComponent } from './categoriactv-form.component';

describe('CategoriactvFormComponent', () => {
  let component: CategoriactvFormComponent;
  let fixture: ComponentFixture<CategoriactvFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriactvFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriactvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
