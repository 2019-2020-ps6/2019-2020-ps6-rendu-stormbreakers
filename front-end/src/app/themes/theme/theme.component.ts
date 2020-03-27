import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Theme } from '../../../models/theme.model';
@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  @Input()
  themes: Theme;

  @Output()
  themeLaunched: EventEmitter<Theme> = new EventEmitter<Theme>();

  constructor() {
  }

  ngOnInit() {
  }
}
