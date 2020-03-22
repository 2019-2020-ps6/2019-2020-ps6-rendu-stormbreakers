import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService } from 'src/services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Answer } from 'src/models/question.model';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {

  constructor(
    private  router:Router,
    private route: ActivatedRoute,
    private quizService:QuizService,
    private location:Location,
  ) {
    
    this.reponseUtilisateur= this.router.getCurrentNavigation().extras.state.result
   }
    private quiz:Quiz;
    private reponseUtilisateur:Answer[];
  ngOnInit() {
    
    this.getQuiz();
    console.log(this.reponseUtilisateur);
  }
  getQuiz():void{
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id"+id);
    this.quizService.quizzes$.subscribe(quizList => {
      this.quiz = quizList.find(q => q.id === this.route.snapshot.paramMap.get('id'));
    });
    }
}
