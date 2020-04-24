import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormCreationQuizComponent } from './admin-form-creation-quiz.component';

describe('AdminFormCreationQuizComponent', () => {
  let component: AdminFormCreationQuizComponent;
  let fixture: ComponentFixture<AdminFormCreationQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFormCreationQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormCreationQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
