import { Component, OnInit, Injector, Input, HostListener, OnDestroy } from '@angular/core';
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

  private d3: D3;

  constructor(injector: Injector, d3srv: D3Service) {
    super(injector);
    this.d3 = d3srv.getD3();
  }

  ngOnInit() {
    this.buildMap();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  private buildMap() {
    const map = this.d3.select('#map');
    const div = map.node() as Element;
    map.selectAll('*').remove();

    const svg = this.d3.select('#map').append('svg'),
      width = div.getBoundingClientRect().width,
      height = div.getBoundingClientRect().height;

    svg.attr('width', `${width}`)
      .attr('height', `${height}`)
      .style('overflow', 'visible');

    // Map and projection
    const projection = this.d3.geoMercator()
      .center([this.longitude, this.latitude])                // GPS of location to zoom on
      .scale(this.scale)                       // This is like the zoom
      .translate([width / 2, height / 2]);

    this.subscription = this.http.get('assets/maps/world.json').subscribe(
      (data: any) => {
        // Filter data
        // data.features = data.features.filter((d: any) => this.markers.includes(
        //   (m: any) => d.properties.name === m.country)
        // );

        // Draw the map
        svg.append('g')
          .selectAll('path')
          .data(data.features)
          .enter()
          .append('path')
          .attr('fill', '#b8b8b8')
          .attr('d', this.d3.geoPath()
            .projection(projection)
          )
          .style('stroke', 'black')
          .style('opacity', .3)

        // Add circles:
        svg
          .selectAll('myCircles')
          .data(this.markers)
          .enter()
          .append('circle')
          .attr('cx', (d: any) => projection([d.longitude, d.latitude])[0])
          .attr('cy', (d: any) => projection([d.longitude, d.latitude])[1])
          .attr('r', 14)
          .style('fill', '69b3a2')
          .attr('stroke', '#69b3a2')
          .attr('stroke-width', 3)
          .attr('fill-opacity', .4)
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.buildMap();
  }
}
