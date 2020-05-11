import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import {MatDialog,MatDialogConfig} from '@angular/material';
import { AdminDialogDeleteQuizComponent } from '../admin-dialog-delete-quiz/admin-dialog-delete-quiz.component';
import { AdminDialogQuizCreateComponent } from 'src/app/admin-dialog-quiz-create/admin-dialog-quiz-create.component';
@Component({
  selector: 'app-admin-creation-quiz',
  templateUrl: './admin-creation-quiz.component.html',
  styleUrls: ['./admin-creation-quiz.component.css']
})
export class AdminCreationQuizComponent implements OnInit {
  private createQuiz: FormGroup;
  private quizzes:Quiz[];
  constructor(
    private formBuilder: FormBuilder,
    private cookieService:CookieService,
    private  router:Router,
    private quizService:QuizService,
    private dialog:MatDialog) { }

  ngOnInit() {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizzes = quizzes;
    });

    if(this.cookieService.check('connect')){
      if(this.cookieService.get('connect')==='false'){
      this.router.navigate(['admin']);
      }
    }else{
      this.router.navigate(['admin']);
    }
  }

  create(quiz:Quiz){
      this.quizService.addQuiz(quiz)
      /*const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.data = quiz;
      const alertdialog =this.dialog.open(AdminDialogQuizCreateComponent,dialogConfig)*/
  }

  quizDelete(quiz:Quiz){
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = quiz;

    const alertdialog =this.dialog.open(AdminDialogDeleteQuizComponent,dialogConfig)
    alertdialog.afterClosed().subscribe( isDelete => {
      if(isDelete){
        this.quizService.deleteQuiz(quiz);
      }
    }
    )
     }

  quizSelect(quiz:Quiz){
    console.log("test")
  }
  
}
