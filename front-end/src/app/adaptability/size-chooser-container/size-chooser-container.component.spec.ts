import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeChooserContainerComponent } from './size-chooser-container.component';

describe('SizeChooserContainerComponent', () => {
  let component: SizeChooserContainerComponent;
  let fixture: ComponentFixture<SizeChooserContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeChooserContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeChooserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
