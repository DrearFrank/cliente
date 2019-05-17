import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloAcademicoFormComponent } from './ciclo-academico-form.component';

describe('CicloAcademicoFormComponent', () => {
  let component: CicloAcademicoFormComponent;
  let fixture: ComponentFixture<CicloAcademicoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloAcademicoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloAcademicoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
