import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from '@agm/core';
import { FitBoundsService } from '@agm/core/services/fit-bounds';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { BlockUIModule } from 'ng-block-ui';
import { NgxMasonryModule } from 'ngx-masonry';


import { HeaderComponent } from './header/header.component';
import { PortfolioWrapperComponent } from './portfolio-wrapper/portfolio-wrapper.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LinkMenuComponent } from './link-menu/link-menu.component';
import { MapD3Component } from './map-d3/map-d3.component';
import { GoTopComponent } from './go-top/go-top.component';
import { ImageComponent } from './image/image.component';
import { IncreasingCounterComponent } from './increasing-counter/increasing-counter.component';
import { LoaderComponent } from './loader/loader.component';
import { LightboxComponent } from './lightbox/lightbox.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PortfolioWrapperComponent,
    SplashScreenComponent,
    NotFoundComponent,
    LinkMenuComponent,
    MapD3Component,
    GoTopComponent,
    ImageComponent,
    IncreasingCounterComponent,
    LoaderComponent,
    LightboxComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DeferLoadModule,
    BlockUIModule.forRoot(),
    TranslateModule.forChild()
  ],
  exports: [
    // components
    PortfolioWrapperComponent,
    SplashScreenComponent,
    MapD3Component,
    LinkMenuComponent,
    ImageComponent,
    IncreasingCounterComponent,
    LightboxComponent,
    // modules
    FontAwesomeModule,
    TranslateModule,
    AgmCoreModule,
    HttpClientModule,
    ScrollToModule,
    DeferLoadModule,
    BlockUIModule,
    NgxMasonryModule
  ],
  providers: [
    FitBoundsService
  ]
})
export class SharedModule { }
