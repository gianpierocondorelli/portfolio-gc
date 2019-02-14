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
  @Input() selected = false;

  classHover: string;


  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }


  openLink() {
    this.classHover = '';
    this.router.navigate([`/${this.pathLink}`]);
  }

  setHoverIcon(hoverState: boolean) {
    const timeout = 250;
    if (hoverState === true && !this.selected) {
      setTimeout(() => {
        this.classHover = 'hover';
      }, timeout);
    } else {
      setTimeout(() => {
        this.classHover = '';
      }, timeout);
    }
  }

}
