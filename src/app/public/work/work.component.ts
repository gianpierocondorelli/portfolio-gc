import { Component, OnInit, Injector, HostListener, OnDestroy } from '@angular/core';

import { BaseComponent } from 'src/app/shared/base-component';
import { IncreasingCounterService } from 'src/app/shared/increasing-counter/increasing-counter.service';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent extends BaseComponent implements OnInit, OnDestroy {

  sectionActivation = [];
  sectionFirstActivation = [];
  private sectionActive = 0;

  constructor(
    private incCountSrv: IncreasingCounterService,
    injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.angulartics.pageTrack('/work');
    this.angulartics.eventTrack('work', { category: 'enterPage' });
    this.sectionFirstActivation[0] = true;
    this.bkgSrv.sendNewImgBackground(`assets/images/work/section-${this.sectionActive + 1}.jpg`);
  }

  ngOnDestroy() {
    this.angulartics.eventTrack('work', { category: 'exitPage' });
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const sections = document.getElementsByClassName('section');
    const elOne = sections[0];
    this.sectionActive = 0;
    if (this.sectionFirstActivation.length <= sections.length) {
      for (let i = 1; i < sections.length; i++) {
        this.sectionActivation[i] = (window.pageYOffset > ((elOne.clientHeight * (i - 1)) + elOne.clientHeight / 3));
        this.sectionActive = this.sectionActivation[i] ? i : this.sectionActive;
        this.sectionFirstActivation[i] = this.sectionActivation[i] || this.sectionFirstActivation[i];
      }
      this.bkgSrv.sendNewImgBackground(`assets/images/work/section-${this.sectionActive + 1}.jpg`);
      this.incCountSrv.setStateIncreasingCounter(this.sectionFirstActivation[1]);
    }
  }

  goToCode() {
    this.angulartics.eventTrack('work', { category: 'goToCode' });
    window.open('http://bitbucket.org/giacondor/portfolio');
  }

  goToResume() {
    this.angulartics.eventTrack('work', { category: 'goToResume' });
    window.open('/docs/resume.pdf');
  }

  goToLinkedIn() {
    this.angulartics.eventTrack('work', { category: 'goToLinkedIn' });
    window.open('http://www.linkedin.com/in/gianpiero-condorelli');
  }

  goToMail() {
    this.angulartics.eventTrack('work', { category: 'goToMail' });
    window.open('mailto:gia.condorelli@gmail.com', '_blank');
  }
}
