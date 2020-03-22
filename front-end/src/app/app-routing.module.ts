import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { PlayQuizComponent } from './quizzes/play-quiz/play-quiz.component';
import { QuizResultComponent } from './quizzes/quiz-result/quiz-result.component';
const routes: Routes = [
  {
    path: '',
    component: QuizListComponent,
  },
  {
    path: 'editquiz/:id',
    component: EditQuizComponent
  },
  {
    path: 'playquiz/:id',
    component: PlayQuizComponent
  },
  {
    path: 'playquiz/:id/results',
    component: QuizResultComponent
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
