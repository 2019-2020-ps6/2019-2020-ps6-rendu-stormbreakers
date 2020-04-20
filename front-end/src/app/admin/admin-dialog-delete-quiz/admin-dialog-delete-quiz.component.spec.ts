import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDialogDeleteQuizComponent } from './admin-dialog-delete-quiz.component';

describe('AdminDialogDeleteQuizComponent', () => {
  let component: AdminDialogDeleteQuizComponent;
  let fixture: ComponentFixture<AdminDialogDeleteQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDialogDeleteQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDialogDeleteQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
