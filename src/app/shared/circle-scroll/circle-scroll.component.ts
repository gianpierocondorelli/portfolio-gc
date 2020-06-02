import { Component, OnInit, Injector, HostListener } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import * as d3 from 'd3'

import { BaseComponent } from '../base-component'

declare var $: any

@Component({
  selector: 'app-circle-scroll',
  templateUrl: './circle-scroll.component.html',
  styleUrls: ['./circle-scroll.component.scss'],
})
export class CircleScrollComponent extends BaseComponent implements OnInit {
  private slices: any

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    }
  }

  drawCircle() {
    if (isPlatformBrowser(this.platformId)) {
      const elem = d3.select('#circle-scroll')
      const node = elem.node() as Element
      elem.selectAll('*').remove()
      const svg = elem
        .append('svg')
        .attr('width', node.clientWidth)
        .attr('height', node.clientHeight)
        .style('overflow', 'visible')

      const strokeWidth = node.clientHeight * 0.1
      const outerRadius = node.clientHeight * 0.5
      const innerRadius = outerRadius - strokeWidth

      const pie = d3
        .pie()
        .value((d: any) => d.value)
        .sort(null)
        .padAngle(0)

      const arc: any = d3
        .arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius)
        .cornerRadius(10)

      const min =
        node.clientWidth < node.clientHeight
          ? node.clientWidth
          : node.clientHeight
      const xCircle = min / 2
      const yCircle = min / 2

      this.slices = svg
        .append('g')
        .attr('transform', `translate(${xCircle}, ${yCircle})`)

      this.slices
        .selectAll('path')
        .data(pie(this.buildArcLength()))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('id', (d: any) => d.data.key)
        .attr('fill', (d: any) => d.data.colour)
        .attr('fill-opacity', (d: any) => d.data.opacity)
    }
  }

  private buildArcLength(): any {
    const sizeHtml = $(document).height() - window.innerHeight
    const scroll = window.pageYOffset < sizeHtml * 0.95 ? window.pageYOffset : 1
    const notScroll =
      window.pageYOffset < sizeHtml * 0.95 ? sizeHtml - scroll : 0
    console.log('scroll-notscroll', scroll, notScroll)
    return [
      {
        key: 'scroll',
        colour: '#f8f9fa',
        opacity: 1,
        value: scroll,
      },
      {
        key: 'not-scroll',
        colour: '#ffffff',
        opacity: 0,
        value: notScroll < 0 ? 0 : notScroll,
      },
    ]
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.drawCircle()
    }
  }

  @HostListener('window:resize', ['$event']) // for window resize events
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.drawCircle()
    }
  }
}
