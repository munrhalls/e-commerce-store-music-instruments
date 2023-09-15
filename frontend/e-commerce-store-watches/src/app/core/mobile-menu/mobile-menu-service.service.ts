import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileMenuService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

  toggleMenu() {
    this.isOpen.next(!this.isOpen.value);
  }
}
