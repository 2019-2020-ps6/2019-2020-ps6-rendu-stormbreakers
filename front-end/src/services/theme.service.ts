import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme} from '../models/theme.model';
import { THEME_LIST } from '../mocks/quiz-list.mock';
import { HttpClient } from '@angular/common/http';
import { serverUrl, httpOptionsBase } from '../configs/server.config';

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
  private themes: Theme[] = THEME_LIST;
  private currentTheme:Theme;
  private lastCreatedTheme:Theme;
  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public themes$: BehaviorSubject<Theme[]> = new BehaviorSubject(this.themes);
  public currentTheme$: BehaviorSubject<Theme> = new BehaviorSubject(this.currentTheme);
  public lastCreatedTheme$: BehaviorSubject<Theme> = new BehaviorSubject(this.lastCreatedTheme);

  constructor(private http: HttpClient) {
    this.getThemes();
  }

  addTheme(theme: Theme) {
    this.themes.push(theme);
    this.themes$.next(this.themes);
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  }
  
  addThemeToServer(theme: Theme){
    this.http.post<Theme>(this.url, theme, httpOptionsBase).subscribe((response) => {
      this.getThemes();
      this.lastCreatedTheme=response;
      this.lastCreatedTheme$.next(this.lastCreatedTheme);
    })
  }
/*
  deleteTheme(deleted: Theme) {
    this.themes = this.themes.filter(q => q.name !== deleted.name /*&& q.theme !== deleted.name);
    this.themes$.next(this.themes);
  }
*/
  getThemes() {
    this.http.request('GET', this.url, { responseType: 'json' }).subscribe((result: Theme[]) => {
    
      this.themes = result;
      this.themes$.next(this.themes);
    //  console.log(result)
    });
  }

  getThemesByName(name:String){
    this.http.request('GET', this.url+"/"+name,{ responseType: 'json' }).subscribe((result: Theme) => {
      this.currentTheme$.next(result);
    //  console.log(result)
    });
  }
}
