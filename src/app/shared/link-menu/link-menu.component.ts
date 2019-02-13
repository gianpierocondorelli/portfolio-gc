import { Component, OnInit, Input, Injector } from '@angular/core';

import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-link-menu',
  templateUrl: './link-menu.component.html',
  styleUrls: ['./link-menu.component.scss']
})
export class LinkMenuComponent extends BaseComponent implements OnInit {

  @Input() icon: string[] = [];
  @Input() colorClass: string;
  @Input() pathLink: string;

  classIcon: string;
  classText: string;


  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  openLink() {
    this.router.navigate([this.pathLink]);
  }

  setHoverIcon(hoverState: boolean) {
    const timeout = 250;
    if (hoverState === true) {
      setTimeout(() => {
        this.classText = 'hover';
        this.classIcon = 'hover';
      }, timeout);
    } else {
      setTimeout(() => {
        this.classText = '';
        this.classIcon = '';
      }, timeout);
    }
  }

}
