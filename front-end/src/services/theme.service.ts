import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { serverUrl } from '../configs/server.config';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */

  private url = serverUrl+"/themes";
  private themes : string[];
  private currentTheme: string;
  private lastCreatedTheme: string;
  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public themes$: BehaviorSubject<string[]> = new BehaviorSubject(this.themes);
  public currentTheme$: BehaviorSubject<string> = new BehaviorSubject(this.currentTheme);
  public lastCreatedTheme$: BehaviorSubject<string> = new BehaviorSubject(this.lastCreatedTheme);

  constructor(private http: HttpClient) {
    this.getThemes();
  }

  addTheme(theme: string) {
    this.themes.push(theme);
    this.themes$.next(this.themes);
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  }
  
/*
  deleteTheme(deleted: Theme) {
    this.themes = this.themes.filter(q => q.name !== deleted.name /*&& q.theme !== deleted.name);
    this.themes$.next(this.themes);
  }
*/
  getThemes() {
    this.http.request('GET', this.url, { responseType: 'json' }).subscribe((result: string[]) => {
      this.themes = result;
      this.themes$.next(this.themes);
    })
  }

  getThemeByName(name:string){
    this.http.request('GET', this.url + "/" + name,{ responseType: 'json' }).subscribe((result: string) => {
      this.currentTheme$.next(result);
    });
  }
}
