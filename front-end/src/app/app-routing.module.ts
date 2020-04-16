import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { PlayQuizComponent } from './quizzes/play-quiz/play-quiz.component';
import { QuizResultComponent } from './quizzes/quiz-result/quiz-result.component';
import { ThemeListComponent} from './themes/theme-list/theme-list.component'
import {ThemeComponent} from './themes/theme/theme.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component'
import { AdminCreationQuizComponent } from './admin/admin-creation-quiz/admin-creation-quiz.component';
import { AdminStatistiqueComponent } from './admin/admin-statistique/admin-statistique.component';
const routes: Routes = [
  
  {
    path: '',
    component: QuizListComponent,
  },
  {
    path: 'playquiz/:id',
    component: PlayQuizComponent
  },
  {
    path: 'playquiz/:id/results',
    component: QuizResultComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/dashboard',
    component: DashboardAdminComponent
  },
  {
    path: 'admin/quiz',
    component: AdminCreationQuizComponent
  },
  {
    path: 'admin/statistique',
    component: AdminStatistiqueComponent
  },
  {
    path: 'admin/editquiz/:id',
    component: EditQuizComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
