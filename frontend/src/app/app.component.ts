import { Component, OnDestroy, type OnInit } from '@angular/core'
import { type Observable, take, catchError, EMPTY } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Sang Logium'
  hello: string | null = null
  helloSubscription: any
  isMobile: boolean = false

  constructor(private readonly http: HttpClient) {}

  getHello(): Observable<any> {
    const url = 'http://nginx/api/hello'
    return this.http.get(url).pipe(
      take(1),
      catchError((error) => {
        console.error('Error fetching hello data:', error)
        return EMPTY
      })
    )
  }

  ngOnInit(): void {
    console.log('on init runs')
    if (this.hello === null) {
      this.helloSubscription = this.getHello()
        .pipe(take(1))
        .subscribe((data) => {
          console.log('endpoint hello on UI: ', data)
          this.hello = data.message
        })
    }
  }

  ngOnDestroy(): void {
    this.helloSubscription?.unsubscribe()
  }

  afterRender(): void {
    window.addEventListener('resize', () => {
      this.checkScreenSize()
    })

    this.checkScreenSize()
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 1050
  }
}
