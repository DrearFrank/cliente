import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaOrdeListComponent } from './marca-orde-list.component';

describe('MarcaOrdeListComponent', () => {
  let component: MarcaOrdeListComponent;
  let fixture: ComponentFixture<MarcaOrdeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaOrdeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaOrdeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
