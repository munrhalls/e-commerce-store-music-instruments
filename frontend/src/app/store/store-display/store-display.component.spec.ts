import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { StoreDisplayComponent } from './store-display.component'

describe('StoreDisplayComponent', () => {
  let component: StoreDisplayComponent
  let fixture: ComponentFixture<StoreDisplayComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreDisplayComponent]
    })
    fixture = TestBed.createComponent(StoreDisplayComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
