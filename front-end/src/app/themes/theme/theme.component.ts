import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Theme } from '../../../models/theme.model';
import { ThemeService } from 'src/services/theme.service';
@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  @Input()
  theme: Theme;

  @Output()
  themeLaunched: EventEmitter<Theme> = new EventEmitter<Theme>();
  isLast:boolean = false;
  constructor(private themeService: ThemeService) {
    
  }

  ngOnInit() {

  }
}
