import { Component, OnInit, Input, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { AdaptabilityService } from 'src/services/adaptability.service';

@Component({
  selector: 'app-lecteur',
  templateUrl: './lecteur.component.html',
  styleUrls: ['./lecteur.component.css']
})
export class LecteurComponent implements OnInit {

  private visible: boolean

  @Input()
  textToRead: string
  constructor(@Inject(LOCAL_STORAGE) protected storage: WebStorageService, private adaptability:AdaptabilityService) { }

  ngOnInit() {
    this.adaptability.displayScreenReader$.subscribe(v=> {
      this.visible=v;
    })
  }

  readTheText() {
    var msg = new SpeechSynthesisUtterance(this.textToRead);
    msg.lang = 'fr-FR';
    window.speechSynthesis.speak(msg);
  }

}
