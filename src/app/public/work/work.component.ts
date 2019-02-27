import { Component, OnInit, Injector, HostListener } from '@angular/core';

import { BaseComponent } from 'src/app/shared/base-component';
import { IncreasingCounterService } from 'src/app/shared/increasing-counter/increasing-counter.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent extends BaseComponent implements OnInit {

  sectionTwo = false;

  constructor(
    private incCountSrv: IncreasingCounterService,
    injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.go2Top();
  }


  @HostListener('window:scroll', ['$event'])
  onResize(event) {
    const element = document.getElementsByClassName('one')[0];
    this.sectionTwo = (window.scrollY > (element.clientHeight / 3)) || this.sectionTwo;
    this.incCountSrv.setStateIncreasingCounter(this.sectionTwo);
  }

}
