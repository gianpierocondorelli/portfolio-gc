import { Component, OnInit, Injector, OnDestroy } from '@angular/core';

import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-portfolio-wrapper',
  templateUrl: './portfolio-wrapper.component.html',
  styleUrls: ['./portfolio-wrapper.component.scss']
})
export class PortfolioWrapperComponent extends BaseComponent implements OnInit, OnDestroy {

  bkgImage: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.subscription = this.bkgSrv.getNewBackground().subscribe(
      res => {
        this.bkgImage = res;
      }
    );
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  imageSetter() {
    return this.bkgImage && this.bkgImage.length > 0 ? `url("${this.bkgImage}")` : null;
  }

}
