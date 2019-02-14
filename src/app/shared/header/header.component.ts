import { Component, OnInit, Injector, Input, OnDestroy } from '@angular/core';
import { NavigationEnd } from '@angular/router';

import { SECTIONS } from '../constants';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit, OnDestroy {

  notDisplayMenu = false;
  disableMenu = false;
  currentPath: string;
  sections = SECTIONS;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.subscription = this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.currentPath = event.url;
          this.notDisplayMenu = this.currentPath === '/';
          setTimeout(() => {
            this.disableMenu = this.notDisplayMenu;
          }, 250);
        }
      }
    )
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
}
