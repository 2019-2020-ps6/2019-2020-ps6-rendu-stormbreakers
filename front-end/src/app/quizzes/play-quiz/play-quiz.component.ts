import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { BaseComponent } from 'src/app/adaptability/base/base.component';
import { Answer, Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { AdaptabilityService } from 'src/services/adaptability.service';
import { QuizService } from '../../../services/quiz.service';

import { Statistique } from 'src/models/statistique.model';
import { StatService } from 'src/services/statistique.service';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.css']
})
export class PlayQuizComponent extends BaseComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private statservice: StatService,
    private quizService: QuizService,
    @Inject(LOCAL_STORAGE) public storage: WebStorageService,
    protected adaptability: AdaptabilityService
  ) {
    super(storage, adaptability);
    this.quizService.quizPlayed$.subscribe(quiz => {
      this.quizPlayed = quiz
    });
  }

  public quizPlayed: Quiz;
  public isLaunch: boolean;
  public currentQuestionPos: number;
  public currentQuestion: Question;
  public quizIsFinished: boolean;
  /** statistique about quiz */
  public reponseUtilisateur: Answer[] = [];
  public timeToRespond: number[] = [];
  public quizBegining: Date;

  ngOnInit() {
    super.ngOnInit();
    this.getQuiz();
    this.isLaunch = false;
    this.quizIsFinished = false;
  }
  getQuiz(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.getSelectQuiz(id);
  }

  launch() {
    this.isLaunch = true;
    this.currentQuestion = this.quizPlayed.questions[0];
    this.currentQuestionPos = 0;
    this.quizBegining = new Date();
  }

  changingQuestion(val: Answer) {
    console.log("receive" + val.value);
    this.currentQuestionPos++;
    const dateEndQuiz = new Date();
    const difference = dateEndQuiz.getTime() - this.quizBegining.getTime();
    this.timeToRespond.push(difference);
    this.quizBegining = new Date()
    if (this.quizPlayed.questions.length > this.currentQuestionPos) {
      this.currentQuestion = this.quizPlayed.questions[this.currentQuestionPos];
      this.reponseUtilisateur.push(val)
    } else {
      this.reponseUtilisateur.push(val)

      this.quizIsFinished = true;
    }

  }


  passingQuestion() {
    console.log("question passed");
    var tmp: Answer = { value: null, isCorrect: false };
    this.reponseUtilisateur.push(tmp);
    this.currentQuestionPos++;
    this.currentQuestion = this.quizPlayed.questions[this.currentQuestionPos];
    if (this.quizPlayed.questions.length == this.currentQuestionPos) {
      this.quizIsFinished = true;
      console.log("We have finished");
      
    }
  }


  showResult() {
    console.log("quiz result" + this.quizPlayed.id);
    this.sendData()
    this.router.navigate([this.router.url + '/results'], { state: { result: this.reponseUtilisateur } })
  }
  sendData() {
    for (let i = 0; i < this.quizPlayed.questions.length; i++) {
      let stat: Statistique = {
        quizId: "" + this.quizPlayed.id,
        questionId: "" + this.quizPlayed.questions[i].id,
        time: this.timeToRespond[i],
        answer: this.reponseUtilisateur[i].isCorrect
      }
      this.statservice.addStatistique(stat)
    }
  }


}
