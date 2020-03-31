import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
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
    private quizService:QuizService) { }

  ngOnInit() {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizzes = quizzes;
    });
    this.createQuiz=new FormGroup({
      quizName: new FormControl(),
      theme: new FormControl(),
    })

    if(this.cookieService.check('connect')){
      if(this.cookieService.get('connect')==='false'){
      this.router.navigate(['admin']);
      }
    }else{
      this.router.navigate(['admin']);
    }
  }
  create(){
    console.log(this.createQuiz.value)
    if(this.createQuiz.get("quizName").value!==null){
      console.log("not null")
      const quiz:Quiz= {
          name: ""+this.createQuiz.get("quizName").value,
          questions:[],
      }
      this.quizService.addQuiz(quiz)
      
    }
  }

  quizDelete(quiz:Quiz){
      this.quizService.deleteQuiz(quiz);
  }

  quizSelect(quiz:Quiz){
    console.log("test")
  }
}
