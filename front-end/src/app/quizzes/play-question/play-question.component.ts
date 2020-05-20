import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Question, Answer } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { BaseComponent } from 'src/app/adaptability/base/base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { AdaptabilityService } from 'src/services/adaptability.service';

@Component({
  selector: 'app-play-question',
  templateUrl: './play-question.component.html',
  styleUrls: ['./play-question.component.css']
})
export class PlayQuestionComponent extends BaseComponent {

 @Input()
  question:Question;

  @Output()
  changeQuestion: EventEmitter<Answer>= new EventEmitter<Answer>();
  passQuestion: EventEmitter<Question>=new EventEmitter<Question>();
 
  public quizPlayed:Quiz;
  public isLaunch:boolean;
  public questions:Question[]=[];
  public currentQuestionPos: number;
  public currentQuestion: Question;
  public reponseUtilisateur:Answer[]=[];
  public quizIsFinished:boolean;
  public reponseValue:string;
  public reponse:Answer;
  

  constructor(@Inject(LOCAL_STORAGE) protected storage: WebStorageService, protected adaptability: AdaptabilityService){
    super(storage,adaptability);
  }

  changingQuestion(){
    console.log("question emit");
    this.changeQuestion.emit(this.reponse);
    this.reponse = null;
  }

  radioChangeHandler($event){
    console.log($event);
    console.log($event.target.value);
    this.reponseValue=$event.target.value;
    console.log(this.reponseValue);
    
    for (const iterator of this.question.answers) {
      if(iterator.value===$event.target.value){
        this.reponse=iterator;
      }
    }

  }

  nbRightAnswers(){
    let res = 0;
    this.question.answers.forEach(a => {
      if(a.isCorrect) res++;
    })
    return res;
  }
  
  disableButton() {
    if(this.reponse == null) return true;
    return false;
  }
  
}
