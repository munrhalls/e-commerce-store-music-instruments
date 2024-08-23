import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopUiComponent } from './desktop-ui.component';

describe('DesktopUiComponent', () => {
  let component: DesktopUiComponent;
  let fixture: ComponentFixture<DesktopUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
