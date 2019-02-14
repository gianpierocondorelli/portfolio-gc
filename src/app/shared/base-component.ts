import { Injector } from "@angular/core";
import { Router } from "@angular/router";

import { Subscription } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { BackgroundService } from "./services/background.service";

export class BaseComponent {

  protected subscription: Subscription;
  showLoader: boolean;

  // Injector classes
  protected router: Router;
  protected translate: TranslateService;
  protected bkgSrv: BackgroundService;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.translate = injector.get(TranslateService);
    this.bkgSrv = injector.get(BackgroundService);
  }

  clearTimeout(timeout: any) {
    clearTimeout(timeout);
  }

  clearInterval(interval: any) {
    clearInterval(interval);
  }

  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
