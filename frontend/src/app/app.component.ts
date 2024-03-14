import { Component, type OnInit } from '@angular/core'
import { type Observable, take, catchError, EMPTY } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sang Logium'
  hello: string | null = null
  isMobile: boolean = false

  constructor(private readonly http: HttpClient) {}

  getHello(): Observable<any> {
    const url = `${environment.apiBaseUrl}api/hello`
    return this.http.get(url).pipe(
      take(1),
      catchError((error) => {
        console.error('Error fetching hello data:', error)
        return EMPTY
      })
    )
  }

  ngOnInit(): void {
    if (this.hello === null) {
      this.getHello()
        .pipe(take(1))
        .subscribe((data) => {
          console.log('endpoint hello on UI: ', data)
          this.hello = data.message
        })
    }
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
