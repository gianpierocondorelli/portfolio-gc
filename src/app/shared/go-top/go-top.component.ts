import { Component, OnInit, HostListener, Injector } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.scss']
})
export class GoTopComponent extends BaseComponent implements OnInit {

  enable = false;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    this.enable = window.pageYOffset > 150;
  }
}
