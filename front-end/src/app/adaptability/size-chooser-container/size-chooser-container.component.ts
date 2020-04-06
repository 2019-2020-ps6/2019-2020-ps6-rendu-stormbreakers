import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-size-chooser-container',
  templateUrl: './size-chooser-container.component.html',
  styleUrls: ['./size-chooser-container.component.css']
})
export class SizeChooserContainerComponent implements OnInit {

  sizeList: string[] = ['cussize-1x', 'cussize-2x', 'cussize-3x', 'cussize-4x'];
  constructor() { }

  ngOnInit() {
  }

  sizeChooseHandler(sizechoosen: string) {
    console.log(sizechoosen);
    document.querySelectorAll('.cus-sizable').forEach(balise => {
      const tmpclasses = balise.className.split(' ').filter(cls => !cls.startsWith('cussize-'));
      tmpclasses.push(sizechoosen);

      balise.className = tmpclasses.join(' ');


    });

  }

}
