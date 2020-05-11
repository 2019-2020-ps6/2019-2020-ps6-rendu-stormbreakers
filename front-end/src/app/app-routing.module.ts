import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { PlayQuizComponent } from './quizzes/play-quiz/play-quiz.component';
import { QuizResultComponent } from './quizzes/quiz-result/quiz-result.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component'
import { AdminCreationQuizComponent } from './admin/admin-creation-quiz/admin-creation-quiz.component';
import { AdminStatistiqueComponent } from './admin/admin-statistique/admin-statistique.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { AdDashboardDefaultComponent } from './admin/ad-dashboard-default/ad-dashboard-default.component';
const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'themes/:themeName/quizzes',
    component: QuizListComponent
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
    component: DashboardAdminComponent,
    children:[
      {
        path:'',
        children:[
            {
              path:'quiz',
              component:AdminCreationQuizComponent
            },{
              path:'statistique',
              component:AdminStatistiqueComponent
            },{
              path:'',
              component:AdDashboardDefaultComponent
            },{
              path:'editquiz/:id',
              component:EditQuizComponent
            }
        ]
      }
    ]
  }
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
