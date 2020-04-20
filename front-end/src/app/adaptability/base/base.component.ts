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
  fontFamily:string;

  constructor(@Inject(LOCAL_STORAGE) protected storage: WebStorageService, protected adaptability: AdaptabilityService) {
    console.log("BaseComponent" + storage);
  }

  ngOnInit(): void {
    this.adaptability.darkMode$.subscribe(v => {
      this.darkMode = v;
    });

    this.adaptability.fontFamily$.subscribe(v=>{
      this.fontFamily=v;
    });
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("Salut dom" + changes);
    console.log(this);

    console.log("Salut dom ready");
    setTimeout(() => this.sizeChooseHandler(JSON.parse(this.storage.get("styleclassname"))), 300);


  }

  sizeChooseHandler(sizechoosen: { className: string, toDisplay: string }) {
    console.log(sizechoosen);
    this.storage.set("styleclassname", JSON.stringify(sizechoosen));
    document.querySelectorAll('.cus-sizable').forEach(balise => {
      const tmpclasses = balise.className.split(' ').filter(cls => !cls.startsWith('cussize-'));
      tmpclasses.push(sizechoosen.className);

      balise.className = tmpclasses.join(' ');


    });

  }

  setClasses() {
    return {
      darktheme: this.darkMode,
      ordinarytheme: !this.darkMode
    }
  }


}
