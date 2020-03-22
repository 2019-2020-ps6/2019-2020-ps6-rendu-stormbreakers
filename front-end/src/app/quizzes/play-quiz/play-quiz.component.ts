import { Component, OnInit, Output, EventEmitter,} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Question, Answer } from 'src/models/question.model';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.css']
})
export class PlayQuizComponent implements OnInit {

  constructor(
    private  router:Router,
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
  public reponseUtilisateur:Answer[]=[];


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

    changingQuestion(val:Answer){
      console.log("receive"+val.value);
      this.currentQuestionPos++;
      if(this.quizPlayed.questions.length>this.currentQuestionPos){
        this.currentQuestion= this.quizPlayed.questions[this.currentQuestionPos];
        this.reponseUtilisateur.push(val)
      }else{
        this.reponseUtilisateur.push(val)
        this.quizIsFinished=true;
      }
    }

    
  showResult() {
    console.log("quiz result"+this.quizPlayed.id);
    this.router.navigate(['/quizresult/'+this.quizPlayed.id],{state: {result:this.reponseUtilisateur}})
  }
}
