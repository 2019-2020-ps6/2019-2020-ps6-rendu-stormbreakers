import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-admin-form-creation-quiz',
  templateUrl: './admin-form-creation-quiz.component.html',
  styleUrls: ['./admin-form-creation-quiz.component.css']
})
export class AdminFormCreationQuizComponent implements OnInit {

  private createQuiz: FormGroup;

  @Output()
  quizCreated: EventEmitter<Quiz> = new EventEmitter<Quiz>();
  themeList: String[];
  constructor(
    private formBuilder: FormBuilder,
    private cookieService:CookieService,
    private  router:Router,
    private themeService:ThemeService
  ) { 
   
  }

  ngOnInit() {
    this.createQuiz=new FormGroup({
      quizName: new FormControl(),
      theme: new FormControl(),
    })
  }

  create(){
    console.log(this.createQuiz.value)
    if(this.createQuiz.get("quizName").value){
      console.log("not null")
      const theme= this.createQuiz.get("theme").value;
      if(theme){
        console.log("theme not null")
        const quiz:Quiz= {
            name: ""+this.createQuiz.get("quizName").value,
            theme: theme,
            questions:[],
          }
        console.log(quiz);
        this.quizCreated.emit(quiz)
      } else {
        console.log("theme null")
        const quiz:Quiz= {
            name: ""+this.createQuiz.get("quizName").value,
            theme: "Sans thème",
            questions:[],
          }
        console.log(quiz);
        this.quizCreated.emit(quiz)
      }
    }
  }
}