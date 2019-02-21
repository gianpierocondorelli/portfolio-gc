import { Component, OnInit, Injector, Input, HostListener, OnDestroy, AfterContentInit } from '@angular/core';
import { D3, D3Service } from 'd3-ng2-service';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-map-d3',
  templateUrl: './map-d3.component.html',
  styleUrls: ['./map-d3.component.scss']
})
export class MapD3Component extends BaseComponent implements OnInit, OnDestroy {

  @Input() height = 40;
  @Input() markers = [];
  @Input() latitude = 47;
  @Input() longitude = 2;
  @Input() scale = 750;
  @Input() visible = true;
  @Input() country: string;
  @Input() uniqueId = 'map';

  private d3: D3;
  numberId: string;

  constructor(injector: Injector, d3srv: D3Service) {
    super(injector);
    this.d3 = d3srv.getD3();
  }

  ngOnInit() {
    setTimeout(() => {
      this.buildMap();
    }, 100);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  private buildMap() {
    const map = this.d3.select(`.map[id="map${this.uniqueId}"]`);
    const div = map.node() as Element;
    map.selectAll('*').remove();

    const svg = this.d3.select(`.map[id="map${this.uniqueId}"]`).append('svg'),
      width = div.clientWidth,
      height = div.clientHeight;

    svg.attr('width', `${width}`)
      .attr('height', `${height}`)
      .style('overflow', 'visible');

    // Map and projection
    const projection = this.d3.geoMercator()
      .center([this.longitude, this.latitude])                // GPS of location to zoom on
      .scale(this.scale || 750)                       // This is like the zoom
      .translate([width / 2, height / 2]);

    this.subscription = this.http.get('assets/maps/world.json').subscribe(
      (data: any) => {
        // Filter data
        data.features = this.country && this.country.length > 0 ?
          data.features.filter((d: any) => d.properties.name === this.country)
          : data.features;

        // Draw the map
        svg.append('g')
          .selectAll('path')
          .data(data.features)
          .enter()
          .append('path')
          .attr('fill', '#e9ecef')
          .attr('d', this.d3.geoPath()
            .projection(projection)
          )
          .style('stroke', '#6c757d')
          .style('opacity', .3);

        // Add circles:
        svg
          .selectAll('myCircles')
          .data(this.markers)
          .enter()
          .append('circle')
          .attr('cx', (d: any) => projection([d.longitude, d.latitude])[0])
          .attr('cy', (d: any) => projection([d.longitude, d.latitude])[1])
          .attr('r', 14)
          .style('fill', '#6dd3ce')
          .attr('stroke', '#083d77')
          .attr('stroke-width', 1)
          .attr('stroke-opacity', 0.2)
          .attr('fill-opacity', .2);
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    setTimeout(() => {
      this.buildMap();
    }, 250);
  }
}
