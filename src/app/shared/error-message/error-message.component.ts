import { Component, OnInit, Input, Injector } from '@angular/core'

import { BaseComponent } from '@shared/base-component'

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent extends BaseComponent implements OnInit {
  @Input() show = false

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {}
}
