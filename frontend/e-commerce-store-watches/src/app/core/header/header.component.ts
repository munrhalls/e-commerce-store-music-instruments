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
  isMobileMenuOpen: boolean = false;
  isMobileSearchOpen: boolean = false;

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
    this.menuService.toggleMobileSearchFormOpen();
  }
  ngOnInit(): void {
    this.menuService.isMobileMenuOpen
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isMobileMenuOpen) => {
        this.isMobileMenuOpen = isMobileMenuOpen;
        if (this.isMobileMenuOpen === true) {
          this.renderer.addClass(document.body, 'no-scroll');
        } else {
          this.renderer.removeClass(document.body, 'no-scroll');
        }
      });
    this.menuService.isMobileSearchOpen
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isMobileSearchOpen) => {
        this.isMobileSearchOpen = isMobileSearchOpen;
        if (this.isMobileSearchOpen === true) {
          this.renderer.addClass(document.body, 'no-scroll');
        } else {
          this.renderer.removeClass(document.body, 'no-scroll');
        }
      });
  }

  ngOnDestroy(): void {}
}
