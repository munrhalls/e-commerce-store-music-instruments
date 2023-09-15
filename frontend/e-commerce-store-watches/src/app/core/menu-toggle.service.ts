import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuToggleService {
  public isMobileMenuOpenSubject: BehaviorSubject<boolean> =
    new BehaviorSubject(false);

  toggleMenu() {
    this.isMobileMenuOpenSubject.next(!this.isMobileMenuOpenSubject.value);

    console.log(this.isMobileMenuOpenSubject.value);
  }
}
