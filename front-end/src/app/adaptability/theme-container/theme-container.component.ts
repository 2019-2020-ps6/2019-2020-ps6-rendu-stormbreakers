import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { AdaptabilityService } from 'src/services/adaptability.service';

@Component({
  selector: 'app-theme-container',
  templateUrl: './theme-container.component.html',
  styleUrls: ['./theme-container.component.css']
})
export class ThemeContainerComponent implements OnInit {

  themesList: string[] = ['custheme-dark', 'custheme-light'];
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private adaptability:AdaptabilityService) { }

  ngOnInit() {
    const theme = this.storage.get('uithemed');
    if (theme != null) {
      document.addEventListener('DOMContentLoaded', () => this.themeHandler(theme));

    }
  }

  themeHandler(theme: string) {

    document.querySelectorAll('.themed:not(.static-themed)').forEach(balise => {


      const tmpclasses = balise.className.split(' ').filter(cls => !cls.startsWith('custheme-'));
      tmpclasses.push(theme);
      balise.className = tmpclasses.join(' ');


    });

    this.storage.set('uithemed', theme);
  }

  switchToDarkMode(){
    
    this.adaptability.darkMode$.next(true);
  }

  switchToLightMode(){
    
    this.adaptability.darkMode$.next(false);
  }
}
