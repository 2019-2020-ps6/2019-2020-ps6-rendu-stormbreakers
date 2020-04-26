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
  private themesPath = 'themes';

  private quizzes: Quiz[] = QUIZ_LIST;
  private questions: Question[];
  private themes: String[];
  private quizPlayed: Quiz;
  private currentTheme: String;
  private lastCreatedQuiz: Quiz;
  private lastCreatedQst: Question;
  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);
  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);
  public themes$: BehaviorSubject<String[]> = new BehaviorSubject(this.themes);
  public quizPlayed$: BehaviorSubject<Quiz> = new BehaviorSubject(this.quizPlayed);
  public currentTheme$: BehaviorSubject<String> = new BehaviorSubject(this.currentTheme);
  public lastCreatedQuiz$: BehaviorSubject<Quiz> = new BehaviorSubject(this.lastCreatedQuiz);
  public lastCreatedQst$: BehaviorSubject<Question> = new BehaviorSubject(this.lastCreatedQst);

  constructor(private http: HttpClient) {
    this.getQuizzes();
  }

  addQuiz(quiz: Quiz) {
    this.http.post<Quiz>(this.quizUrl, quiz, httpOptionsBase).subscribe((response) => {
      this.getQuizzes();
      this.lastCreatedQuiz = response;
      this.lastCreatedQuiz$.next(this.lastCreatedQuiz);
    })
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject

  }

  deleteQuiz(deleted: Quiz) {
    this.http.delete<Quiz>(this.quizUrl + '/' + deleted.id).subscribe(() => this.getQuizzes());

  }

  getQuizzes() {
    this.http.request('GET', this.quizUrl, { responseType: 'json' }).subscribe((result: Quiz[]) => {

      this.quizzes = result;
      this.quizzes$.next(this.quizzes);

    });
  }

  getThemes(){
    this.http.get<String[]>(this.themesPath, { responseType: 'json' }).subscribe(() => {
      this.getQuizzes();
      this.quizzes.forEach((q) => {
        this.themes.push(q.theme);
      })
      console.log("THEMES");
      console.log(this.themes);
      this.themes$.next(this.themes);
    })
  }

  getQuizzesByTheme(theme: string){
    this.http.request('GET', serverUrl+"/" + this.themesPath + "/" + theme + "/quizzes", { responseType: 'json' }).subscribe((result: Quiz[]) => {

      this.quizzes = result;
      this.quizzes$.next(this.quizzes);

    });
  }
  getSelectQuiz(quizId: string) {
    this.http.get<Quiz>(this.quizUrl + '/' + quizId, { responseType: 'json' }).subscribe((quiz) => {
      this.quizPlayed$.next(quiz);
    });
  }

  addQuestion(quiz: Quiz, question: Question) {
    const questionUrl = `${this.quizUrl}/${quiz.id}/${this.questionsPath}`;
    this.http.post<Question>(questionUrl, question, httpOptionsBase).subscribe(() => this.getSelectQuiz(quiz.id));
  }

  deleteQuestion(quiz: Quiz, question: Question) {
    console.log(question);
    const questionUrl = this.quizUrl + '/' + quiz.id + '/' + this.questionsPath + '/' + question.id;
    this.http.delete<Question>(questionUrl, httpOptionsBase).subscribe(() => this.getSelectQuiz(quiz.id));
  }
}
