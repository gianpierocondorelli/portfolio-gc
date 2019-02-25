import { Component, OnInit, Injector } from '@angular/core';

import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.go2Top();
  }



}
