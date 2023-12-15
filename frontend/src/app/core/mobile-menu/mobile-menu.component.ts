import { type MenuService } from './../menu-service.service'
import { trigger, state, style, transition, animate } from '@angular/animations'
import { Component, type OnInit, type OnDestroy } from '@angular/core'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
  animations: [
    trigger('slideInOut', [
      state('open', style({ transform: 'translateX(100%)' })),
      state('closed', style({ transform: 'translateX(0%)' })),
      transition('open => closed', [animate('400ms ease-in-out')]),
      transition('closed => open', [animate('300ms ease-in-out')])
    ])
  ]
})
export class MobileMenuComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$ = new Subject<void>()
  isOpen: boolean = false
  menuState: string = 'closed'
  faAngleRight = faAngleRight

  constructor(private readonly menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.openElementName
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((openElementName) => {
        this.isOpen = openElementName === 'mobile-menu'

        this.menuState =
          this.isOpen && this.menuState === 'closed' ? 'open' : 'closed'
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}
