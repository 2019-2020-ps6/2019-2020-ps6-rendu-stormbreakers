import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { QuestionFormComponent } from './quizzes/question-form/question-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SliderSizeComponent } from './adaptability/slider-size/slider-size.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { PlayQuizComponent } from './quizzes/play-quiz/play-quiz.component';
import { PlayQuestionComponent } from './quizzes/play-question/play-question.component';
import { QuizResultComponent } from './quizzes/quiz-result/quiz-result.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { AdminCreationQuizComponent } from './admin/admin-creation-quiz/admin-creation-quiz.component';
import { QuizAdminComponent } from './quizzes/quiz-admin/quiz-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    EditQuizComponent,
    QuestionFormComponent,
    HeaderComponent,
    SliderSizeComponent,
    PlayQuizComponent,
    PlayQuestionComponent,
    QuizResultComponent,
    AdminComponent,
    DashboardAdminComponent,
    AdminCreationQuizComponent,
    QuizAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
