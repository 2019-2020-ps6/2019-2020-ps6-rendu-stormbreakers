import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-admin-dialog-delete-quiz',
  templateUrl: './admin-dialog-delete-quiz.component.html',
  styleUrls: ['./admin-dialog-delete-quiz.component.css']
})
export class AdminDialogDeleteQuizComponent implements OnInit {
  quiz:Quiz;
  constructor(
    private dialogRef:MatDialogRef<AdminDialogDeleteQuizComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.quiz=data;
  }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close(false);
  }
  delete(){
    this.dialogRef.close(true);
  }
}
