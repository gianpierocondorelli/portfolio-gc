import { Component, OnInit, Injector, HostListener, ViewEncapsulation } from '@angular/core';

import { BaseComponent } from '@shared/base-component';
import { isPlatformBrowser } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent extends BaseComponent implements OnInit {

  currentYear = (new Date()).getFullYear();
  visible = false;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (isPlatformBrowser(this.platformId)) {
      const sizeHtml = $(document).height() - window.innerHeight;
      this.visible = window.pageYOffset > sizeHtml * .9;
    }
  }


}
