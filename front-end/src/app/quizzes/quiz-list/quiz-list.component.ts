import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Quiz } from '../../../models/quiz.model';
import { QuizService } from '../../../services/quiz.service';
import { BaseComponent } from 'src/app/adaptability/base/base.component';
import { AdaptabilityService } from 'src/services/adaptability.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent extends BaseComponent implements OnInit {

  public quizList: Quiz[] = [];
  public theme: string;

  constructor(private router: Router, private route: ActivatedRoute, public quizService: QuizService, public themeService: ThemeService, protected adaptibility:AdaptabilityService ,@Inject(LOCAL_STORAGE) protected storage: WebStorageService) {
    super(storage,adaptibility);
    this.route.paramMap.forEach(p => {
      this.theme = p.get('themeName');
    })
    
  }

  ngOnInit() {
    if(this.theme != null){
      this.quizService.getQuizzesByTheme(this.theme);
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
