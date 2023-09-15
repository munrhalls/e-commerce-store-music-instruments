import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  isMobileMenuOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}
  toggleMobileMenu() {
    this.isMobileMenuOpen.next(!this.isMobileMenuOpen.value);
    console.log('Menu open: ' + this.isMobileMenuOpen.value);
  }
}
