import { Component, OnInit, Inject } from '@angular/core';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { AdaptabilityService } from 'src/services/adaptability.service';

@Component({
  selector: 'app-size-chooser-container',
  templateUrl: './size-chooser-container.component.html',
  styleUrls: ['./size-chooser-container.component.css']
})
export class SizeChooserContainerComponent implements OnInit {

  sizeList: object[] = [{ sizeLevel: 1, toDisplay: '1x' }, { sizeLevel: 2, toDisplay: '2x' }
    , { sizeLevel: 3, toDisplay: '3x' }, { sizeLevel: 4, toDisplay: '4x' }];
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private adaptability:AdaptabilityService) { }

  ngOnInit() {

  }

  sizeChooseHandler(sizechoosen: { sizeLevel: number, toDisplay: string }) {
    console.log(sizechoosen);
    this.storage.set('layout-size', JSON.stringify(sizechoosen.sizeLevel));
    this.adaptability.size$.next(sizechoosen.sizeLevel)
    

  }

}
