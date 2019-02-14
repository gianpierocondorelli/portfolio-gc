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
    country: 'Italy',
    latitude: 41.9109,
    longitude: 12.4818
  },
  {
    city: 'Amsterdam',
    country: 'Nederlands',
    latitude: 52.37403,
    longitude: 4.88969
  },
  {
    city: 'London',
    country: 'United Kingdom',
    latitude: 51.50853,
    longitude: -0.12574
  },
  {
    city: 'Paris',
    country: 'France',
    latitude: 48.85341,
    longitude: 2.3488
  },
  {
    city: 'Barcelona',
    country: 'Spain',
    latitude: 41.38879,
    longitude: 2.15899
  },
  {
    city: 'Zurich',
    country: 'Switzerland',
    latitude: 47.3666700,
    longitude: 8.5500000
  },
  {
    city: 'Munich',
    country: 'Germany',
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
