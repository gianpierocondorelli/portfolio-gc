import { Component, OnInit, Injector, OnDestroy, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { D3 } from 'd3-ng2-service';

import { BaseComponent } from '@shared/base-component';
import { SECTIONS } from '@shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent extends BaseComponent implements OnInit, OnDestroy {

  currentIndex = 0;
  sections = SECTIONS;
  sectionActivation = [];
  sectionFirstActivation = [];
  private d3: D3;
  constructor(injector: Injector) {
    super(injector);
    this.d3 = this.d3Srv.getD3();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.angulartics.eventTrack('home', { category: 'enterPage' });
      this.sectionFirstActivation[0] = true;
      this.bkgSrv.sendNewImgBackground(this.sections[0].background || '');
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.angulartics.eventTrack('home', { category: 'exitPage' });
      this.bkgSrv.sendNewImgBackground('');
      this.unsubscribe();
      this.clearInterval();
    }
  }

  goTo(link: string) {
    this.router.navigate([`/${link}`]);
  }

  // changePage(move: number) {
  //   const nextPos = this.currentIndex + move;
  //   if (move < 0) {
  //     this.currentIndex = nextPos < 0 ? this.display.length - 1 : nextPos;
  //   } else {
  //     this.currentIndex = nextPos >= this.display.length ? 0 : nextPos;
  //   }
  //   this.display = this.display.map((d, i) => d = this.currentIndex === i);
  //   this.bkgSrv.sendNewImgBackground(this.sections[this.currentIndex].background || '');
  // }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (isPlatformBrowser(this.platformId)) {
      const sections = this.d3.selectAll('.section').nodes() as Element[];
      if (this.sectionActivation.length <= sections.length) {
        for (let i = 0; i < sections.length; i++) {
          const heightPrev = this.getHeightPrevElement(sections, i);
          const heightNext = i !== sections.length - 1 ? this.getHeightPrevElement(sections, i + 1) : null;
          this.sectionActivation[i] = i === sections.length - 1 ? window.pageYOffset > heightPrev :
            i === 0 ? window.pageYOffset <= heightNext :
              window.pageYOffset > heightPrev && window.pageYOffset <= heightNext;
          this.sectionFirstActivation[i] = this.sectionActivation[i] || this.sectionFirstActivation[i];
          this.currentIndex = this.sectionActivation[i] ? i : this.currentIndex;
          this.bkgSrv.sendNewImgBackground(this.sections[this.currentIndex].background || '');
        }
      }
    }
  }
}
