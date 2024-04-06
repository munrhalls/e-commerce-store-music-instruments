import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { MobileSearchComponent } from './mobile-search.component'
import { RouterTestingModule } from '@angular/router/testing'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('MobileSearchComponent', () => {
  let component: MobileSearchComponent
  let fixture: ComponentFixture<MobileSearchComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FontAwesomeModule,
        BrowserAnimationsModule
      ],

      declarations: [MobileSearchComponent]
    })
    fixture = TestBed.createComponent(MobileSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
