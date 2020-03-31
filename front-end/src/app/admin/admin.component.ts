import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  connectForm: FormGroup;
  wrongPassword = false;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private cookieService: CookieService) {

  }

  ngOnInit() {
    this.connectForm = this.formBuilder.group({
      password: [],
    });
    this.cookieService.set('connect', 'false');
    this.cookieService.get('connect');
  }

  login() {
    if (this.connectForm.get('password').value !== '1234abcd') {
      this.wrongPassword = true;
      this.cookieService.set('connect', 'false');
      this.cookieService.get('connect');
    } else {
      console.log('good password');
      this.cookieService.set('connect', 'true');
      this.cookieService.get('connect');
      this.router.navigate([this.router.url + '/dashboard']);
    }

  }

}
