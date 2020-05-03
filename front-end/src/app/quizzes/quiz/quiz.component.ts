import { Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { AdaptabilityService } from 'src/services/adaptability.service';
import { BaseComponent } from 'src/app/adaptability/base/base.component';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent extends BaseComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Output()
  quizLaunched: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  
  constructor(protected adaptibility:AdaptabilityService ,@Inject(LOCAL_STORAGE) protected storage: WebStorageService) {
    super(storage,adaptibility);
  }

 
  quizLaunch() {
    console.log('emit: ' + this.quiz.id);
    this.quizLaunched.emit(this.quiz);
  }

  

}
