import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Quiz } from '../../../models/quiz.model';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  public quizList: Quiz[] = [];

  constructor(private router: Router, private route: ActivatedRoute, public quizService: QuizService) {
    if(this.route.snapshot.paramMap.get('themeName') != null){
      
      this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
        this.quizService.getQuizzesByTheme(this.route.snapshot.paramMap.get('themeName'));
        for(let i=0;i<quizzes.length;i++){
          if(quizzes[i].questions.length == 0){
            quizzes.splice(i,1);
            i--;
          }
        }
      this.quizList = quizzes;
    });
    } else {
      this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
        for(let i=0;i<quizzes.length;i++){
          if(quizzes[i].questions.length < 1){
            quizzes.splice(i,1);
            i--;
          }
        }
      this.quizList = quizzes;
    });
    }
  }

  ngOnInit() {
    
  }
  quizLaunched(launch: Quiz) {
    console.log('quiz launch' + launch.id);
    this.router.navigate(['/playquiz/' + launch.id]);
  }

}
