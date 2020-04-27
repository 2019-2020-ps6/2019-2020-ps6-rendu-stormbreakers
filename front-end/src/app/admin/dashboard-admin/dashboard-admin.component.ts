import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  quizToDispaly:Quiz;
  constructor(
    private cookieService:CookieService,
    private  router:Router,
    private route: ActivatedRoute,
    private quizService:QuizService) { 
      quizService.quizzes$.subscribe((quizzes)=>this.quizToDispaly=quizzes[0])
    }

  ngOnInit() {
    if(this.cookieService.check('connect')){
      if(this.cookieService.get('connect')==='false'){
      this.router.navigate(['admin']);
      }
    }else{
      this.router.navigate(['admin']);
    }
    this.quizService.getQuizzes();
  }
      
  goToCreation(){
    this.router.navigate(['admin/quiz']);
  }
  
  goToStat(){
    this.router.navigate(['admin/statistique']);
  }

}
