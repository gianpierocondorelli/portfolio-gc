import { Component, OnInit, Injector } from '@angular/core'
import {
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RouterOutlet,
} from '@angular/router'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { BaseComponent } from './shared/base-component'
import { fadeAnimation } from './shared/animations/animations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent extends BaseComponent implements OnInit {
  title = 'portfolio'
  showSplash = true

  constructor(injector: Injector) {
    super(injector)
    this.faLibrary.addIconPacks(fas, fab)
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en')
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en')
  }

  ngOnInit() {
    // handling splash screen
    if (this.isBrowser()) {
      this.showSplash = !window.sessionStorage.getItem('showSplash')
      window.sessionStorage.setItem('showSplash', 'false')
      // handling loading modules in a cool way
      this.subscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.meta.removeTag('name="description"')
          this.loaderSrv.sendNewLoaderStatus(true)
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.bkgSrv.sendNewImgBackground('')
          this.loaderSrv.sendNewLoaderStatus(false)
          window.scroll(0, 0)
        }
      })

      this.go2Top()
    }
  }

  getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : ''
  }
}
