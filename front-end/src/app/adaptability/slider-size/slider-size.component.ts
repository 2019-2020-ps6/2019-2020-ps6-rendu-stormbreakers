import { Component, OnInit, Inject } from '@angular/core';

import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

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

      document.querySelector('body').style.fontSize = `${this.taille}pt`;
    }
  }

  fontSizeChanged(event) {
    this.taille = event.target.value;
    console.log(this.taille);
    this.storage.set('userfontsize', this.taille);
    document.querySelector('body').style.fontSize = `${this.taille}pt`;
 
  }

}
