import { Component, OnInit } from '@angular/core';
import { MenuToggleService } from '../menu-toggle.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
})
export class MobileMenuComponent implements OnInit {
  constructor(private menuToggleService: MenuToggleService) {}
  isOpen: boolean = false;

  ngOnInit(): void {
    this.menuToggleService.isMobileMenuOpenSubject.subscribe(
      (isOpen: boolean) => {
        this.isOpen = isOpen;
      }
    );
  }
}
