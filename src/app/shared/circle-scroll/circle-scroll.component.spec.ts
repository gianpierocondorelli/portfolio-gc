import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CircleScrollComponent } from './circle-scroll.component'

describe('CircleScrollComponent', () => {
  let component: CircleScrollComponent
  let fixture: ComponentFixture<CircleScrollComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CircleScrollComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleScrollComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
