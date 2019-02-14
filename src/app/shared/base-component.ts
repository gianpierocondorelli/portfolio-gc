import { Injector, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";

import { Subscription } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { BackgroundService } from "./services/background.service";
import { HttpClient } from "@angular/common/http";

export class BaseComponent {

  bkgImage: string;
  bkgColor: string;

  protected subscription: Subscription;
  protected showLoader: boolean;
  protected interval: any;

  protected colors = ['green', 'yellow', 'red'];

  // Injector classes
  protected router: Router;
  protected translate: TranslateService;
  protected bkgSrv: BackgroundService;
  protected http: HttpClient;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.translate = injector.get(TranslateService);
    this.bkgSrv = injector.get(BackgroundService);
    this.http = injector.get(HttpClient);
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
}
