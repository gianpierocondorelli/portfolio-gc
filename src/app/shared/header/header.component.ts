import { Component, OnInit, Injector, OnDestroy, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd } from '@angular/router';

import { SECTIONS } from '@shared/constants';
import { BaseComponent } from '@shared/base-component';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit, OnDestroy {

  notDisplayMenu = true;
  disableMenu = true;
  currentPath: string;
  sections = SECTIONS;

  visible = true;
  prevScroll = 0;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    // this.notDisplayMenu = this.router.url === '/';
    // setTimeout(() => {
    //   this.disableMenu = this.notDisplayMenu;
    // }, 250);
    this.subscription = this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.currentPath = event.url;
          // this.notDisplayMenu = this.currentPath === '/';
          // setTimeout(() => {
          //   this.disableMenu = this.notDisplayMenu;
          // }, 250);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  checkIfPathActive(path: string) {
    return this.currentPath && this.currentPath.length > 0 && this.currentPath.includes(path);
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (isPlatformBrowser(this.platformId)) {
      const sizeHtml = $(document).height() - window.innerHeight;
      this.visible = (this.router.url.substring(0, this.router.url.indexOf('?')) === '') ||
      (this.router.url.substring(0, this.router.url.indexOf('?')) === '/') ||
        (window.pageYOffset < sizeHtml * .1) || (window.pageYOffset < this.prevScroll);
      this.prevScroll = window.pageYOffset;
    }
  }
}
