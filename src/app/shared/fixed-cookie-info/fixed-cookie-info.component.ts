import { Component, OnInit, Injector } from '@angular/core'


import { BaseComponent } from '../base-component'

@Component({
  selector: 'app-fixed-cookie-info',
  templateUrl: './fixed-cookie-info.component.html',
  styleUrls: ['./fixed-cookie-info.component.scss'],
})
export class FixedCookieInfoComponent extends BaseComponent implements OnInit {
  cookieUrl = 'cookie-policy/'
  cookieOk = undefined

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    if (this.isBrowser()) {
      const cookiePolicyOpt = this.getCookie('cookie-policy-ok')
      switch (cookiePolicyOpt) {
        case 'true':
          this.cookieOk = true
          break
        case 'false':
          this.cookieOk = false
          break
        default:
          break
      }
      if (this.cookieOk) {
        this.startTracking()
      }
    }
  }

  clickOkCookie() {
    if (this.isBrowser()) {
      this.setCookie('cookie-policy-ok', 'true', 4000)
      this.cookieOk = true
      this.startTracking()
    }
  }

  clickNoCookie() {
    if (this.isBrowser()) {
      this.setCookie('cookie-policy-ok', 'false', 4000)
      this.cookieOk = false
    }
  }

  private startTracking() {
    if (this.isBrowser()) {
      this.angulartics.startTracking()
    }
  }
}
