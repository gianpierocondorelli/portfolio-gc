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
  cookieOk = false

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.cookieOk = this.getCookie('cookie-policy-ok') ? true : false
    }
  }

  clickOkCookie() {
    this.setCookie('cookie-policy-ok', 'true', 4000)
    this.cookieOk = true
  }
}
