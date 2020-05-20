import { Component, OnInit, Inject, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService } from 'src/services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Answer } from 'src/models/question.model';
import { Question } from 'src/models/question.model';
import { BaseComponent } from 'src/app/adaptability/base/base.component';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { AdaptabilityService } from 'src/services/adaptability.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent extends BaseComponent implements OnInit{

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location,
    @Inject(LOCAL_STORAGE) protected storage: WebStorageService,
    protected adaptability:AdaptabilityService
    
  ) {
    
    super(storage,adaptability);
    this.userAnswers = this.router.getCurrentNavigation().extras.state.result;
    this.quizService.quizPlayed$.subscribe(quiz => {
      this.quiz = quiz
    });
  }

  private quiz: Quiz;
  private userAnswers: Answer[];
  private goodAnswersCount: number = 0;
  private badAnswersCount: number = 0;
  private unsansweredCount: number = 0;

  ngOnInit() {
    super.ngOnInit();
    this.getQuiz();
    console.log(this.userAnswers);
    this.setAnswersCount();
  }

  getQuiz(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.getSelectQuiz(id);
  }

  setAnswersCount() {
    this.userAnswers.forEach(ans => {
      if (ans.value == null) {
        this.unsansweredCount++;
      } else if (ans.isCorrect) {
        this.goodAnswersCount++;
      } else {
        this.badAnswersCount++;
      }
    });
  }

  answerFromQuestion(q: Question, answer: Answer) {
    if (answer.value == null) return false;
    return q.answers.find(a => a.value === answer.value);
  }

  goToHome(){
      this.router.navigate(['/playquiz/' + this.quiz.id]);
  }

  rightAnswers(answers){
    console.log(answers);
    let correctAnswers = answers.filter(a => {
      if(a.isCorrect) return a;
    });
    var res: String;
    if(correctAnswers.length > 1){
      res = 'Les bonnes réponses possibles sont :';
      correctAnswers.forEach(a => {
        res += ' ' + a.value;
      });
    } else {
      res = 'La bonne réponse est : ' + correctAnswers[0].value;
    }
    return res;
  }
}
