import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { Question } from 'src/models/question.model';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AdminDialogDeleteQuestionComponent } from 'src/app/admin/admin-dialog-delete-question/admin-dialog-delete-question.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  
  @Input()
  quiz: Quiz;
  
  constructor(private quizService: QuizService, private router: Router, private dialog : MatDialog) { }

  ngOnInit() {
  }

  deleteQuestion(question: Question) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = question;

    const alertdialog = this.dialog.open(AdminDialogDeleteQuestionComponent, dialogConfig)
    alertdialog.afterClosed().subscribe(isDelete => {
      if (isDelete) {
        this.quizService.deleteQuestion(this.quiz, question);
      }
    });
  }

  @HostListener('window:popstate', ['$event'])
  onBrowserBackBtnClose(event: Event) {
    console.log('back button pressed');
    event.preventDefault(); 
    this.router.navigate(['/'],  {replaceUrl:true});
}

}
