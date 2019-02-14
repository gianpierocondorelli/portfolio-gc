import { Component, OnInit, Injector } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RouterOutlet } from '@angular/router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { BaseComponent } from './shared/base-component';
import { fadeAnimation } from './shared/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})

export class AppComponent extends BaseComponent implements OnInit {
  title = 'portfolio';
  showSplash = true;

  constructor(injector: Injector) {
    super(injector);
    library.add(fas, fab);
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');
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

  getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
