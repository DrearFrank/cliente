import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosListComponent } from './espacios-list.component';

describe('EspaciosListComponent', () => {
  let component: EspaciosListComponent;
  let fixture: ComponentFixture<EspaciosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaciosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaciosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
