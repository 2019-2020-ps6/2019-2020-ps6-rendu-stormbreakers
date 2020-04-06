import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeChooserComponent } from './base-size-chooser.component';

describe('BaseSizeChooserComponent', () => {
  let component: BaseSizeChooserComponent;
  let fixture: ComponentFixture<BaseSizeChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseSizeChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSizeChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
