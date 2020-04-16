import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-admin-list-statistique',
  templateUrl: './admin-list-statistique.component.html',
  styleUrls: ['./admin-list-statistique.component.css']
})
export class AdminListStatistiqueComponent implements OnInit {

  @Input()
  quiz:Quiz;
  
  @Output()
  quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();
  

  constructor() { }

  ngOnInit() {
  }

  quizSelect(){
    this.quizSelected.emit(this.quiz);
  }
}
