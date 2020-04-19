import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Question, Answer } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { BaseComponent } from 'src/app/adaptability/base/base.component';

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

  changingQuestion(answer:Answer){
    console.log("question emit");
    this.changeQuestion.emit(answer);
  }

  
  
}
