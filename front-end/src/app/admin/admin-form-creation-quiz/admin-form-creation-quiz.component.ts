import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
@Component({
  selector: 'app-admin-form-creation-quiz',
  templateUrl: './admin-form-creation-quiz.component.html',
  styleUrls: ['./admin-form-creation-quiz.component.css']
})
export class AdminFormCreationQuizComponent implements OnInit {

  private createQuiz: FormGroup;

  //quizCreate:Quiz;
  @Output()
  quizCreated: EventEmitter<Quiz> = new EventEmitter<Quiz>();
  themeList: String[];
  constructor(
    private formBuilder: FormBuilder,
    private cookieService:CookieService,
    private router:Router,
    private quizServive: QuizService
  ) { 
   
  }

  ngOnInit() {
    this.createQuiz=new FormGroup({
      quizName: new FormControl(),
      theme: new FormControl(),
    })

    this.quizServive.currentTheme$.subscribe((result:String) =>{
      console.log(" created")
        const quiz:Quiz= {
          name: ""+this.createQuiz.get("quizName").value,
          theme: result.toString(),
          questions:[]
      }
      this.quizCreated.emit(quiz)
    })
  }

  create(){
    console.log(this.createQuiz.value)
    if(this.createQuiz.get("quizName").value){
      console.log("not null")
      const theme= ""+this.createQuiz.get("theme").value;
      if(theme){
        console.log("theme not null")
      }else{
        const quiz:Quiz= {
            name: ""+this.createQuiz.get("quizName").value,
            questions:[],
        }
        this.quizCreated.emit(quiz)
      }
    }
  }
 
}
