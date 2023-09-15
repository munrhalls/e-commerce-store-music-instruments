import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuService } from './../menu-service.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
})
export class MobileMenuComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  isOpen: boolean = false;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.isMobileMenuOpen
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isMobileMenuOpen) => {
        this.isOpen = isMobileMenuOpen;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
