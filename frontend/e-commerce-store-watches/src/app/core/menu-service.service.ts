import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  openElementName: BehaviorSubject<string> = new BehaviorSubject('');
  private previousUrl: string = '/';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.previousUrl = params['previousUrl'] || '/';
    });
  }

  toggleMobileMenu() {
    this.openElementName.next(
      this.openElementName.value === 'mobile-menu' ? '' : 'mobile-menu'
    );
    this.navigateToPreviousURL();
  }

  toggleMobileSearch() {
    this.openElementName.next(
      this.openElementName.value === 'mobile-search' ? '' : 'mobile-search'
    );
    this.navigateToPreviousURL();
  }

  toggleAuthenticate() {
    this.openElementName.next(
      this.openElementName.value === 'authenticate' ? '' : 'authenticate'
    );
    this.handleAuthenticateRouting();
  }
  handleAuthenticateRouting() {
    if (this.openElementName.value === 'authenticate') {
      this.router
        .navigate(['/authenticate'])
        .catch((err) => console.error('Navigation Error:', err));
    } else {
      this.navigateToPreviousURL();
    }
  }
  navigateToPreviousURL() {
    this.router
      .navigate([this.previousUrl])
      .catch((err) => console.error('Navigation Error:', err));
  }
}
