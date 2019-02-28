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
  display = [true, false, false];

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentIndex = this.currentIndex < this.sections.length - 1 ? this.currentIndex + 1 : 0;
      setTimeout(() => {
        this.display[0] = this.currentIndex === 0;
        this.display[1] = this.currentIndex === 1;
        this.display[2] = this.currentIndex === 2;
      }, 500);
    }, 10000);
  }

  ngOnDestroy() {
    this.unsubscribe();
    this.clearInterval();
  }

  goTo(link: string) {
    this.router.navigate([`/${link}`]);
  }
}
