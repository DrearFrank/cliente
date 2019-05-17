import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEspacioListComponent } from './tipo-espacio-list.component';

describe('TipoEspacioListComponent', () => {
  let component: TipoEspacioListComponent;
  let fixture: ComponentFixture<TipoEspacioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEspacioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEspacioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
