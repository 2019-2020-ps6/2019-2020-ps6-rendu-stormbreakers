import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, Answer } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-play-question',
  templateUrl: './play-question.component.html',
  styleUrls: ['./play-question.component.scss']
})
export class PlayQuestionComponent implements OnInit {

 @Input()
  question:Question;

  @Output()
  changeQuestion: EventEmitter<Answer>= new EventEmitter<Answer>();
  passQuestion: EventEmitter<Question>=new EventEmitter<Question>();
  constructor() { 
  }
  public quizPlayed:Quiz;
  public isLaunch:boolean;
  public questions:Question[]=[];
  public currentQuestionPos: number;
  public currentQuestion: Question;
  public reponseUtilisateur:Answer[]=[];
  public quizIsFinished:boolean;





  ngOnInit() {

  }

  changingQuestion(answer:Answer){
    console.log("question emit");
    this.changeQuestion.emit(answer);
  }
  
}
