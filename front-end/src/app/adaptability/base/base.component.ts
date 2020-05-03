import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { AdaptabilityService } from 'src/services/adaptability.service';

@Component({
  selector: 'app-base',
  template: `
    <p>
      base works!
    </p>
  `,
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  protected darkMode: boolean;
  fontFamily: string = '';
  protected size: number;

  constructor(@Inject(LOCAL_STORAGE) protected storage: WebStorageService, protected adaptability: AdaptabilityService) {
    console.log("BaseComponent" + storage);
  }

  ngOnInit(): void {
    this.adaptability.darkMode$.subscribe(v => {
      this.darkMode = v;
    });

    this.adaptability.fontFamily$.subscribe(v => {
      this.fontFamily = v;
    });
    this.adaptability.size$.subscribe(v =>
      this.size = v
    )
  }

  

  

  setClasses() {
    return {
      darktheme: this.darkMode,
      ordinarytheme: !this.darkMode,
      cusize1x: this.size == 1,
      cusize2x: this.size == 2,
      cusize3x: this.size == 3,
      cusize4x: this.size == 4
    }
  }


}
