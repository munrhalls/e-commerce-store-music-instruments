import { MenuService } from '../menu-service.service';
import { Component, OnInit, Inject } from '@angular/core';
import {
  faSearch,
  faUser,
  faShieldAlt,
  faShoppingCart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faSearch = faSearch;
  faUser = faUser;
  faShieldAlt = faShieldAlt;
  faShoppingCart = faShoppingCart;
  faBars = faBars;

  constructor(private menuService: MenuService) {}

  toggleMobileMenu() {
    this.menuService.toggleMobileMenu();
  }
}
