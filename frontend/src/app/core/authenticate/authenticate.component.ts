import { MenuService } from '../menu-service.service'
import { ActivatedRoute } from '@angular/router'
import { Component, Inject, type OnInit } from '@angular/core'
import { faClose } from '@fortawesome/free-solid-svg-icons'

import {
  query,
  animateChild,
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations'

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
  animations: [
    trigger('parentAnimation', [
      transition(':leave', [query('@authenticateAnimation', [animateChild()])])
    ]),
    trigger('authenticateAnimation', [
      state('void', style({ transform: 'translateX(0%)' })),
      state('*', style({ transform: 'translateX(0%)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('350ms ease-in-out')
      ]),
      transition(':leave', [
        animate('350ms ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class AuthenticateComponent implements OnInit {
  constructor(
    @Inject(MenuService) private readonly menuService: MenuService,
    @Inject(ActivatedRoute) private readonly route: ActivatedRoute
  ) {}

  account: string = 'has-account'
  animationState = {}
  faClose = faClose

  ngOnInit(): void {
    this.animationState = this.route.snapshot.data['animation']
  }

  closeAuthenticateURL(): void {
    this.menuService.closeAuthenticateURL()
  }

  toggleAccount(): void {
    this.account = this.account === 'has-account' ? 'no-account' : 'has-account'
  }
}
