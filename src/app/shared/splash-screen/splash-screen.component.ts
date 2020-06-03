import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Injector,
} from '@angular/core'

import { BaseComponent } from '../base-component'

const TIME_SPLASH = 2000

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent extends BaseComponent implements OnInit {
  timePassed = false

  @Output() endSplash = new EventEmitter()

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    if (this.isBrowser()) {
      setTimeout(() => {
        this.timePassed = true
      }, TIME_SPLASH)

      setTimeout(() => {
        this.endSplash.emit(true)
      }, TIME_SPLASH * 2)
    }
  }
}
