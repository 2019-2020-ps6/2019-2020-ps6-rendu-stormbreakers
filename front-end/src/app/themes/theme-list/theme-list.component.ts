import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { Theme } from '../../../models/theme.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  public themeList: Theme[] = [];

  constructor(private router:Router,public themeService: ThemeService) {
    //this.quizService.getQuizzes();
    this.themeService.themes$.subscribe((theme: Theme[]) => {this.themeList = theme; console.log(this.themeList); });
  }
  ngOnInit() {
  }
}