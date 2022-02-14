import {
  Component,
  OnInit,
  Injector,
  OnDestroy,
  HostListener,
} from '@angular/core'

import * as d3 from 'd3'

import { BaseComponent } from '@shared/base-component'
import { MapBig, City } from '@shared/support-class'

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
})
export class TravelComponent extends BaseComponent
  implements OnInit, OnDestroy {
  lang = 'en'
  private activateVisibility = false
  cities = [[]]
  images = [[]]
  sectionActivation = []
  sectionFirstActivation = []
  imagesSelectedCity: string[]
  imageToShow: string
  openLightbox = false

  countries: MapBig[] = [
    {
      center: {
        latitude: 47.36667,
        longitude: 0,
      },
      markers: [
        {
          city: 'Rome',
          country: 'Italy',
          latitude: 41.9109,
          longitude: 12.4818,
        },
        {
          city: 'Amsterdam',
          country: 'Netherlands',
          latitude: 52.37403,
          longitude: 4.88969,
        },
        {
          city: 'London',
          country: 'United Kingdom',
          latitude: 51.50853,
          longitude: -0.12574,
        },
        {
          city: 'Paris',
          country: 'France',
          latitude: 48.85341,
          longitude: 2.3488,
        },
        {
          city: 'Barcelona',
          country: 'Spain',
          latitude: 41.38879,
          longitude: 2.15899,
        },
        {
          city: 'Zurich',
          country: 'Switzerland',
          latitude: 47.36667,
          longitude: 8.55,
        },
        {
          city: 'Munich',
          country: 'Germany',
          latitude: 52.52,
          longitude: 13.405,
        },
        {
          city: 'Praha',
          country: 'Czech Republic',
          latitude: 50.073658,
          longitude: 14.41854,
        },
        {
          city: 'Lisbon',
          country: 'Portugal',
          latitude: 38.736946,
          longitude: -9.142685,
        },
      ],
    },
    {
      name: 'Italy',
      center: {
        latitude: 41.9109,
        longitude: 12.4818,
      },
      scale: 2048,
      markers: [
        {
          city: 'Roma',
          country: 'Italy',
          latitude: 41.9109,
          longitude: 12.4818,
          images: [
            'assets/images/travel/italy/rome/image_1.jpg',
            'assets/images/travel/italy/rome/image_2.jpg',
            'assets/images/travel/italy/rome/image_3.jpg',
          ],
        },
        {
          city: 'Milano',
          country: 'Italy',
          latitude: 45.466797,
          longitude: 9.190498,
          images: [
            'assets/images/travel/italy/milan/image_1.jpg',
            'assets/images/travel/italy/milan/image_2.jpg',
            'assets/images/travel/italy/milan/image_3.jpg',
          ],
        },
        {
          city: 'Torino',
          country: 'Italy',
          latitude: 45.067755,
          longitude: 7.682489,
          images: [
            'assets/images/travel/italy/turin/image_1.jpg',
            'assets/images/travel/italy/turin/image_2.jpg',
            'assets/images/travel/italy/turin/image_3.jpg',
          ],
        },
        {
          city: 'Catania',
          country: 'Italy',
          latitude: 37.502236,
          longitude: 15.08738,
          images: [
            'assets/images/travel/italy/catania/image_1.jpg',
            'assets/images/travel/italy/catania/image_2.jpg',
            'assets/images/travel/italy/catania/image_3.jpg',
          ],
        },
        {
          city: 'Verona',
          country: 'Italy',
          latitude: 45.438496,
          longitude: 10.992412,
          images: [
            'assets/images/travel/italy/verona/image_1.jpg',
            'assets/images/travel/italy/verona/image_2.jpg',
            'assets/images/travel/italy/verona/image_3.jpg',
          ],
        },
        {
          city: 'Venezia',
          country: 'Italy',
          latitude: 45.437191,
          longitude: 12.33459,
          images: [
            'assets/images/travel/italy/venice/photo_1.jpg',
            'assets/images/travel/italy/venice/photo_2.jpg',
            'assets/images/travel/italy/venice/photo_3.jpg',
          ],
        },
        {
          city: 'Firenze',
          country: 'Italy',
          latitude: 43.769871,
          longitude: 11.255576,
          images: [
            'assets/images/travel/italy/florence/image_1.jpg',
            'assets/images/travel/italy/florence/image_2.jpg',
            'assets/images/travel/italy/florence/image_3.jpg',
          ],
        },
        {
          city: 'Siena',
          country: 'Italy',
          latitude: 43.318554,
          longitude: 11.331653,
          images: [
            'assets/images/travel/italy/siena/image_1.jpg',
            'assets/images/travel/italy/siena/image_2.jpg',
            'assets/images/travel/italy/siena/image_3.jpg',
          ],
        },
        {
          city: 'Genova',
          country: 'Italy',
          latitude: 44.4056,
          longitude: 8.9463,
          images: [
            'assets/images/travel/italy/genoa/image_1.jpg',
            'assets/images/travel/italy/genoa/image_2.jpg',
            'assets/images/travel/italy/genoa/image_3.jpg',
          ],
        },
      ],
    },
    {
      name: 'France',
      center: {
        latitude: 48.85341,
        longitude: 2.3488,
      },
      scale: 2048,
      markers: [
        {
          city: 'Paris',
          country: 'France',
          latitude: 48.85341,
          longitude: 2.3488,
          images: [
            'assets/images/travel/france/paris/image_1.jpg',
            'assets/images/travel/france/paris/image_2.jpg',
            'assets/images/travel/france/paris/image_3.jpg',
          ],
        },
        {
          city: 'Bordeaux',
          country: 'France',
          latitude: 44.841225,
          longitude: -0.580036,
          images: [
            'assets/images/travel/france/bordeaux/image_1.jpg',
            'assets/images/travel/france/bordeaux/image_2.jpg',
            'assets/images/travel/france/bordeaux/image_3.jpg',
          ],
        },
      ],
    },
    {
      name: 'Spain',
      center: {
        latitude: 41.38879,
        longitude: 2.15899,
      },
      scale: 2048,
      markers: [
        {
          city: 'Barcelona',
          country: 'Spain',
          latitude: 41.38879,
          longitude: 2.15899,
          images: [
            'assets/images/travel/spain/barcelona/image_1.jpg',
            'assets/images/travel/spain/barcelona/image_2.jpg',
            'assets/images/travel/spain/barcelona/image_3.jpg',
          ],
        },
      ],
    },
    {
      name: 'England',
      center: {
        latitude: 51.50853,
        longitude: -0.12574,
      },
      scale: 2048,
      markers: [
        {
          city: 'London',
          country: 'United Kingdom',
          latitude: 51.50853,
          longitude: -0.12574,
          images: [
            'assets/images/travel/england/london/image_1.jpg',
            'assets/images/travel/england/london/image_2.jpg',
            'assets/images/travel/england/london/image_3.jpg',
          ],
        },
      ],
    },
    {
      name: 'Netherlands',
      center: {
        latitude: 52.37403,
        longitude: 4.88969,
      },
      scale: 2048,
      markers: [
        {
          city: 'Amsterdam',
          country: 'Netherlands',
          latitude: 52.37403,
          longitude: 4.88969,
          images: [
            'assets/images/travel/netherlands/amsterdam/image_1.jpg',
            'assets/images/travel/netherlands/amsterdam/image_2.jpg',
            'assets/images/travel/netherlands/amsterdam/image_3.jpg',
          ],
        },
        {
          city: 'Eindhoven',
          country: 'Netherlands',
          latitude: 51.4416,
          longitude: 5.4697,
          images: [
            'assets/images/travel/netherlands/eindhoven/image_1.jpg',
            'assets/images/travel/netherlands/eindhoven/image_2.jpg',
          ],
        },
      ],
    },
    {
      name: 'Switzerland',
      center: {
        latitude: 47.36667,
        longitude: 8.55,
      },
      scale: 2048,
      markers: [
        {
          city: 'Zurich',
          country: 'Switzerland',
          latitude: 47.36667,
          longitude: 8.55,
          images: [
            'assets/images/travel/switzerland/zurich/image_1.jpg',
            'assets/images/travel/switzerland/zurich/image_2.jpg',
            'assets/images/travel/switzerland/zurich/image_3.jpg',
          ],
        },
        {
          city: 'Sankt Moritz',
          country: 'Switzerland',
          latitude: 46.4908,
          longitude: 9.8355,
          images: [
            'assets/images/travel/switzerland/sankt-moritz/image_1.jpg',
            'assets/images/travel/switzerland/sankt-moritz/image_2.jpg',
            'assets/images/travel/switzerland/sankt-moritz/image_3.jpg',
          ],
        },
      ],
    },
    {
      name: 'Germany',
      center: {
        latitude: 48.13743,
        longitude: 11.57549,
      },
      scale: 2048,
      markers: [
        {
          city: 'Munchen',
          country: 'Germany',
          latitude: 48.13743,
          longitude: 11.57549,
          images: [
            'assets/images/travel/germany/munchen/image_1.jpg',
            'assets/images/travel/germany/munchen/image_2.jpg',
            'assets/images/travel/germany/munchen/image_3.jpg',
          ],
        },
        {
          city: 'Berlin',
          country: 'Germany',
          latitude: 52.52,
          longitude: 13.405,
          images: [
            'assets/images/travel/germany/berlin/image_1.jpg',
            'assets/images/travel/germany/berlin/image_2.jpg',
            'assets/images/travel/germany/berlin/image_3.jpg',
          ],
        },
      ],
    },
    {
      name: 'Czech Republic',
      center: {
        latitude: 50.073658,
        longitude: 14.41854,
      },
      scale: 2048,
      markers: [
        {
          city: 'Praha',
          country: 'Czech Republic',
          latitude: 50.073658,
          longitude: 14.41854,
          images: [
            'assets/images/travel/czech/praha/image_1.jpg',
            'assets/images/travel/czech/praha/image_2.jpg',
            'assets/images/travel/czech/praha/image_3.jpg',
          ],
        },
      ],
    },
    {
      name: 'Portugal',
      center: {
        latitude: 38.736946,
        longitude: -9.142685,
      },
      scale: 2048,
      markers: [
        {
          city: 'Lisbon',
          country: 'Portugal',
          latitude: 38.736946,
          longitude: -9.142685,
          images: [
            'assets/images/travel/portugal/lisbon/image_1.jpg',
            'assets/images/travel/portugal/lisbon/image_2.jpg',
            'assets/images/travel/portugal/lisbon/image_3.jpg',
          ],
        },
        {
          city: 'Faro',
          country: 'Portugal',
          latitude: 37.01937,
          longitude: -7.93223,
          images: [
            'assets/images/travel/portugal/faro/image_1.jpg',
            'assets/images/travel/portugal/faro/image_2.jpg',
            'assets/images/travel/portugal/faro/image_3.jpg',
          ],
        },
      ],
    },
  ]

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    this.meta.addTag({
      name: 'description',
      content: 'A list of all of my travels I did until now',
    })
    if (this.isBrowser()) {
      this.bkgSrv.sendNewImgBackground('')
      this.angulartics.eventTrack('travel', { category: 'enterPage' })
      setTimeout(() => {
        this.activateVisibility = true
        this.extractCities()
      }, 100)
      this.cdRef.detectChanges()
    }
  }

  ngOnDestroy() {
    if (this.isBrowser()) {
      this.angulartics.eventTrack('travel', { category: 'exitPage' })
      this.unsubscribe()
    }
  }

  getVisibility(index: number) {
    return this.activateVisibility ? this.sectionActivation[index] : false
  }

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    if (this.isBrowser()) {
      const sections = d3.selectAll('.section').nodes() as Element[]
      if (this.sectionActivation.length <= sections.length) {
        for (let i = 0; i < sections.length; i++) {
          const heightPrev = this.getHeightPrevElement(sections, i)
          const heightNext =
            i !== sections.length - 1
              ? this.getHeightPrevElement(sections, i + 1)
              : null
          this.sectionActivation[i] =
            i === sections.length - 1
              ? window.pageYOffset > heightPrev
              : i === 0
              ? window.pageYOffset <= heightNext
              : window.pageYOffset > heightPrev &&
                window.pageYOffset <= heightNext
          this.sectionFirstActivation[i] =
            this.sectionActivation[i] || this.sectionFirstActivation[i]
        }
      }
    }
  }

  extractCities() {
    this.countries.forEach((c, i) => {
      this.cities[i] = c.markers.reduce(
        (d, e) => (d.push(e.city), d),
        [],
      ) as string[]
      this.images[i] = c.markers.reduce(
        (d, e) => (d.push(e.images), d),
        [],
      ) as string[]
    })
    this.sectionActivation[0] = this.sectionFirstActivation[0] = true
  }

  getTransform(index: number) {
    return `rotate(${Math.random() * index * 100})`
  }

  showModalImage(city: City) {
    this.imagesSelectedCity = city.images
    if (this.imagesSelectedCity) {
      this.openLightbox = true
      this.angulartics.eventTrack('travel', {
        category: 'showImage',
        label: city.city,
      })
    }
  }

  changeImage(move: number) {
    const currentPos = this.imagesSelectedCity.indexOf(this.imageToShow)
    const nextPos = currentPos + move
    if (move < 0) {
      this.imageToShow =
        nextPos < 0
          ? this.imagesSelectedCity[this.imagesSelectedCity.length - 1]
          : this.imagesSelectedCity[nextPos]
    } else {
      this.imageToShow =
        nextPos >= this.imagesSelectedCity.length
          ? this.imagesSelectedCity[0]
          : this.imagesSelectedCity[nextPos]
    }
  }
}
