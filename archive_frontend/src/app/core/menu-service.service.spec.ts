import { TestBed } from '@angular/core/testing'

import { MenuService } from './menu-service.service'
import { RouterTestingModule } from '@angular/router/testing'
describe('MenuService', () => {
  let service: MenuService

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule] })
    service = TestBed.inject(MenuService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
