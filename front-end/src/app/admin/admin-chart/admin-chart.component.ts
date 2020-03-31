import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Quiz } from '../../../models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { StatService } from 'src/services/statistique.service';
import { Statistique } from 'src/models/statistique.model';
import { combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-admin-chart',
  templateUrl: './admin-chart.component.html',
  styleUrls: ['./admin-chart.component.css']
})
export class AdminChartComponent implements OnInit {


  @Input()
  quiz: Quiz;

  quizList: Quiz[] = [];

  data:ChartDataSets[] = [{data :[0], label: "temps pour repondre"}];
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
    private statService: StatService
  ) { 

  }

  ngOnInit() {
    this.statService.statistiques$.subscribe((stat:Statistique[]) => {
      this.statList = stat
      if(this.statList.length>0){
        this.setData();
      }
    });
    this.statService.getStatistiques()
  }

  setData() {
    const listTimeToRespond:number[] =[];
    for(let i=0;i<this.quiz.questions.length;i++){
        const statsByQuestion:Statistique[]=[];   
        console.log(this.statList)   
        for(let j=0;j<this.statList.length;j++){
          if(this.statList[j].questionId==this.quiz.questions[i].id){
            statsByQuestion.push(this.statList[j])
          }
        }
        listTimeToRespond.push(this.calculateMoyenne(statsByQuestion));
        this.questionsNumber.push("question"+i); 
    }
    this.data=[]
    this.data.push({data :listTimeToRespond, label: "temps pour repondre"});
  }  
  calculateMoyenne(statistique:Statistique[]) {
    let moyenne:number=0;
    for(let i=0;i<statistique.length;i++){
      moyenne+= statistique[i].time;
    }
    if(statistique.length>0){
      return (moyenne/statistique.length);
    }else{
      return 0;
    }
  }

}
