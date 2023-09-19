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
