import { Component, OnInit, Injector, HostListener } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { MapBig } from 'src/app/shared/support-class';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.scss']
})
export class FunComponent extends BaseComponent implements OnInit {

  lang = 'en';
  private activateVisibility = false;
  cities = [[]];
  images = [[]];

  countries: MapBig[] = [{
    center: {
      latitude: 47.3666700,
      longitude: 0
    },
    markers: [{
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
    ]
  },
  {
    name: 'Italy',
    center: {
      latitude: 41.9109,
      longitude: 12.4818
    },
    scale: 1024,
    markers: [{
      city: 'Rome',
      country: 'Italy',
      latitude: 41.9109,
      longitude: 12.4818,
      images: ['assets/images/test.jpg', 'assets/images/test.jpg']
    }]
  },
  {
    name: 'France',
    center: {
      latitude: 48.85341,
      longitude: 2.3488
    },
    scale: 1024,
    markers: [{
      city: 'Paris',
      country: 'France',
      latitude: 48.85341,
      longitude: 2.3488,
      images: ['assets/images/test.jpg']
    }]
  }
  ];


  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.go2Top();
    this.extractCities();
    setTimeout(() => {
      this.activateVisibility = true;
    }, 100);
  }

  getVisibility(index: number) {
    if (this.activateVisibility) {
      const introductionHeight = document.getElementsByClassName('introduction')[0].clientHeight;
      const subtractInit = (introductionHeight / 4);
      const otherContainerHeight = document.getElementsByClassName('other-container')[0].clientHeight;
      const subtractOther = (otherContainerHeight / 4);
      const currentScroll = window.scrollY;
      if (currentScroll <= introductionHeight - subtractInit) {
        return index === 0;
      } else {
        return currentScroll > introductionHeight + (otherContainerHeight * (index - 1)) - subtractOther &&
          currentScroll < introductionHeight + (otherContainerHeight * index) - subtractOther;
      }
    }
    return false;
  }

  extractCities() {
    this.countries.forEach(
      (c, i) => {
        this.cities[i] = c.markers.reduce((d, e) => (d.push(e.city), d), []) as string[];
        this.images[i] = c.markers.reduce((d, e) => (d.push(...e.images), d), []) as string[];
      }
    );
  }

}
