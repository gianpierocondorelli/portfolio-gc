import { Component, OnInit, Injector, HostListener, OnDestroy } from '@angular/core';
import { D3 } from 'd3-ng2-service';

import { BaseComponent } from '@shared/base-component';
import { IncreasingCounterService } from '@shared/increasing-counter/increasing-counter.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent extends BaseComponent implements OnInit, OnDestroy {

  sectionActivation = [];
  sectionFirstActivation = [];
  private sectionActive = 0;
  private d3: D3;

  constructor(
    private incCountSrv: IncreasingCounterService,
    injector: Injector
  ) {
    super(injector);
    this.d3 = this.d3Srv.getD3();
  }

  ngOnInit() {
    this.angulartics.pageTrack('/work');
    this.angulartics.eventTrack('work', { category: 'enterPage' });
    this.sectionActivation[0] = this.sectionFirstActivation[0] = true;
    this.bkgSrv.sendNewImgBackground(`assets/images/work/section-${this.sectionActive + 1}.jpg`);
  }

  ngOnDestroy() {
    this.angulartics.eventTrack('work', { category: 'exitPage' });
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (isPlatformBrowser(this.platformId)) {
      const sections = this.d3.selectAll('.section').nodes() as Element[];
      this.sectionActive = 0;
      if (this.sectionFirstActivation.length <= sections.length) {
        for (let i = 0; i < sections.length; i++) {
          // this.sectionActivation[i] = (window.pageYOffset > (this.getHeightPrevElement(sections, i)));
          const heightPrev = this.getHeightPrevElement(sections, i);
          const heightNext = i !== sections.length - 1 ? this.getHeightPrevElement(sections, i + 1) : null;
          this.sectionActivation[i] = i === sections.length - 1 ? window.pageYOffset > heightPrev :
            i === 0 ? window.pageYOffset <= heightNext :
              window.pageYOffset > heightPrev && window.pageYOffset <= heightNext;
          this.sectionActive = this.sectionActivation[i] ? i : this.sectionActive;
          this.sectionFirstActivation[i] = this.sectionActivation[i] || this.sectionFirstActivation[i];
        }
        this.bkgSrv.sendNewImgBackground(`assets/images/work/section-${this.sectionActive + 1}.jpg`);
        this.incCountSrv.setStateIncreasingCounter(this.sectionFirstActivation[1]);
      }
    }
  }

  goToCode() {
    this.angulartics.eventTrack('work', { category: 'goToCode' });
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://github.com/gianpierocondorelli/portfolio-gc');
    }
  }

  goToResume() {
    this.angulartics.eventTrack('work', { category: 'goToResume' });
    if (isPlatformBrowser(this.platformId)) {
      window.open('/assets/docs/resume.pdf');
    }
  }

  goToLinkedIn() {
    this.angulartics.eventTrack('work', { category: 'goToLinkedIn' });
    if (isPlatformBrowser(this.platformId)) {
      window.open('http://www.linkedin.com/in/gianpiero-condorelli');
    }
  }

  goToMail() {
    this.angulartics.eventTrack('work', { category: 'goToMail' });
    if (isPlatformBrowser(this.platformId)) {
      window.open('mailto:gia.condorelli@gmail.com', '_blank');
    }
  }
}
