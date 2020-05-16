import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { Question } from 'src/models/question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  
  @Input()
  quiz: Quiz;
  
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
  }
 
  deleteQuestion(question: Question) {
    this.quizService.deleteQuestion(this.quiz, question);
  }

  @HostListener('window:popstate', ['$event'])
  onBrowserBackBtnClose(event: Event) {
    console.log('back button pressed');
    event.preventDefault(); 
    this.router.navigate(['/'],  {replaceUrl:true});
}

}
