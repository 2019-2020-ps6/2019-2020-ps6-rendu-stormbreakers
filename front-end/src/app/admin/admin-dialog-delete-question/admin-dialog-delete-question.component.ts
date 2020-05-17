import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-admin-dialog-delete-question',
  templateUrl: './admin-dialog-delete-question.component.html',
  styleUrls: ['./admin-dialog-delete-question.component.css']
})
export class AdminDialogDeleteQuestionComponent implements OnInit {
  
  question: Question;

  constructor(
    private dialogRef:MatDialogRef<AdminDialogDeleteQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.question = data;
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
