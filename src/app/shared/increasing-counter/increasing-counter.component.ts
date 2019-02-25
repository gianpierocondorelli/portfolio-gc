import { Component, OnInit, Input, Injector } from '@angular/core';

import { BaseComponent } from '../base-component';
import { IncreasingCounterService } from './increasing-counter.service';

@Component({
  selector: 'app-increasing-counter',
  templateUrl: './increasing-counter.component.html',
  styleUrls: ['./increasing-counter.component.scss']
})
export class IncreasingCounterComponent extends BaseComponent implements OnInit {

  value = 0;
  @Input() limitValue = 1000;
  @Input() activateOnDemand = false;

  private firstActivation = false;

  constructor(
    private incCounterSrv: IncreasingCounterService,
    injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    if (this.activateOnDemand) {
      this.incCounterSrv.getStateIncreasingCounter().subscribe(
        res => {
          if (res && this.firstActivation) {
            this.startCounter();
            this.firstActivation = true;
          }
        }
      );
    } else {
      this.startCounter();
      this.firstActivation = true;
    }
  }

  private startCounter() {
    this.interval = setInterval(() => {
      this.value += this.value < this.limitValue ? 1 : 0;
      if (this.value === this.limitValue) {
        this.clearInterval();
      }
    }, 1);
  }
}
