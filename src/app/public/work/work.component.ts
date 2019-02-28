import { Component, OnInit, Injector, HostListener } from '@angular/core';

import { BaseComponent } from 'src/app/shared/base-component';
import { IncreasingCounterService } from 'src/app/shared/increasing-counter/increasing-counter.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent extends BaseComponent implements OnInit {


  sectionFirstActivation = [false, false, false];

  constructor(
    private incCountSrv: IncreasingCounterService,
    injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.sectionFirstActivation[0] = true;
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const sections = document.getElementsByClassName('section');
    const elOne = sections[0];
    const elTwo = sections[1];
    this.sectionFirstActivation[1] = (window.scrollY > (elOne.clientHeight / 3)) || this.sectionFirstActivation[1];
    this.sectionFirstActivation[2] = (window.scrollY > (elOne.clientHeight / 1.5)) || this.sectionFirstActivation[2];
    this.incCountSrv.setStateIncreasingCounter(this.sectionFirstActivation[1]);
  }

}
