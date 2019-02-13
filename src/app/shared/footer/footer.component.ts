import { Component, OnInit, Injector } from '@angular/core';

import * as moment from 'moment';

import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseComponent implements OnInit {

  year: string;

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    this.year = moment().format('YYYY');
  }

}
