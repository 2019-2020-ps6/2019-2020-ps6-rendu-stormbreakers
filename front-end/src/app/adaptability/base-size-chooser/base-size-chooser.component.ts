import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-size-chooser',
  templateUrl: './base-size-chooser.component.html',
  styleUrls: ['./base-size-chooser.component.css']
})
export class BaseSizeChooserComponent implements OnInit {

  @Input()
  csssize: string;
  @Output()
  sizeChoosen: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  chooseSizeSample() {

    this.sizeChoosen.emit(this.csssize);
  }

}
