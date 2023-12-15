import { type MenuService } from '../menu-service.service'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { trigger, state, style, transition, animate } from '@angular/animations'
import { Component, type OnInit, type OnDestroy } from '@angular/core'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-mobile-search',
  templateUrl: './mobile-search.component.html',
  styleUrls: ['./mobile-search.component.css'],
  animations: [
    trigger('slideInOut', [
      state('open', style({ transform: 'translateX(100%)' })),
      state('closed', style({ transform: 'translateX(0%)' })),
      transition('open => closed', [animate('250ms ease-in-out')]),
      transition('closed => open', [animate('200ms ease-in-out')])
    ])
  ]
})
export class MobileSearchComponent implements OnInit, OnDestroy {
  constructor(private readonly menuService: MenuService) {}
  private readonly unsubscribe$ = new Subject<void>()
  isOpen: boolean = false
  searchFormState: string = 'out'
  faSearch = faSearch

  ngOnInit(): void {
    this.menuService.openElementName
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((openElementName) => {
        this.isOpen = openElementName === 'mobile-search'
        this.searchFormState =
          this.isOpen && this.searchFormState === 'closed' ? 'open' : 'closed'
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}
