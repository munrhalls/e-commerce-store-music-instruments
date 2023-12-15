import { Component, type OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sang Logium'
  isMobile: boolean = false

  ngOnInit(): void {
    this.checkScreenSize()
    window.addEventListener('resize', () => {
      this.checkScreenSize()
    })
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 1050
  }
}
