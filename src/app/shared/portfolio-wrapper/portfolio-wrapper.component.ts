import { Component, OnInit, Injector, OnDestroy } from '@angular/core';

import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-portfolio-wrapper',
  templateUrl: './portfolio-wrapper.component.html',
  styleUrls: ['./portfolio-wrapper.component.scss']
})
export class PortfolioWrapperComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.subscription = this.bkgSrv.getNewImgBackground().subscribe(
      res => {
        this.bkgImage = res;
      }
    );
    this.subscription.add(this.bkgSrv.getNewColorBackground().subscribe(
      res => {
        this.bkgColor = res;
      }
    ));
  }

  ngOnDestroy() {
    this.unsubscribe();
    this.clearInterval();
  }

  imageSetter() {
    return this.bkgImage && this.bkgImage.length > 0 ? `url("${this.bkgImage}")` : null;
  }

}
