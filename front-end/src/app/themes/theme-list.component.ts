import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';
import { ThemeService } from 'src/services/theme.service';
import { BaseComponent } from '../adaptability/base/base.component';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { AdaptabilityService } from 'src/services/adaptability.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent extends BaseComponent implements OnInit {

 
  public themeList: string[] = [];

  constructor(private router:Router,public quizService: QuizService, public themeService: ThemeService,@Inject(LOCAL_STORAGE) protected storage: WebStorageService, protected adaptability: AdaptabilityService) {
    super(storage,adaptability);
    this.themeService.themes$.subscribe((themes: string[]) => {
      this.themeList = themes;
    });
  }

  ngOnInit() {
    super.ngOnInit();
  }
  
  toQUizList(themeName: string){
    this.router.navigate(['/themes/' + themeName.toLowerCase() + '/quizzes'], { state: { result: themeName } });
  }
}