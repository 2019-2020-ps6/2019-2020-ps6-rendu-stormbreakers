import { Component, OnInit, Input, ElementRef } from '@angular/core';
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

  isHidden:boolean=false;
  data:ChartDataSets[] = [{data :[0], label: "temps pour repondre"}];
  barchartData:ChartDataSets[] = [{data :[0], label: "taux de reussite"}]
  questionsNumber:Label[] =[];

  ChartOptions = {
    responsive:true,
  };
  ChartColors: Color[]=[{
    borderColor: 'black'
  }];
  ChartLegend = true;
  ChartPlugins = [];

  public statList: Statistique[]=[]
  constructor(
    private statService: StatService,
    private er: ElementRef
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
    

    console.log('height---' + this.er.nativeElement.offsetHeight);  //<<<===here
    console.log('width---' + this.er.nativeElement.offsetWidth);  
    if( this.er.nativeElement.offsetWidth<1000){
      this.isHidden=true;
    }
  }

  setData() {
    const listTimeToRespond:number[] =[];
    const listSucess:number[]=[];
    this.questionsNumber=[];
    for(let i=0;i<this.quiz.questions.length;i++){
        const statsByQuestion:Statistique[]=[];    
        for(let j=0;j<this.statList.length;j++){
          if(this.statList[j].questionId==this.quiz.questions[i].id){
            statsByQuestion.push(this.statList[j])
          }
        }
        listTimeToRespond.push(this.calculateMoyenne(statsByQuestion));
        listSucess.push(this.pourcentageReussite(statsByQuestion));
        this.questionsNumber.push("question"+i); 
    }
    this.data=[];
    console.log(this.data);
    this.data.push({data :listTimeToRespond, label: "temps pour repondre"});
    this.barchartData= [];
    this.barchartData.push({data:listSucess,label:"taux de reussite"})
  }  
  pourcentageReussite(statistique:Statistique[]){
    let reussite:number =0;
    for(let i=0;i<statistique.length;i++){
      if(statistique[i].answer){
        reussite++;
      }
    }
    if(statistique.length>0){
      return reussite/statistique.length;
    }else{
      return 0;
    }
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
