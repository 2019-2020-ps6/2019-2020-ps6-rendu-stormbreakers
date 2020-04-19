import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { AdaptabilityService } from 'src/services/adaptability.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Output()
  quizLaunched: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  private darkMode:boolean;
  constructor(private adaptibility:AdaptabilityService ) {
  }

  ngOnInit() {
    this.adaptibility.darkMode$.subscribe(v=>{
      this.darkMode=v;
    });
  }

  quizLaunch() {
    console.log('emit: ' + this.quiz.id);
    this.quizLaunched.emit(this.quiz);
  }

  setClasses(){
    return {
      darktheme: this.darkMode
    }
  }

}
