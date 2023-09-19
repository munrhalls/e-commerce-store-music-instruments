import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { MenuService } from '../menu-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
  animations: [
    trigger('authenticateAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1000ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('1000ms ease-in-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class AuthenticateComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private menuService: MenuService) {}

  private unsubscribe$ = new Subject<void>();
  isOpen: boolean = false;
  account: string = 'has-account';

  toggleAccount() {
    this.account =
      this.account === 'has-account' ? 'no-account' : 'has-account';
  }

  ngOnInit(): void {
    this.menuService.openElementName
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((openElementName) => {
        this.isOpen = openElementName === 'authenticate';
      });

    this.router.events.subscribe((event) => {
      // if (
      //   event instanceof NavigationStart &&
      //   event.url.includes('authenticate')
      // ) {
      //   this.isOpen = true;
      //   this.menuService.navigateAuthenticateURL();
      // }
      // if (event instanceof NavigationEnd) {
      //   this.isOpen = false;
      //   this.menuService.navigateAuthenticateURL();
      // }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
