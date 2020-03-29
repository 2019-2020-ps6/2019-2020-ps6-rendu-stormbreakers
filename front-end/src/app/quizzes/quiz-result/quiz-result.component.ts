import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService } from 'src/services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Answer } from 'src/models/question.model';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private quizService:QuizService,
    private location:Location,
  ) {
      this.userAnswers= this.router.getCurrentNavigation().extras.state.result
      this.quizService.quizPlayed$.subscribe(quiz => {
        this.quiz=quiz
      });
   }

    private quiz : Quiz;
    private userAnswers : Answer[];
    private goodAnswersCount : number = 0;
    private badAnswersCount : number = 0;
    private unsansweredCount : number = 0;

  ngOnInit() {
    this.getQuiz();
    console.log(this.userAnswers);
    this.setAnswersCount();
  }

  getQuiz():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.getSelectQuiz(id);
  }

  setAnswersCount(){
    this.userAnswers.forEach(ans => {
      if(ans.isCorrect) this.goodAnswersCount++;
      else this.badAnswersCount++;
    });
    this.unsansweredCount = this.quiz.questions.length - this.goodAnswersCount - this.badAnswersCount;
  }

  answerFromQuestion(q: Question, answer: Answer){
    return q.answers.find(a => a == answer);
  }
}
