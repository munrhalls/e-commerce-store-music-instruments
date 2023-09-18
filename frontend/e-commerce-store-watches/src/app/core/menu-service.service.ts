import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  openElementName: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {}

  toggleMobileMenu() {
    this.openElementName.next(
      this.openElementName.value === 'mobile-menu' ? '' : 'mobile-menu'
    );
    console.log('Menu open: ' + this.openElementName.value);
  }

  toggleMobileSearchFormOpen() {
    this.openElementName.next(
      this.openElementName.value === 'mobile-search' ? '' : 'mobile-search'
    );

    console.log('Mobile search form open: ' + this.openElementName.value);
  }
}
