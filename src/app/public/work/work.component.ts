import { Component, OnInit, Injector, HostListener } from '@angular/core';

import { BaseComponent } from 'src/app/shared/base-component';
import { IncreasingCounterService } from 'src/app/shared/increasing-counter/increasing-counter.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent extends BaseComponent implements OnInit {


  sectionFirstActivation = [];

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
    if (this.sectionFirstActivation.length <= sections.length) {
      for (let i = 1; i < sections.length; i++) {
        this.sectionFirstActivation[i] = (window.scrollY > ((elOne.clientHeight * (i - 1)) + elOne.clientHeight / 3))
          || this.sectionFirstActivation[i];
      }
      this.incCountSrv.setStateIncreasingCounter(this.sectionFirstActivation[1]);
    }
  }

  goToCode() {
    window.open('bitbucket.org/giacondor/portfolio');
  }

  goToResume() {
    window.open('/docs/resume.pdf');
  }

  goToLinkedIn() {
    window.open('www.linkedin.com/in/gianpiero-condorelli');
  }

  goToMail() {
    window.open('mailto:gia.condorelli@gmail.com');
  }
}
