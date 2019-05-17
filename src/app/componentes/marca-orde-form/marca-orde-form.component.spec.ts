import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaOrdeFormComponent } from './marca-orde-form.component';

describe('MarcaOrdeFormComponent', () => {
  let component: MarcaOrdeFormComponent;
  let fixture: ComponentFixture<MarcaOrdeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaOrdeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaOrdeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
