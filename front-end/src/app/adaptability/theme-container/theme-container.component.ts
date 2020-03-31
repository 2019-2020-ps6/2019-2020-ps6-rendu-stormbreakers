import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-container',
  templateUrl: './theme-container.component.html',
  styleUrls: ['./theme-container.component.css']
})
export class ThemeContainerComponent implements OnInit {

  themesList: string[] = ['custheme-dark', 'custheme-light'];
  constructor() { }

  ngOnInit() {
  }

  themeHandler(theme: string) {
    document.querySelectorAll('.themed').forEach(balise => {
      const regx = new RegExp('\\b' + 'custheme-' + '.*?\\b', 'g');
      balise.className = balise.className.replace(regx, theme);
    });
  }
}
