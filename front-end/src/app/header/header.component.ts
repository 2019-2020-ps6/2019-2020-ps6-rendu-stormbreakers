import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdapterComponent } from '../adaptability/adapter/adapter.component';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { AdaptabilityService } from 'src/services/adaptability.service';
import { BaseComponent } from '../adaptability/base/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  darkMode: boolean;
  fontsAvailable:string[]= ["Roboto","Arial","Lucida Bright","Consolas",
  "Helvetica","Verdana","Calibri"];
  

  constructor(private dialog: MatDialog, @Inject(LOCAL_STORAGE) protected storage: WebStorageService, protected adaptability: AdaptabilityService) {
    super(storage,adaptability);
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

  switchMode(){
    
    this.darkMode=!this.darkMode;
    this.adaptability.darkMode$.next(this.darkMode);
    this.storage.set('theme',this.darkMode);
  }

  onFontChange($event){
    console.log($event)
    if($event !== ""){
      this.adaptability.fontFamily$.next($event);
      this.storage.set('font-family',$event);
    }
    
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
