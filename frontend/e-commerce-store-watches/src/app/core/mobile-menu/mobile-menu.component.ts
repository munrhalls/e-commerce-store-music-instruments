import { Component, OnInit, OnDestroy } from '@angular/core';
import { MobileMenuService } from './mobile-menu-service.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
})
export class MobileMenuComponent implements OnInit, OnDestroy {
  constructor(private mobileMenuService: MobileMenuService) {}
  isOpen: boolean = false;

  ngOnInit(): void {
    this.mobileMenuService.isOpen.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  ngOnDestroy(): void {
    this.mobileMenuService.isOpen.unsubscribe();
  }
}
