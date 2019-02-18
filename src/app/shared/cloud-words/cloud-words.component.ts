import { Component, OnInit, Injector, HostListener, Input } from '@angular/core';

import { BaseComponent } from '../base-component';
import { EnhancedD3, EnhancedD3Service } from '../services/enhanced-d3.service';

@Component({
  selector: 'app-cloud-words',
  templateUrl: './cloud-words.component.html',
  styleUrls: ['./cloud-words.component.scss']
})
export class CloudWordsComponent extends BaseComponent implements OnInit {

  @Input() uniqueId: string;
  @Input() words: string[] = [];

  private d3: EnhancedD3;


  constructor(injector: Injector, enhancedD3: EnhancedD3Service) {
    super(injector);
    this.d3 = enhancedD3.getEnhancedD3();
  }

  ngOnInit() {
    setTimeout(() => {
      this.buildCloud();
    }, 100);
  }

  buildCloud() {
    const map = this.d3.select(`#cloud-${this.uniqueId}`);
    const div = map.node() as Element;
    map.selectAll('*').remove();

    const svg = map.append('svg'),
      width = div.clientWidth,
      height = div.clientHeight;

    svg.attr('width', `${width}`)
      .attr('height', `${height}`);

    // This function takes the output of 'layout' above and draw the words
    // Better not to touch it. To change parameters, play with the 'layout' variable above


    // Constructs a new cloud layout instance. It run an algorythm to find the position of words that suits your requirements
    let layout;

    const draw = function (words) {
      svg
        .append('g')
        .attr('transform', 'translate(' + layout.size()[0] / 2 + ',' + layout.size()[1] / 2 + ')')
        .selectAll('text')
        .data(words)
        .enter().append('text')
        .style('font-size', function (d) { return d.size + 'vh'; })
        .style('font-family', 'pt-sans, sans-serif')
        .style('fill', '#2274a5')
        .style('stroke', '#2274a5')
        .attr('text-anchor', 'middle')
        .attr('transform', function (d) {
          return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
        })
        .text(function (d) { return d.text; });
    };

    layout = this.d3.cloud()
      .size([width, height])
      .words(this.words.map((d) => ({ text: d })))
      .padding(15)
      .fontSize(5)
      .on('end', draw);
    layout.start();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.buildCloud();
  }

}
