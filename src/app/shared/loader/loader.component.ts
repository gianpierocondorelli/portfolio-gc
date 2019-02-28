import { Component, OnInit, Injector, OnDestroy } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent extends BaseComponent implements OnInit, OnDestroy {

  @BlockUI() blockUI: NgBlockUI;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.subscription = this.loaderSrv.getLoaderStatus().subscribe(
      res => {
        res ? this.blockUI.start() : this.blockUI.stop();
      }
    );
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
