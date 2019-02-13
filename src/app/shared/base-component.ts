import { Injector } from "@angular/core";
import { Router } from "@angular/router";

import { Subscription } from "rxjs";
import { TranslateService } from "@ngx-translate/core";

export class BaseComponent {

  protected subscription: Subscription;
  showLoader: boolean;

  // Injector classes
  protected router: Router;
  protected translate: TranslateService;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.translate = injector.get(TranslateService);
  }

  clearTimeout(timeout: any) {
    clearTimeout(timeout);
  }

  clearInterval(interval: any) {
    clearInterval(interval);
  }
}
