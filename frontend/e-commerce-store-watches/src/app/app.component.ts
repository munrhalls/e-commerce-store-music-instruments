import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import {
  trigger,
  transition,
  query,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> authenticate', [
        query(
          ':enter',
          [
            style({ transform: 'translateX(-80%)' }),
            animate(
              '1000ms ease-in-out',
              style({ transform: 'translateX(15%)' })
            ),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            style({ transform: 'translateX(0%)' }),
            animate(
              '1000ms ease-in-out',
              style({ transform: 'translateX(80%)' })
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor(private contexts: ChildrenOutletContexts) {}
  title = 'Lux Logium';
  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 1050;
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
