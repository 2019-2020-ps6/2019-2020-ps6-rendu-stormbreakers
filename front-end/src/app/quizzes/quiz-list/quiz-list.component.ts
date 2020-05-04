import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Quiz } from '../../../models/quiz.model';
import { QuizService } from '../../../services/quiz.service';
import { BaseComponent } from 'src/app/adaptability/base/base.component';
import { AdaptabilityService } from 'src/services/adaptability.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent extends BaseComponent implements OnInit {

  public quizList: Quiz[] = [];
  constructor(private router: Router, private route: ActivatedRoute, public quizService: QuizService,protected adaptibility:AdaptabilityService ,@Inject(LOCAL_STORAGE) protected storage: WebStorageService) {
    super(storage,adaptibility);
  }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('themeName') != null){
      this.quizService.getQuizzesByTheme(this.route.snapshot.paramMap.get('themeName'));
    }
      this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {        
      this.quizList = quizzes;
      this.generateQuizzes();
      });
  }

  generateQuizzes(){
    for(let i=0;i<this.quizList.length;i++){
      if(this.quizList[i].questions && this.quizList[i].questions.length == 0){
        this.quizList.splice(i,1);
        i--;
      }
    }
  }

  quizLaunched(launch: Quiz) {
    console.log('quiz launch' + launch.id);
    this.router.navigate(['/playquiz/' + launch.id]);
  }

}
