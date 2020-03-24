import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  public quizList: Quiz[] = [];

  constructor(private  router:Router,public quizService: QuizService) {
    //this.quizService.getQuizzes();
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
    console.log(this.quizList);
  }

  ngOnInit() {
  }

  quizLaunched(launch: Quiz) {
    console.log("quiz launch"+launch.id);
    this.router.navigate(['/playquiz/'+launch.id])
  }

}
