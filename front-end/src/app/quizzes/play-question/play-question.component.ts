import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, Answer } from 'src/models/question.model';

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

  constructor() { 
  }

  ngOnInit() {
  }

  changingQuestion(answer:Answer){
    console.log("question emit");
    this.changeQuestion.emit(answer);
  }

}
