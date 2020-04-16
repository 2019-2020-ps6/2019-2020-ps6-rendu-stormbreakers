import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdapterComponent } from './modal-adapter.component';

describe('ModalAdapterComponent', () => {
  let component: ModalAdapterComponent;
  let fixture: ComponentFixture<ModalAdapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAdapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
