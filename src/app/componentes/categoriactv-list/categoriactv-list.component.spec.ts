import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriactvListComponent } from './categoriactv-list.component';

describe('CategoriactvListComponent', () => {
  let component: CategoriactvListComponent;
  let fixture: ComponentFixture<CategoriactvListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriactvListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriactvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
