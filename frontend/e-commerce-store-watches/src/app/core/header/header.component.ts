import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuService } from '../menu-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  faSearch,
  faUser,
  faShieldAlt,
  faShoppingCart,
  faBars,
  faTimes,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  isMobileMenuOpen = false;
  faSearch = faSearch;
  faUser = faUser;
  faShieldAlt = faShieldAlt;
  faShoppingCart = faShoppingCart;
  faBars = faBars;
  faTimes = faTimes;

  constructor(private menuService: MenuService) {}

  toggleMobileMenu() {
    this.menuService.toggleMobileMenu();
  }
  ngOnInit(): void {
    this.menuService.isMobileMenuOpen
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isMobileMenuOpen) => {
        this.isMobileMenuOpen = isMobileMenuOpen;
      });
  }

  ngOnDestroy(): void {}
}
