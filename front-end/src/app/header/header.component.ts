import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdapterComponent } from '../adaptability/adapter/adapter.component';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { AdaptabilityService } from 'src/services/adaptability.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  darkMode: boolean;

  constructor(private dialog: MatDialog, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private adaptability: AdaptabilityService) {

  }
  ngOnInit(): void {
    this.adaptability.darkMode$.subscribe(v=>{
      this.darkMode=v;
    });
  }

  toggleScreenReader() {
    const screenreader = this.storage.get('screenreader');
    if (screenreader == null) {
      this.storage.set('screenreader', true);
      this.adaptability.displayScreenReader$.next(true);
    }
    else {
      this.storage.set('screenreader', !screenreader);
      this.adaptability.displayScreenReader$.next(!screenreader);
      
    }
  }

  setClasses(){
    return {
      darktheme: this.darkMode,
      ordinarytheme:!this.darkMode
    }
  }

  switchMode(){
    
    this.darkMode=!this.darkMode;
    this.adaptability.darkMode$.next(this.darkMode);
    this.storage.set('theme',this.darkMode);
  }


  clickMe() {
    this.dialog.open(AdapterComponent, {
      autoFocus: true,
      disableClose: false,
      width: '500px',
      position: {
        top: '25px',
        left: '25px',


      }
    });
  }

}
