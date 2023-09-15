import { MenuToggleService } from '../menu-toggle.service';
import { Component } from '@angular/core';
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

  constructor(private menuToggleService: MenuToggleService) {}

  toggleisMobileMenuOpen() {
    console.log('TOGGLE MENU OPEN');
    this.menuToggleService.toggleMenu();
  }
}
