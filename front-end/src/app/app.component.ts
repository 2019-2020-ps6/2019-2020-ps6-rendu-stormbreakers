import { Component, Inject, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdapterComponent } from './adaptability/adapter/adapter.component';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { AdaptabilityService } from 'src/services/adaptability.service';
import { BaseComponent } from './adaptability/base/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent{
  title = 'PolyQuiz Stormbreakers';
  
  
  constructor(protected adaptability: AdaptabilityService,@Inject(LOCAL_STORAGE) protected storage: WebStorageService ) {
    super(storage,adaptability);
  }

  
  

  
}
