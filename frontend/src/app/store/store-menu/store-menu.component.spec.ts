import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { StoreMenuComponent } from './store-menu.component'

describe('StoreMenuComponent', () => {
  let component: StoreMenuComponent
  let fixture: ComponentFixture<StoreMenuComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreMenuComponent]
    })
    fixture = TestBed.createComponent(StoreMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
