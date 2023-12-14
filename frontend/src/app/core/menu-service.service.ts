import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  Router,
  ActivatedRoute,
  Event as NavigationEvent,
  NavigationEnd,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  openElementName: BehaviorSubject<string> = new BehaviorSubject('');
  private urlStack: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (!this.urlStack.includes(event.urlAfterRedirects)) {
            this.urlStack.push(event.urlAfterRedirects);
          }
        }
      });
  }
  setOpenElementNameManually(name: string) {
    this.openElementName.next(name);
  }
  toggleMobileMenu() {
    this.openElementName.next(
      this.openElementName.value === 'mobile-menu' ? '' : 'mobile-menu'
    );
    this.closeAuthenticateURL();
  }
  toggleMobileSearch() {
    this.openElementName.next(
      this.openElementName.value === 'mobile-search' ? '' : 'mobile-search'
    );
    this.closeAuthenticateURL();
  }
  openAuthenticateURL() {
    this.router
      .navigate(['/authenticate'])
      .catch((err) => console.error('Navigation Error:', err));
  }
  closeAuthenticateURL() {
    if (this.urlStack.length > 1) {
      this.urlStack.pop(); // Remove current URL
      const lastUrl = this.urlStack.pop() || '/'; // Get last URL
      this.router
        .navigate([lastUrl])
        .catch((err) => console.error('Navigation Error:', err));
    } else {
      this.router
        .navigate(['/'])
        .catch((err) => console.error('Navigation Error:', err)); // Default route
    }
  }
}
