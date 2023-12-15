import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { AuthenticateComponent } from './authenticate.component'
import { RouterTestingModule } from '@angular/router/testing'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('AuthenticateComponent', () => {
  let component: AuthenticateComponent
  let fixture: ComponentFixture<AuthenticateComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FontAwesomeModule,
        RouterTestingModule
      ],

      declarations: [AuthenticateComponent]
    })
    fixture = TestBed.createComponent(AuthenticateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
