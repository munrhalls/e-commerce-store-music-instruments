import { Component, type OnInit } from '@angular/core'
import { type Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sang Logium'
  hello: string = ''
  isMobile: boolean = false

  constructor(private readonly http: HttpClient) {}

  getHello(): Observable<any> {
    return this.http.get('http://server:8443/hello')
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.checkScreenSize()
    })

    this.getHello().subscribe((data) => {
      console.log(data)
      this.hello = data.message
    })
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 1050
  }
}
