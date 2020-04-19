import { Component, Inject, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdapterComponent } from './adaptability/adapter/adapter.component';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'PolyQuiz Stormbreakers';
  
}
