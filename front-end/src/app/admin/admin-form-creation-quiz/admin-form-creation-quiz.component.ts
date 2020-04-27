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

  //quizCreate:Quiz;
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

    /*
    this.themeService.currentTheme$.subscribe((result: string) =>{
      if(this.createQuiz.get("theme").value){
        if(result){
          console.log(" created")
          const quiz:Quiz= {
            name: ""+this.createQuiz.get("quizName").value,
            theme: result,
            questions:[],
        }
        console.log(result)
        this.quizCreated.emit(quiz)
        }else{
          console.log("not created")
          const theme:Theme = {name: this.createQuiz.get("theme").value}
          this.themeService.addThemeToServer(theme)
        }
      }
    })
    this.themeService.lastCreatedTheme$.subscribe((result: string)=>{
      if(this.createQuiz.get("theme").value){
        console.log("lastcreated")
        const quiz:Quiz= {
          name: ""+this.createQuiz.get("quizName").value,
          theme:result.name,
          questions:[],
      }
      console.log(result)
      this.quizCreated.emit(quiz)
      }
    })*/
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