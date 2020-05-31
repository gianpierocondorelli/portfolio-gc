import { TestBed } from '@angular/core/testing'

import { IncreasingCounterService } from './increasing-counter.service'

describe('IncreasingCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: IncreasingCounterService = TestBed.get(
      IncreasingCounterService,
    )
    expect(service).toBeTruthy()
  })
})
