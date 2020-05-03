import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class AdaptabilityService {
  public displayScreenReader$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public darkMode$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public fontFamily$: BehaviorSubject<string> = new BehaviorSubject('');
  public size$: BehaviorSubject<number> = new BehaviorSubject(1);
  constructor(@Inject(LOCAL_STORAGE) protected storage: WebStorageService) {
    let tmp = storage.get('screenreader');
    if (tmp != null) {
      this.displayScreenReader$.next(tmp);
    }

    tmp = storage.get("theme")
    if (tmp != null) {
      this.darkMode$.next(tmp);
    }

    tmp = storage.get('font-family')
    if (tmp != null) {
      this.fontFamily$.next(tmp);
    }

    tmp = storage.get('layout-size')

    if (tmp != null) {
      this.size$.next(parseInt(tmp));
    }


  }
}
