import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { AdminChartComponent } from '../admin-chart/admin-chart.component';
import { Router } from '@angular/router';
@Component({
  providers: [AdminChartComponent],
    selector: 'app-admin-statistique',
  templateUrl: './admin-statistique.component.html',
  styleUrls: ['./admin-statistique.component.css']
})
export class AdminStatistiqueComponent implements OnInit {

  private quizList:Quiz[]
  public selectQuiz:Quiz;
  constructor(private quizService:QuizService,
    private chart:AdminChartComponent,
    private router:Router){ 
    this.quizService.quizzes$.subscribe((quizList:Quiz[])=>  {
    this.quizList=quizList;
  } )
  }

  ngOnInit() {
    this.quizService.getQuizzes()
  }

  quizSelected(quizSelect:Quiz){
    
    this.selectQuiz=quizSelect;
    console.log( "Quiz selected:" );
    console.log(this.selectQuiz);
    this.chart.ngOnInit();
  }
}


