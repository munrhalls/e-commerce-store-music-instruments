import { TestBed } from '@angular/core/testing';

import { MobileMenuServiceService } from './mobile-menu-service.service';

describe('MobileMenuServiceService', () => {
  let service: MobileMenuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileMenuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
