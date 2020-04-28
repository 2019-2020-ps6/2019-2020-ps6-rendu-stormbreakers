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

  public themeList: string[] = [];

  constructor(private router:Router,public quizService: QuizService, public themeService: ThemeService) {
    this.themeService.themes$.subscribe((themes: string[]) => {
      this.themeList = themes;
    });
  }

  ngOnInit() {
  }
  
  toQUizList(themeName: string){
    this.router.navigate(['/themes/' + themeName + '/quizzes']);
  }
}