import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import { Statistique } from 'src/models/statistique.model';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from 'src/models/quiz.model';

@Injectable({
  providedIn: 'root'
})

export class StatService{

    private url = serverUrl+'/statistique';
    private statistiques: Statistique[]= []

    public statistiques$: BehaviorSubject<Statistique[]>= new BehaviorSubject<Statistique[]>(this.statistiques)

    constructor(private http:HttpClient){

    }

    addStatistique(stat: Statistique){
        this.http.post<Statistique>(this.url,stat,httpOptionsBase).subscribe(()=>
            this.getStatistiques()
        )
    }

    getStatistiques(){
        this.http.request('GET', this.url, { responseType: 'json' }).subscribe((result:  Statistique[] ) => {
      
            this.statistiques = result;
            this.statistiques$.next(this.statistiques);
      
          });
    }

    getStatistiqueByQuizId(quiz:Quiz){
        this.http.request('GET', this.url+"/"+quiz.id, { responseType: 'json' }).subscribe((result:  Statistique[] ) => {
      
            this.statistiques = result;
            this.statistiques$.next(this.statistiques);
      
          });
    }

    getStatistiqueByQuizIdAndQuestionId(quizId: string, questionId: string) {
        this.http.request('GET', this.url+"/"+quizId+"/"+questionId, { responseType: 'json' }).subscribe((result:  Statistique[] ) => {
      
            this.statistiques = result;
            this.statistiques$.next(this.statistiques);
      
          });
      }

}