import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() src: string;
  @Input() classToAppend: string;
  show = false;
  loaded = false;

  constructor() { }

  ngOnInit() {
  }

}
