import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  openElementName: BehaviorSubject<string> = new BehaviorSubject('');
  private previousUrl: string = '/';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.previousUrl = params['previousUrl'] || '/';
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
    this.router
      .navigate([this.previousUrl])
      .catch((err) => console.error('Navigation Error:', err));
  }
}
