import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quiz.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Quiz } from 'src/models/quiz.model';
import { AdminDialogQuizCreateComponent } from 'src/app/admin-dialog-quiz-create/admin-dialog-quiz-create.component';

@Component({
  selector: 'app-ad-dashboard-default',
  templateUrl: './ad-dashboard-default.component.html',
  styleUrls: ['./ad-dashboard-default.component.css']
})
export class AdDashboardDefaultComponent implements OnInit {

  quizToDispaly:Quiz;
  constructor(
    private quizService:QuizService,
    private dialog:MatDialog) { 
      quizService.quizzes$.subscribe((quizzes)=>this.quizToDispaly=quizzes[0])
    }

  ngOnInit() {
    
    this.quizService.getQuizzes();
  }

  create(quiz:Quiz){
    this.quizService.addQuiz(quiz)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = quiz;
    const alertdialog =this.dialog.open(AdminDialogQuizCreateComponent,dialogConfig)
}


}
