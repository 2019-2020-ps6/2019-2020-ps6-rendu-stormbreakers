import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
@Component({
  selector: 'app-admin-statistique',
  templateUrl: './admin-statistique.component.html',
  styleUrls: ['./admin-statistique.component.css']
})
export class AdminStatistiqueComponent implements OnInit {

  private quizList:Quiz[]
  private selectQuiz:Quiz
  constructor(private quizService:QuizService){ 
    this.quizService.quizzes$.subscribe((quizList:Quiz[])=>  {
    this.quizList=quizList
    this.selectQuiz=quizList[0]
  } )
  }

  ngOnInit() {
    this.quizService.getQuizzes()
  }

}


