import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { FixedCookieInfoComponent } from './fixed-cookie-info.component'

describe('FixedCookieInfoComponent', () => {
  let component: FixedCookieInfoComponent
  let fixture: ComponentFixture<FixedCookieInfoComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FixedCookieInfoComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedCookieInfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
