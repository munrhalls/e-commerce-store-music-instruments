import {
  type Router,
  type ActivatedRoute,
  NavigationEnd
} from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { type MenuService } from '../menu-service.service'
import { Component, type Renderer2, type OnInit } from '@angular/core'
import {
  faSearch,
  faUser,
  faShieldAlt,
  faShoppingCart,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  openElementName: string = ''
  isAuthenticationOpen: boolean = false
  faSearch = faSearch
  faUser = faUser
  faShieldAlt = faShieldAlt
  faShoppingCart = faShoppingCart
  faBars = faBars
  faTimes = faTimes

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly menuService: MenuService,
    private readonly renderer: Renderer2
  ) {}

  toggleMobileMenu() {
    this.menuService.toggleMobileMenu()
  }

  toggleMobileSearch() {
    this.menuService.toggleMobileSearch()
  }

  openAuthenticateURL() {
    this.menuService.openAuthenticateURL()
  }

  closeAuthenticateURL() {
    this.menuService.closeAuthenticateURL()
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects
        if (url.includes('authenticate')) {
          this.menuService.setOpenElementNameManually('')
          this.isAuthenticationOpen = true
        } else {
          this.isAuthenticationOpen = false
        }
      }
    })

    this.menuService.openElementName.subscribe((openElementName: string) => {
      this.openElementName = openElementName
      if (this.openElementName?.length > 0) {
        this.isAuthenticationOpen = false
        this.renderer.addClass(document.body, 'no-scroll')
      } else {
        this.renderer.removeClass(document.body, 'no-scroll')
      }
    })
  }
}
