import {
  Component,
  OnInit,
  Injector,
  HostListener,
  ViewEncapsulation,
} from '@angular/core'

import { BaseComponent } from '../base-component'

declare var $: any

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent extends BaseComponent implements OnInit {
  currentYear = new Date().getFullYear()
  visible = false

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (this.isBrowser()) {
      const sizeHtml = $(document).height() - window.innerHeight
      this.visible = window.pageYOffset > sizeHtml * 0.9
    }
  }
}
