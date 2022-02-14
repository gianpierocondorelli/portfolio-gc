import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { IncreasingCounterComponent } from './increasing-counter.component'

describe('IncreasingCounterComponent', () => {
  let component: IncreasingCounterComponent
  let fixture: ComponentFixture<IncreasingCounterComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IncreasingCounterComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreasingCounterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
