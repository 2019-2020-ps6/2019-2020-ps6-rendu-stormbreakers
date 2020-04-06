import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-base-theme',
  templateUrl: './base-theme.component.html',
  styleUrls: ['./base-theme.component.css']
})
export class BaseThemeComponent implements OnInit {

  @Input()
  csstheme: string;

  @Output()
  themeChosen: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  choseTheme() {

    this.themeChosen.emit(this.csstheme);
  }

}
