import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import { HttpClient } from '@angular/common/http';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import { Question } from 'src/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */

  private quizUrl = serverUrl + '/quizzes';
  private questionsPath = 'questions';

  private quizzes: Quiz[] = QUIZ_LIST;
  private questions: Question[];
  private quizPlayed:Quiz;
  private lastCreatedQuiz:Quiz;
  private lastCreatedQst: Question;
  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);
  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);
  public quizPlayed$: BehaviorSubject<Quiz> = new BehaviorSubject(this.quizPlayed);
  public lastCreatedQuiz$: BehaviorSubject<Quiz> = new BehaviorSubject(this.lastCreatedQuiz);
  public lastCreatedQst$: BehaviorSubject<Question> = new BehaviorSubject(this.lastCreatedQst);

  constructor(private http: HttpClient) {
    this.getQuizzes();
  }

  addQuiz(quiz: Quiz) {
    this.http.post<Quiz>(this.quizUrl,quiz,httpOptionsBase).subscribe((response)=> {
      this.getQuizzes()
      this.lastCreatedQuiz = response;
      this.lastCreatedQuiz$.next(this.lastCreatedQuiz);
    })
    this.http.post<Quiz>(this.quizUrl,quiz,httpOptionsBase)
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    
  }

  deleteQuiz(deleted: Quiz) {
    //this.quizzes = this.quizzes.filter(q => q.name !== deleted.name /*&& q.theme !== deleted.name*/);
    this.http.delete<Quiz>(this.quizUrl+"/"+deleted.id).subscribe(() => this.getQuizzes());
  //  this.quizzes$.next(this.quizzes);
  }

  getQuizzes() {
    this.http.request('GET', this.quizUrl, { responseType: 'json' }).subscribe((result:  Quiz[] ) => {
      
      this.quizzes = result;
      this.quizzes$.next(this.quizzes);

    });
  }

  getSelectQuiz(quizId: String){
    this.http.get<Quiz>(this.quizUrl + "/" + quizId, {responseType : "json"}).subscribe((quiz) => {
      this.quizPlayed$.next(quiz);
    })
  }

  addQuestion(quiz: Quiz, question: Question) {
    const questionUrl = this.quizUrl + '/' + quiz.id + '/' + this.questionsPath;
    this.http.post<Question>(questionUrl, question, httpOptionsBase).subscribe(() => this.getSelectQuiz(quiz.id));
  }

  deleteQuestion(quiz: Quiz, question: Question) {
    console.log(question)
    const questionUrl = this.quizUrl + '/' + quiz.id + '/questions/' + question.id;
    this.http.delete<Question>(questionUrl, httpOptionsBase).subscribe(() => this.getSelectQuiz(quiz.id));
  }
}