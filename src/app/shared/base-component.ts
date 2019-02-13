import { Injector } from "@angular/core";
import { Router } from "@angular/router";

import { Subscription } from "rxjs";

export class BaseComponent {

  protected subscription: Subscription;
  showLoader: boolean;

  // Injector classes
  protected router: Router;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
  }

  clearTimeout(timeout: any) {
    clearTimeout(timeout);
  }

  clearInterval(interval: any) {
    clearInterval(interval);
  }
}
