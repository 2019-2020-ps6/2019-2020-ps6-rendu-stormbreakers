import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreationQuizComponent } from './admin-creation-quiz.component';

describe('AdminCreationQuizComponent', () => {
  let component: AdminCreationQuizComponent;
  let fixture: ComponentFixture<AdminCreationQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreationQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreationQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
