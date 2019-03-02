import { Component, OnInit, Injector, OnDestroy } from '@angular/core';

import { BaseComponent } from 'src/app/shared/base-component';
import { SECTIONS } from 'src/app/shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent extends BaseComponent implements OnInit, OnDestroy {

  currentIndex = 0;
  sections = SECTIONS;
  display = [true, false, false, false];

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.angulartics.pageTrack('/');
    this.angulartics.eventTrack('home', { category: 'enterPage' });
    this.bkgSrv.sendNewImgBackground(this.sections[this.currentIndex].background || '');
    this.interval = setInterval(() => {
      this.currentIndex = this.currentIndex < this.sections.length - 1 ? this.currentIndex + 1 : 0;
      setTimeout(() => {
        this.display = this.display.map((d, i) => d = this.currentIndex === i);
        this.bkgSrv.sendNewImgBackground(this.sections[this.currentIndex].background || '');
      }, 500);
    }, 10000);
  }

  ngOnDestroy() {
    this.angulartics.eventTrack('home', { category: 'exitPage' });
    this.bkgSrv.sendNewImgBackground('');
    this.unsubscribe();
    this.clearInterval();
  }

  goTo(link: string) {
    this.router.navigate([`/${link}`]);
  }

  changePage(move: number) {
    const nextPos = this.currentIndex + move;
    if (move < 0) {
      this.currentIndex = nextPos < 0 ? this.display.length - 1 : nextPos;
    } else {
      this.currentIndex = nextPos >= this.display.length ? 0 : nextPos;
    }
    this.display = this.display.map((d, i) => d = this.currentIndex === i);
    this.bkgSrv.sendNewImgBackground(this.sections[this.currentIndex].background || '');
  }
}
