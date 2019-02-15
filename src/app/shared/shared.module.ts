import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule, FitBoundsAccessor } from '@agm/core';

import { HeaderComponent } from './header/header.component';
import { PortfolioWrapperComponent } from './portfolio-wrapper/portfolio-wrapper.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LinkMenuComponent } from './link-menu/link-menu.component';
import { FitBoundsService } from '@agm/core/services/fit-bounds';
import { MapD3Component } from './map-d3/map-d3.component';
import { HttpClientModule } from '@angular/common/http';
import { CloudWordsComponent } from './cloud-words/cloud-words.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [HeaderComponent, PortfolioWrapperComponent, SplashScreenComponent, NotFoundComponent, LinkMenuComponent, MapD3Component, CloudWordsComponent, LoaderComponent],
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
    // modules
    FontAwesomeModule,
    TranslateModule,
    AgmCoreModule,
    HttpClientModule
  ],
  providers: [
    FitBoundsService
  ]
})
export class SharedModule { }
