import { TestBed } from '@angular/core/testing';

import { EnhancedD3Service } from './enhanced-d3.service';

describe('EnhancedD3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnhancedD3Service = TestBed.get(EnhancedD3Service);
    expect(service).toBeTruthy();
  });
});
