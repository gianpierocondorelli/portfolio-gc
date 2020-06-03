import {
  Component,
  OnInit,
  Injector,
  OnDestroy,
  HostListener,
} from '@angular/core'

import { NavigationEnd } from '@angular/router'

import { SECTIONS } from '../constants'
import { BaseComponent } from '../base-component'

declare var $: any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent
  implements OnInit, OnDestroy {
  notDisplayMenu = true
  disableMenu = true
  currentPath: string
  sections = SECTIONS

  visible = true
  prevScroll = 0

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = window.location.pathname
        this.disableMenu = this.currentPath === '/'
        setTimeout(() => {
          this.notDisplayMenu = this.disableMenu
        }, 100)
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe()
  }

  goToHome() {
    this.router.navigate(['/'])
  }

  checkIfPathActive(path: string) {
    return (
      this.currentPath &&
      this.currentPath.length > 0 &&
      this.currentPath.includes(path)
    )
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (this.isBrowser()) {
      const sizeHtml = $(document).height() - window.innerHeight
      this.visible =
        window.location.pathname === '/' ||
        window.pageYOffset < sizeHtml * 0.1 ||
        window.pageYOffset < this.prevScroll
      this.prevScroll = window.pageYOffset
    }
  }
}
