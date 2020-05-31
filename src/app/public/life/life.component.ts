import { Component, OnInit, Injector, OnDestroy } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'

import { BaseComponent } from '@shared/base-component'

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss'],
})
export class LifeComponent extends BaseComponent implements OnInit, OnDestroy {
  places = [
    {
      city: 'Catania',
      country: 'Italy',
      latitude: 37.502236,
      longitude: 15.08738,
    },
    {
      city: 'Manchester',
      country: 'United Kingdom',
      latitude: 53.483959,
      longitude: -2.244644,
    },
  ]

  activateVisibility = false
  firstDisplay = []

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    this.meta.addTag({
      name: 'description',
      content: 'A brief description of my life',
    })
    if (isPlatformBrowser(this.platformId)) {
      this.angulartics.eventTrack('life', { category: 'enterPage' })
      setTimeout(() => {
        this.activateVisibility = true
      }, 100)
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.angulartics.eventTrack('life', { category: 'exitPage' })
      this.bkgSrv.sendNewImgBackground('')
    }
  }

  getMarker(place: any) {
    return [
      {
        latitude: place.latitude,
        longitude: place.longitude,
      },
    ]
  }

  getVisibility(index: number) {
    if (this.activateVisibility && isPlatformBrowser(this.platformId)) {
      const sectionHeight = document.getElementsByClassName('section')[0]
        .clientHeight
      const currentScroll = window.pageYOffset
      if (currentScroll <= sectionHeight * 0.5) {
        this.firstDisplay[0] = true
        this.bkgSrv.sendNewImgBackground(
          'assets/images/life/life-section-one.jpg',
        )
        return index === 0
      } else {
        const firstChange = currentScroll > sectionHeight * 0.5
        if (firstChange) {
          this.bkgSrv.sendNewImgBackground(
            'assets/images/life/life-section-two.jpg',
          )
        }
        const returnCursor = currentScroll > sectionHeight * 1.35
        if (returnCursor) {
          this.bkgSrv.sendNewImgBackground(
            'assets/images/life/life-section-three.jpg',
          )
        }
        const returnIndex = returnCursor && index === 1
        this.firstDisplay[1] = this.firstDisplay[1] || returnIndex
        return returnIndex
      }
    }
    return false
  }
}
