import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from '@agm/core';
import { FitBoundsService } from '@agm/core/services/fit-bounds';
import { ScrollToModule } from 'ng2-scroll-to-el';

import { HeaderComponent } from './header/header.component';
import { PortfolioWrapperComponent } from './portfolio-wrapper/portfolio-wrapper.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LinkMenuComponent } from './link-menu/link-menu.component';
import { MapD3Component } from './map-d3/map-d3.component';
import { CloudWordsComponent } from './cloud-words/cloud-words.component';
import { GoTopComponent } from './go-top/go-top.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PortfolioWrapperComponent,
    SplashScreenComponent,
    NotFoundComponent,
    LinkMenuComponent,
    MapD3Component,
    CloudWordsComponent,
    GoTopComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule.forChild()
  ],
  exports: [
    // components
    PortfolioWrapperComponent,
    SplashScreenComponent,
    MapD3Component,
    LinkMenuComponent,
    CloudWordsComponent,
    // modules
    FontAwesomeModule,
    TranslateModule,
    AgmCoreModule,
    HttpClientModule,
    ScrollToModule
  ],
  providers: [
    FitBoundsService
  ]
})
export class SharedModule { }
