import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.scss']
})
export class FunComponent extends BaseComponent implements OnInit {

  lang = 'en';

  markers = [{
    city: 'Rome',
    latitude: 41.9109,
    longitude: 12.4818
  },
  {
    city: 'Amsterdam',
    latitude: 52.37403,
    longitude: 4.88969
  },
  {
    city: 'London',
    latitude: 51.50853,
    longitude: -0.12574
  },
  {
    city: 'Paris',
    latitude: 48.85341,
    longitude: 2.3488
  },
  {
    city: 'Barcelona',
    latitude: 41.38879,
    longitude: 2.15899
  },
  {
    city: 'Zurich',
    latitude: 47.3666700,
    longitude: 8.5500000
  },
  {
    city: 'Munich',
    latitude: 48.1374300,
    longitude: 11.5754900
  }
  ];

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
