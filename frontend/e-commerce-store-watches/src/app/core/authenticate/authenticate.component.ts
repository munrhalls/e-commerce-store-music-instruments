import { Router, NavigationEnd } from '@angular/router';
import { MenuService } from '../menu-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  trigger,
  transition,
  style,
  query,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
  animations: [
    trigger('authenticateAnimation', [
      transition('* <=> authenticate', [
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('1000ms ease-in-out', style({ transform: 'translateX(0%)' })),
        ]),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate(
            '1000ms ease-in-out',
            style({ transform: 'translateX(100%)' })
          ),
        ]),
      ]),
    ]),
  ],
})
export class AuthenticateComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private menuService: MenuService) {}
  private unsubscribe$ = new Subject<void>();
  isOpen: boolean = false;
  menuState: string = 'closed';
  account: string = 'has-account';

  toggleAccount() {
    this.account =
      this.account === 'has-account' ? 'no-account' : 'has-account';
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menuState = event.urlAfterRedirects.includes('authenticate')
          ? 'open'
          : 'closed';
      }
    });

    this.menuService.openElementName
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((openElementName) => {
        this.isOpen = openElementName === 'authenticate';

        this.menuState =
          this.isOpen && this.menuState === 'closed' ? 'open' : 'closed';
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
