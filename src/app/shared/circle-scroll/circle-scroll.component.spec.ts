import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CircleScrollComponent } from './circle-scroll.component'

describe('CircleScrollComponent', () => {
  let component: CircleScrollComponent
  let fixture: ComponentFixture<CircleScrollComponent>

  beforeEach(async(() => {
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
