import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEspacioFormComponent } from './tipo-espacio-form.component';

describe('TipoEspacioFormComponent', () => {
  let component: TipoEspacioFormComponent;
  let fixture: ComponentFixture<TipoEspacioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEspacioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEspacioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
