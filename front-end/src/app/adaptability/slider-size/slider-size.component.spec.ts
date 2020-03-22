import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSizeComponent } from './slider-size.component';

describe('SliderSizeComponent', () => {
  let component: SliderSizeComponent;
  let fixture: ComponentFixture<SliderSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
