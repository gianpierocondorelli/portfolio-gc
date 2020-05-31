import {
  Component,
  OnInit,
  Injector,
  Input,
  HostListener,
  OnDestroy,
} from '@angular/core'
import { BaseComponent } from '../base-component'
import * as d3 from 'd3'

@Component({
  selector: 'app-map-d3',
  templateUrl: './map-d3.component.html',
  styleUrls: ['./map-d3.component.scss'],
})
export class MapD3Component extends BaseComponent implements OnInit, OnDestroy {
  @Input() height = 40
  @Input() markers = []
  @Input() latitude = 47
  @Input() longitude = 2
  @Input() scale = 750
  @Input() visible = true
  @Input() country: string
  @Input() uniqueId = 'map'
  @Input() delay = 100
  @Input() overflow = true

  numberId: string

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    setTimeout(() => {
      this.buildMap()
    }, this.delay)
  }

  ngOnDestroy() {
    this.unsubscribe()
  }

  private buildMap() {
    const map = d3.select(`.map[id="map${this.uniqueId}"]`)
    const div = map.node() as Element
    map.selectAll('*').remove()

    const svg = d3.select(`.map[id="map${this.uniqueId}"]`).append('svg'),
      width = div.clientWidth,
      height = div.clientHeight

    svg
      .attr('width', `${width}`)
      .attr('height', `${height}`)
      .style('overflow', this.overflow ? 'visible' : 'hidden')

    // Map and projection
    const projection = d3
      .geoMercator()
      .center([this.longitude, this.latitude]) // GPS of location to zoom on
      .scale(this.scale || 750) // This is like the zoom
      .translate([width / 2, height / 2])

    this.subscription = this.http
      .get('assets/maps/world.json')
      .subscribe((data: any) => {
        // Filter data
        data.features =
          this.country && this.country.length > 0
            ? data.features.filter(
                (d: any) => d.properties.name === this.country,
              )
            : data.features

        // Draw the map
        svg
          .append('g')
          .selectAll('path')
          .data(data.features)
          .enter()
          .append('path')
          .attr('fill', '#e9ecef')
          .attr('d', d3.geoPath().projection(projection))
          .style('stroke', '#6c757d')
          .style('opacity', 0.7)

        // Add circles:
        svg
          .selectAll('myCircles')
          .data(this.markers)
          .enter()
          .append('circle')
          .attr('cx', (d: any) => projection([d.longitude, d.latitude])[0])
          .attr('cy', (d: any) => projection([d.longitude, d.latitude])[1])
          .attr('r', 14)
          .style('fill', '#083d77')
          .attr('stroke', '#134074')
          .attr('stroke-width', 1)
          .attr('stroke-opacity', 0.4)
          .attr('fill-opacity', 0.4)
      })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    setTimeout(() => {
      this.buildMap()
    }, this.delay * 1.5)
  }
}
