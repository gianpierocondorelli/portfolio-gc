import { Injectable } from '@angular/core';
import { D3Service, D3 } from 'd3-ng2-service';
import * as d3Cloud from 'd3-v4-cloud';

export type EnhancedD3 = D3 & typeof d3Cloud;

@Injectable({
  providedIn: 'root'
})
export class EnhancedD3Service {

  private enhancedD3: EnhancedD3;

  constructor(
    d3Service: D3Service
  ) {
    this.enhancedD3 = Object.assign(d3Service.getD3(), d3Cloud);
  }

  getEnhancedD3() {
    return this.enhancedD3;
  }
}
