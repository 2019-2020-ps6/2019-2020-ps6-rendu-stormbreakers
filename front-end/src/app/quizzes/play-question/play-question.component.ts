import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, Answer } from 'src/models/question.model';

@Component({
  selector: 'app-play-question',
  templateUrl: './play-question.component.html',
  styleUrls: ['./play-question.component.css']
})
export class PlayQuestionComponent implements OnInit {

 @Input()
  question:Question;

  @Output()
  changeQuestion: EventEmitter<boolean>= new EventEmitter<boolean>();

  constructor() { 
  }

  ngOnInit() {
  }

  changingQuestion(){
    console.log("question emit");
    this.changeQuestion.emit(true);
  }

}
