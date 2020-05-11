import { Component, OnInit, Inject } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-admin-dialog-quiz-create',
  templateUrl: './admin-dialog-quiz-create.component.html',
  styleUrls: ['./admin-dialog-quiz-create.component.css']
})
export class AdminDialogQuizCreateComponent implements OnInit {

  quiz: Quiz;
  constructor(
    private dialogRef: MatDialogRef<AdminDialogQuizCreateComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.quiz = data;
  }

  ngOnInit() {

  }
  delete() {
    this.dialogRef.close();
  }
}
