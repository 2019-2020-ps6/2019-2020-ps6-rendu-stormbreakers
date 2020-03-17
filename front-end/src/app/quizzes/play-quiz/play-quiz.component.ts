import { Component, OnInit,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.css']
})
export class PlayQuizComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private quizService:QuizService,
    private location:Location,
  ) { 
  }

  public quizPlayed:Quiz;
  public isLaunch:boolean;
  public questions:Question[]=[];
  public currentQuestionPos:number;
  public currentQuestion:Question;
  public quizIsFinished:boolean;
  ngOnInit() {
    this.getQuiz()
    this.isLaunch=false;
    this.quizIsFinished=false;
  }
  getQuiz():void{
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id"+id);
    this.quizService.quizzes$.subscribe(quizList => {
      this.quizPlayed = quizList.find(q => q.id === this.route.snapshot.paramMap.get('id'));
    });
    this.questions=this.quizPlayed.questions;
    }

    launch(){
      this.isLaunch=true;
      this.currentQuestion= this.quizPlayed.questions[0];
      this.currentQuestionPos = 0;
    }

    changingQuestion(val:boolean){
      console.log("receive"+val);
      this.currentQuestionPos++;
      if(this.quizPlayed.questions.length>this.currentQuestionPos){
        this.currentQuestion= this.quizPlayed.questions[this.currentQuestionPos];
      }else{
        this.quizIsFinished=true;
      }
    }
}
