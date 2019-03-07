import { Component, OnInit, Input, Injector, DoCheck, IterableDiffers, Output, EventEmitter } from '@angular/core';

import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent extends BaseComponent implements OnInit, DoCheck {

  @Input() images: Array<string> = [];
  @Input() openLightbox = false;
  @Output() openLightboxChange = new EventEmitter();
  private differ: any;
  selectedImage: string;

  constructor(
    differs: IterableDiffers,
    injector: Injector
  ) {
    super(injector);
    this.differ = differs.find([]).create(null);
  }

  ngOnInit() {
  }

  ngDoCheck() {
    const change = this.differ.diff(this.images);
    if (change) {
      this.selectedImage = this.images[0];
    }
    document.body.className = this.openLightbox ?
      'noscroll' :
      document.body.className.replace('noscroll', '');
  }

  // Close the Lightbox
  closeLightbox() {
    this.openLightbox = false;
    this.openLightboxChange.emit(false);
  }


  // Next/previous controls
  plusSlides(move: number) {
    const nextPos = this.images.indexOf(this.selectedImage) + move;
    if (move < 0) {
      this.selectedImage = nextPos < 0 ? this.images[this.images.length - 1] : this.images[nextPos];
    } else {
      this.selectedImage = nextPos >= this.images.length ? this.images[0] : this.images[nextPos];
    }
  }
}
