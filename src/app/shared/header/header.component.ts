import { Component, OnInit, Injector, Input } from '@angular/core';

import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  @Input() notDisplayMenu = false;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
