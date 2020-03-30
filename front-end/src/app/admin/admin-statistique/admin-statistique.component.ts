import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Quiz } from '../../../models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { StatService } from 'src/services/statistique.service';
import { Statistique } from 'src/models/statistique.model';

@Component({
  selector: 'app-admin-statistique',
  templateUrl: './admin-statistique.component.html',
  styleUrls: ['./admin-statistique.component.css']
})
export class AdminStatistiqueComponent implements OnInit {

  @Input()
  private quiz: Quiz;

  quizList: Quiz[] = [];

  data:ChartDataSets[] =[];
  questionsNumber:Label[] =[];

  lineChartOptions = {
    responsive:true,
  };
  lineChartColors: Color[]=[{
    borderColor: 'black'
  }];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType= 'line'

  public statList: Statistique[]=[]
  constructor(
    private quizService:QuizService,
    private statService: StatService
  ) { 
    this.statService.statistiques$.subscribe((stat:Statistique[])=> this.statList = stat);
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
      this.quiz=this.quizList[0];
      this.setData();
    });
  }

  ngOnInit() {
    this.quizService.getQuizzes();
  }
  setData() {
    const listTimeToRespond:number[] =[];
    for(let i=0;i<this.quiz.questions.length;i++){
      this.statService.getStatistiqueByQuizIdAndQuestionId(this.quiz.id,this.quiz.questions[i].id);
      listTimeToRespond.push(this.calculateMoyenne());
      this.questionsNumber.push("question"+i);
    }
    this.data.push({data :listTimeToRespond, label: "temps pour repondre"});
  }  
  calculateMoyenne() {
    let moyenne:number=0;
    console.log(this.statList);
    this.statList.forEach( data =>{
      moyenne+= data.time;
    });
    if(this.statList.length>0){
      return (moyenne/this.statList.length);
    }else{
      return 0;
    }
  }
}


