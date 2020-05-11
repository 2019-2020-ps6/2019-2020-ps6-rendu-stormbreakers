import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService) {

    this.quizService.quizPlayed$.subscribe(quiz => {
      this.quiz = quiz
    });
  }

  private toSave: boolean = false;

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.getSelectQuiz(id);
  }

  save() {
    this.toSave = true;
  }


  
}
