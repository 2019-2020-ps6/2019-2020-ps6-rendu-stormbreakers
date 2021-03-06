import { Component, OnInit, Inject } from '@angular/core';

import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Button } from 'protractor';

@Component({
  selector: 'app-slider-size',
  templateUrl: './slider-size.component.html',
  styleUrls: ['./slider-size.component.css']
})
export class SliderSizeComponent implements OnInit {

  taille: number;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }

  ngOnInit() {
    this.taille = this.storage.get('userfontsize');
    if (this.taille != null) {
      //console.log("test");
      document.querySelector('body').style.fontSize = `${this.taille}pt`;
      document.addEventListener('DOMContentLoaded',()=>{
        console.log(document.querySelectorAll('button').length);
        Array.from(document.querySelectorAll('button')).map((button)=>this.changeTextSize(button));
      })
      
    }
  }

  fontSizeChanged(event) {
    this.taille = event.target.value;
    console.log(this.taille);
    this.storage.set('userfontsize', this.taille);
    document.querySelector('body').style.fontSize = `${this.taille}pt`;
    Array.from(document.querySelectorAll('button')).map((button)=> this.changeTextSize(button))
  }

  changeTextSize(btn) {
    const btnSize=((this.taille)/2);
    btn.style.fontSize= `${btnSize}pt`;
  }

}
