import { Component, OnInit, Injector, Input, OnDestroy } from '@angular/core';

import { BaseComponent } from '../base-component';
import { NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit, OnDestroy {

  notDisplayMenu = false;
  disableMenu = false;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.notDisplayMenu = event.url === '/';
          setTimeout(() => {
            this.disableMenu = this.notDisplayMenu;
          }, 250);
        }
      }
    )
  }

  ngOnDestroy(): void {
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
