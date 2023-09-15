import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuService } from './../menu-service.service';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(-100%)' })),
      state('out', style({ transform: 'translateX(0%)' })),
      transition('in => out', [animate('400ms ease-in-out')]),
      transition('out => in', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class MobileMenuComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  isOpen: boolean = false;
  menuState: string = 'out';
  faAngleRight = faAngleRight;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.isMobileMenuOpen
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isMobileMenuOpen) => {
        this.isOpen = isMobileMenuOpen;
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
