import { Component, OnInit, HostListener, Injector } from '@angular/core'


import { BaseComponent } from '@shared/base-component'

declare var $: any

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.scss'],
})
export class GoTopComponent extends BaseComponent implements OnInit {
  enable = false
  white = false

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {}

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    if (this.isBrowser()) {
      const sizeHtml = $(document).height() - window.innerHeight
      this.white = window.pageYOffset > sizeHtml * 0.9
      this.enable = window.pageYOffset > 150
    }
  }
}
