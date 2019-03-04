import { Component, OnInit, Injector, OnDestroy } from '@angular/core';

import { BaseComponent } from 'src/app/shared/base-component';
import { MapBig, City } from 'src/app/shared/support-class';

declare var $: any;
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent extends BaseComponent implements OnInit, OnDestroy {

  lang = 'en';
  private activateVisibility = false;
  cities = [[]];
  images = [[]];
  firstDisplay = [];
  imagesSelectedCity: string[];
  imageToShow: string;

  countries: MapBig[] = [
    {
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
        country: 'Netherlands',
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
      scale: 2048,
      markers: [{
        city: 'Roma',
        country: 'Italy',
        latitude: 41.9109,
        longitude: 12.4818,
        images: ['assets/images/placeholder.jpg']
      },
      {
        city: 'Milano',
        country: 'Italy',
        latitude: 45.466797,
        longitude: 9.190498,
        images: ['assets/images/placeholder.jpg']
      },
      {
        city: 'Torino',
        country: 'Italy',
        latitude: 45.067755,
        longitude: 7.682489,
        images: ['assets/images/placeholder.jpg']
      },
      {
        city: 'Catania',
        country: 'Italy',
        latitude: 37.502236,
        longitude: 15.08738,
        images: ['assets/images/placeholder.jpg']
      },
      {
        city: 'Verona',
        country: 'Italy',
        latitude: 45.438496,
        longitude: 10.992412,
        images: ['assets/images/placeholder.jpg']
      },
      {
        city: 'Venezia',
        country: 'Italy',
        latitude: 45.437191,
        longitude: 12.33459,
        images: ['assets/images/placeholder.jpg']
      },
      {
        city: 'Firenze',
        country: 'Italy',
        latitude: 43.769871,
        longitude: 11.255576,
        images: ['assets/images/placeholder.jpg']
      },
      {
        city: 'Siena',
        country: 'Italy',
        latitude: 43.318554,
        longitude: 11.331653,
        images: ['assets/images/placeholder.jpg']
      }
      ]
    },
    {
      name: 'France',
      center: {
        latitude: 48.85341,
        longitude: 2.3488
      },
      scale: 2048,
      markers: [{
        city: 'Paris',
        country: 'France',
        latitude: 48.85341,
        longitude: 2.3488,
        images: ['assets/images/placeholder.jpg']
      },
      {
        city: 'Bordeaux',
        country: 'France',
        latitude: 44.841225,
        longitude: -0.580036,
        images: ['assets/images/placeholder.jpg']
      },
      {
        city: 'Monaco',
        country: 'Monaco',
        latitude: 43.731142,
        longitude: 7.419758,
        images: ['assets/images/placeholder.jpg']
      }]
    },
    {
      name: 'Spain',
      center: {
        latitude: 41.38879,
        longitude: 2.15899
      },
      scale: 2048,
      markers: [{
        city: 'Barcelona',
        country: 'Spain',
        latitude: 41.38879,
        longitude: 2.15899,
        images: ['assets/images/placeholder.jpg']
      }]
    },
    {
      name: 'England',
      center: {
        latitude: 51.50853,
        longitude: -0.12574
      },
      scale: 2048,
      markers: [{
        city: 'London',
        country: 'United Kingdom',
        latitude: 51.50853,
        longitude: -0.12574,
        images: ['assets/images/placeholder.jpg']
      }]
    },
    {
      name: 'Netherlands',
      center: {
        latitude: 52.37403,
        longitude: 4.88969
      },
      scale: 2048,
      markers: [{
        city: 'Amsterdam',
        country: 'Netherlands',
        latitude: 52.37403,
        longitude: 4.88969,
        images: ['assets/images/placeholder.jpg']
      },
      {
        city: 'Eindhoven',
        country: 'Netherlands',
        latitude: 51.4416,
        longitude: 5.4697,
        images: ['assets/images/placeholder.jpg']
      }
      ]
    },
    {
      name: 'Switzerland',
      center: {
        latitude: 47.3666700,
        longitude: 8.5500000
      },
      scale: 2048,
      markers: [{
        city: 'Zurich',
        country: 'Switzerland',
        latitude: 47.3666700,
        longitude: 8.5500000,
        images: ['assets/images/placeholder.jpg']
      },
      {
        city: 'Lugano',
        country: 'Switzerland',
        latitude: 46.0037,
        longitude: 8.9511,
        images: ['assets/images/placeholder.jpg']
      },
      {
        city: 'Sankt Moritz',
        country: 'Switzerland',
        latitude: 46.4908,
        longitude: 9.8355,
        images: ['assets/images/placeholder.jpg']
      }
      ]
    },
    {
      name: 'Germany',
      center: {
        latitude: 48.1374300,
        longitude: 11.5754900
      },
      scale: 2048,
      markers: [{
        city: 'Munchen',
        country: 'Germany',
        latitude: 48.1374300,
        longitude: 11.5754900,
        images: ['assets/images/placeholder.jpg']
      }]
    }
  ];


  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.angulartics.eventTrack('travel', { category: 'enterPage' });
    this.extractCities();
    setTimeout(() => {
      this.activateVisibility = true;
    }, 100);
  }

  ngOnDestroy() {
    this.angulartics.eventTrack('travel', { category: 'exitPage' });
    this.unsubscribe();
  }

  getVisibility(index: number) {
    if (this.activateVisibility) {
      const introductionHeight = document.getElementsByClassName('introduction')[0].clientHeight;
      const subtractInit = (introductionHeight);
      const otherContainerHeight = document.getElementsByClassName('other-container')[0].clientHeight;
      const subtractOther = (otherContainerHeight / 1.3);
      const currentScroll = window.pageYOffset;
      if (currentScroll <= introductionHeight - subtractInit) {
        this.firstDisplay[0] = true;
        return index === 0;
      } else {
        const returnIndex = currentScroll > introductionHeight + (otherContainerHeight * (index - 1)) - subtractOther &&
          currentScroll <= introductionHeight + (otherContainerHeight * index) - subtractOther;
        this.firstDisplay[index] = this.firstDisplay[index] || returnIndex;
        return returnIndex;
      }
    }
    return false;
  }

  extractCities() {
    this.countries.forEach(
      (c, i) => {
        this.firstDisplay[i] = false;
        this.cities[i] = c.markers.reduce((d, e) => (d.push(e.city), d), []) as string[];
        this.images[i] = c.markers.reduce((d, e) => (d.push(...e.images), d), []) as string[];
      }
    );
  }

  getTransform(index: number) {
    return `rotate(${Math.random() * index * 100})`;
  }


  showModalImage(city: City) {
    this.imagesSelectedCity = city.images;
    if (this.imagesSelectedCity) {
      this.imageToShow = this.imagesSelectedCity[0];
      $(`#modal-images`).appendTo('body').modal('show');
    }
  }

  changeImage(move: number) {
    const currentPos = this.imagesSelectedCity.indexOf(this.imageToShow);
    const nextPos = currentPos + move;
    if (move < 0) {
      this.imageToShow = nextPos < 0 ? this.imagesSelectedCity[this.imagesSelectedCity.length - 1] : this.imagesSelectedCity[nextPos];
    } else {
      this.imageToShow = nextPos >= this.imagesSelectedCity.length ? this.imagesSelectedCity[0] : this.imagesSelectedCity[nextPos];
    }
  }


}
