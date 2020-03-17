import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayQuestionComponent } from './play-question.component';

describe('PlayQuestionComponent', () => {
  let component: PlayQuestionComponent;
  let fixture: ComponentFixture<PlayQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
