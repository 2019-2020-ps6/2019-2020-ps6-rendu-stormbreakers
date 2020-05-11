import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-admin',
  templateUrl: './quiz-admin.component.html',
  styleUrls: ['./quiz-admin.component.css']
})
export class QuizAdminComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Output()
  quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();
  @Output()
  quizDeleted: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  quizEdit() {
    console.log('selectionner');
    this.quizSelected.emit(this.quiz);
    this.router.navigate(['admin/dashboard/editquiz/' + this.quiz.id], { state: { result: this.quiz } });
  }

  quizDelete() {
    console.log('supprimer');
    this.quizDeleted.emit(this.quiz);
  }
}
