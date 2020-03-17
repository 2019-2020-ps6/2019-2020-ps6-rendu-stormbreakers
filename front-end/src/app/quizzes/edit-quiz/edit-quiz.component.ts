import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  currentQuiz: Quiz;
  constructor(private route: ActivatedRoute, public quizservice: QuizService) { }

  ngOnInit() {
    console.log('On init');
    this.quizservice.quizzes$.subscribe(quizList => {
      this.currentQuiz = quizList.find(q => q.id === this.route.snapshot.paramMap.get('id'));
    });

  }

}
