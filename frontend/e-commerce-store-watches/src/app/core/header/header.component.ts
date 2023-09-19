import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuService } from '../menu-service.service';
import { Component, Renderer2, OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit {
  openElementName: string = '';
  isAuthenticationOpen: boolean = false;
  faSearch = faSearch;
  faUser = faUser;
  faShieldAlt = faShieldAlt;
  faShoppingCart = faShoppingCart;
  faBars = faBars;
  faTimes = faTimes;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService,
    private renderer: Renderer2
  ) {}

  toggleMobileMenu() {
    this.menuService.toggleMobileMenu();
  }
  toggleMobileSearch() {
    this.menuService.toggleMobileSearch();
  }
  openAuthenticateURL() {
    this.menuService.openAuthenticateURL();
  }
  closeAuthenticateURL() {
    this.menuService.closeAuthenticateURL();
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        if (url.includes('authenticate')) {
          this.menuService.setOpenElementNameManually('');
          this.isAuthenticationOpen = true;
        } else {
          this.isAuthenticationOpen = false;
        }
      }
    });

    this.menuService.openElementName.subscribe((openElementName: string) => {
      this.openElementName = openElementName;
      if (this.openElementName?.length > 0) {
        this.isAuthenticationOpen = false;
        this.renderer.addClass(document.body, 'no-scroll');
      } else {
        this.renderer.removeClass(document.body, 'no-scroll');
      }
    });
  }
}
