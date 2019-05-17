import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloAcademicoListComponent } from './ciclo-academico-list.component';

describe('CicloAcademicoListComponent', () => {
  let component: CicloAcademicoListComponent;
  let fixture: ComponentFixture<CicloAcademicoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloAcademicoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloAcademicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
