import { Inject, Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  openElementName = new BehaviorSubject<string>('')
  private readonly urlStack: string[] = []

  constructor(
    @Inject(Router) private readonly router: Router,
    @Inject(ActivatedRoute) private readonly route: ActivatedRoute
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (!this.urlStack.includes(event.urlAfterRedirects)) {
            this.urlStack.push(event.urlAfterRedirects)
          }
        }
      })
  }

  setOpenElementNameManually(name: string): void {
    this.openElementName.next(name)
  }

  toggleMobileMenu(): void {
    this.openElementName.next(
      this.openElementName.value === 'mobile-menu' ? '' : 'mobile-menu'
    )
    this.closeAuthenticateURL()
  }

  toggleMobileSearch(): void {
    this.openElementName.next(
      this.openElementName.value === 'mobile-search' ? '' : 'mobile-search'
    )
    this.closeAuthenticateURL()
  }

  openAuthenticateURL(): void {
    this.router.navigate(['/authenticate']).catch((err) => {
      console.error('Navigation Error:', err)
    })
  }

  closeAuthenticateURL(): void {
    if (this.urlStack.length > 1) {
      this.urlStack.pop() // Remove current URL
      const lastUrl = this.urlStack.pop() ?? '/' // Get last URL
      this.router.navigate([lastUrl]).catch((err) => {
        console.error('Navigation Error:', err)
      })
    } else {
      this.router.navigate(['/']).catch((err) => {
        console.error('Navigation Error:', err)
      }) // Default route
    }
  }
}
