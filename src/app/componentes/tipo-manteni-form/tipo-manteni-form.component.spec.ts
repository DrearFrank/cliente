import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoManteniFormComponent } from './tipo-manteni-form.component';

describe('TipoManteniFormComponent', () => {
  let component: TipoManteniFormComponent;
  let fixture: ComponentFixture<TipoManteniFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoManteniFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoManteniFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
