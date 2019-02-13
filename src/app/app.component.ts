import { Component, OnInit, Injector } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { BaseComponent } from './shared/base-component';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent extends BaseComponent implements OnInit {
  title = 'portfolio';
  showSplash = true;

  constructor(injector: Injector) {
    super(injector);
    library.add(fas);
  }

  ngOnInit() {
    // handling splash screen
    this.showSplash = !window.localStorage.getItem('showSplash');
    window.localStorage.setItem('showSplash', 'false');

    // handling loading modules in a cool way
    this.subscription = this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.showLoader = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.showLoader = false;
        }
      }
    );
  }
}
