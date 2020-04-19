import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(
    private cookieService:CookieService,
    private  router:Router,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    if(this.cookieService.check('connect')){
      if(this.cookieService.get('connect')==='false'){
      this.router.navigate(['admin']);
      }
    }else{
      this.router.navigate(['admin']);
    }
  }
      
  goToCreation(){
    this.router.navigate(['admin/quiz']);
  }
  
  goToStat(){
    this.router.navigate(['admin/statistique']);
  }

}
