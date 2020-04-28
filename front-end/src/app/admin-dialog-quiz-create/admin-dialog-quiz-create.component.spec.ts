import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDialogQuizCreateComponent } from './admin-dialog-quiz-create.component';

describe('AdminDialogQuizCreateComponent', () => {
  let component: AdminDialogQuizCreateComponent;
  let fixture: ComponentFixture<AdminDialogQuizCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDialogQuizCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDialogQuizCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
