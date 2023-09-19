import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuService } from '../menu-service.service';
import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';
import {
  faSearch,
  faUser,
  faShieldAlt,
  faShoppingCart,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  openElementName: string = '';
  faSearch = faSearch;
  faUser = faUser;
  faShieldAlt = faShieldAlt;
  faShoppingCart = faShoppingCart;
  faBars = faBars;
  faTimes = faTimes;

  constructor(private menuService: MenuService, private renderer: Renderer2) {}

  toggleMobileMenu() {
    this.menuService.toggleMobileMenu();
  }
  toggleSearchForm() {
    this.menuService.toggleMobileSearch();
  }
  toggleAuthenticateForm() {
    this.menuService.toggleAuthenticateForm();
  }

  ngOnInit(): void {
    this.menuService.openElementName
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((openElementName: string) => {
        this.openElementName = openElementName;
        if (this.openElementName?.length > 0) {
          this.renderer.addClass(document.body, 'no-scroll');
        } else {
          this.renderer.removeClass(document.body, 'no-scroll');
        }
      });
    console.log(this.openElementName);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
