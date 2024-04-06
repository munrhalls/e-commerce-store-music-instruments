import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { MobileMenuComponent } from './mobile-menu.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
describe('MobileMenuComponent', () => {
  let component: MobileMenuComponent
  let fixture: ComponentFixture<MobileMenuComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FontAwesomeModule,
        BrowserAnimationsModule
      ],

      declarations: [MobileMenuComponent]
    })
    fixture = TestBed.createComponent(MobileMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
