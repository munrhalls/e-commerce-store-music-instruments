import { MenuService } from '../menu-service.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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

@Component({
  selector: 'app-mobile-search',
  templateUrl: './mobile-search.component.html',
  styleUrls: ['./mobile-search.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(-100%)' })),
      state('out', style({ transform: 'translateX(0%)' })),
      transition('in => out', [animate('250ms ease-in-out')]),
      transition('out => in', [animate('200ms ease-in-out')]),
    ]),
  ],
})
export class MobileSearchComponent implements OnInit {
  constructor(private menuService: MenuService) {}
  private unsubscribe$ = new Subject<void>();
  isOpen: boolean = false;
  searchFormState: string = 'in';
  faSearch = faSearch;

  ngOnInit(): void {
    this.menuService.isMobileSearchOpen
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isMobileSearchOpen) => {
        this.isOpen = isMobileSearchOpen;
        this.searchFormState = this.searchFormState === 'out' ? 'in' : 'out';
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
