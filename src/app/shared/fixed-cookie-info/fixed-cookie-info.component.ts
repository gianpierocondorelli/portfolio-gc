import { Component, OnInit, Injector } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'

import { BaseComponent } from '@shared/base-component'

@Component({
  selector: 'app-fixed-cookie-info',
  templateUrl: './fixed-cookie-info.component.html',
  styleUrls: ['./fixed-cookie-info.component.scss'],
})
export class FixedCookieInfoComponent extends BaseComponent implements OnInit {
  cookieUrl = 'cookie-policy/'
  cookieOk = undefined;

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const cookiePolicyOpt = this.getCookie('cookie-policy-ok');
      switch(cookiePolicyOpt) {
        case 'true': this.cookieOk = true; break;
        case 'false': this.cookieOk = false; break;
        default: break;
      }
      if (this.cookieOk){
        this.startTracking();
      }
    }
  }

  clickOkCookie() {
    this.setCookie('cookie-policy-ok', 'true', 4000)
    this.cookieOk = true
    this.startTracking()
  }

  clickNoCookie() {
    this.setCookie('cookie-policy-ok', 'false', 4000)
    this.cookieOk = false
  }
  
  private startTracking(){
    if (isPlatformBrowser(this.platformId)) {
      this.angulartics.startTracking()
    }
  }
}
