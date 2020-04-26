import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  public themeList: String[] = [];

  constructor(private router:Router,public quizService: QuizService, public themeService: ThemeService) {
    this.themeService.themes$.subscribe((themes: String[]) => {
      this.themeList = themes;
    });
  }

  ngOnInit() {
  }
  
  toQUizList(themeName: String){
    this.router.navigate(['/themes/' + themeName + '/quizzes']);
  }
}