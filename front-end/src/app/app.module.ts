import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageServiceModule } from 'angular-webstorage-service';
import { CookieService } from 'ngx-cookie-service';
import { AdapterComponent } from './adaptability/adapter/adapter.component';
import { BaseSizeChooserComponent } from './adaptability/base-size-chooser/base-size-chooser.component';
import { BaseThemeComponent } from './adaptability/base-theme/base-theme.component';
import { ModalAdapterComponent } from './adaptability/modal-adapter/modal-adapter.component';
import { SizeChooserContainerComponent } from './adaptability/size-chooser-container/size-chooser-container.component';
import { SliderSizeComponent } from './adaptability/slider-size/slider-size.component';
import { ThemeContainerComponent } from './adaptability/theme-container/theme-container.component';
import { AdminCreationQuizComponent } from './admin/admin-creation-quiz/admin-creation-quiz.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { PlayQuestionComponent } from './quizzes/play-question/play-question.component';
import { PlayQuizComponent } from './quizzes/play-quiz/play-quiz.component';
import { QuestionFormComponent } from './quizzes/question-form/question-form.component';
import { QuestionListComponent } from './quizzes/question-list/question-list.component';
import { QuestionComponent } from './quizzes/question/question.component';
import { QuizAdminComponent } from './quizzes/quiz-admin/quiz-admin.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizResultComponent } from './quizzes/quiz-result/quiz-result.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { BaseComponent } from './adaptability/base/base.component';





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
    ThemeContainerComponent,
    BaseThemeComponent,
    AdminComponent,
    DashboardAdminComponent,
    AdminCreationQuizComponent,
    QuizAdminComponent,
    QuestionListComponent,
    QuestionComponent,
    AdapterComponent,
    SizeChooserContainerComponent,
    BaseSizeChooserComponent,
    ModalAdapterComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule

  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [AdapterComponent]
})
export class AppModule { }
