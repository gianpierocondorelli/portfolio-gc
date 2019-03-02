import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { ScrollToService } from 'ng2-scroll-to-el';

import { BackgroundService } from './services/background.service';
import { LoaderService } from './loader/loader.service';

export class BaseComponent {

  bkgImage: string;
  bkgColor: string;

  protected subscription: Subscription;
  protected interval: any;

  protected colors = ['green', 'yellow', 'red'];

  // Injector classes
  protected router: Router;
  protected translate: TranslateService;
  protected bkgSrv: BackgroundService;
  protected http: HttpClient;
  protected scrollSrv: ScrollToService;
  protected loaderSrv: LoaderService;
  protected angulartics: Angulartics2GoogleTagManager;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.translate = injector.get(TranslateService);
    this.bkgSrv = injector.get(BackgroundService);
    this.http = injector.get(HttpClient);
    this.scrollSrv = injector.get(ScrollToService);
    this.loaderSrv = injector.get(LoaderService);
    this.angulartics = injector.get(Angulartics2GoogleTagManager);
  }

  clearTimeout(timeout: any) {
    clearTimeout(timeout);
  }

  clearInterval() {
    clearInterval(this.interval);
  }

  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  go2Top() {
    this.scrollSrv.scrollTo('#top');
  }

}
