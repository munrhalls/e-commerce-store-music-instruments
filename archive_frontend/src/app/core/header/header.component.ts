import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
// import { Subject } from 'rxjs'
// import { takeUntil } from 'rxjs/operators'
import { MenuService } from '../menu-service.service'
import { Inject, Component, Renderer2 } from '@angular/core'
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
export class HeaderComponent {
  openElementName: string = ''
  isAuthenticationOpen: boolean = false
  faSearch = faSearch
  faUser = faUser
  faShieldAlt = faShieldAlt
  faShoppingCart = faShoppingCart
  faBars = faBars
  faTimes = faTimes

  constructor(
    @Inject(Router) private readonly router: Router,
    @Inject(ActivatedRoute) private readonly route: ActivatedRoute,
    @Inject(MenuService) private readonly menuService: MenuService,
    @Inject(Renderer2) private readonly renderer: Renderer2
  ) {}

  toggleMobileMenu(): void {
    this.menuService.toggleMobileMenu()
  }

  toggleMobileSearch(): void {
    this.menuService.toggleMobileSearch()
  }

  openAuthenticateURL(): void {
    this.menuService.openAuthenticateURL()
  }

  closeAuthenticateURL(): void {
    this.menuService.closeAuthenticateURL()
  }

  afterRender(): void {
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
