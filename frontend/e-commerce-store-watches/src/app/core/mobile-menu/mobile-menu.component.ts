import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from './../menu-service.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
})
export class MobileMenuComponent implements OnInit, OnDestroy {
  constructor(private menuService: MenuService) {}
  isOpen: boolean = false;

  ngOnInit(): void {
    this.menuService.isMobileMenuOpen.subscribe((isMobileMenuOpen) => {
      this.isOpen = isMobileMenuOpen;
    });
  }

  ngOnDestroy(): void {
    this.menuService.isMobileMenuOpen.unsubscribe();
  }
}
