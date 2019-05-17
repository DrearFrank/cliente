import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoManteniListComponent } from './tipo-manteni-list.component';

describe('TipoManteniListComponent', () => {
  let component: TipoManteniListComponent;
  let fixture: ComponentFixture<TipoManteniListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoManteniListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoManteniListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
