import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-size-chooser-container',
  templateUrl: './size-chooser-container.component.html',
  styleUrls: ['./size-chooser-container.component.css']
})
export class SizeChooserContainerComponent implements OnInit {

  sizeList: object[] = [{ className: 'cussize-1x', toDisplay: '1x' }, { className: 'cussize-2x', toDisplay: '2x' }
    , { className: 'cussize-3x', toDisplay: '3x' }, { className: 'cussize-4x', toDisplay: '4x' }];
  constructor() { }

  ngOnInit() {
  }

  sizeChooseHandler(sizechoosen: { className: string, toDisplay: string }) {
    console.log(sizechoosen);
    document.querySelectorAll('.cus-sizable').forEach(balise => {
      const tmpclasses = balise.className.split(' ').filter(cls => !cls.startsWith('cussize-'));
      tmpclasses.push(sizechoosen.className);

      balise.className = tmpclasses.join(' ');


    });

  }

}
