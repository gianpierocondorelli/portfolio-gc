import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from '@agm/core';

import { HeaderComponent } from './header/header.component';
import { PortfolioWrapperComponent } from './portfolio-wrapper/portfolio-wrapper.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LinkMenuComponent } from './link-menu/link-menu.component';

@NgModule({
  declarations: [HeaderComponent, PortfolioWrapperComponent, SplashScreenComponent, NotFoundComponent, LinkMenuComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule.forChild()
  ],
  exports: [
    PortfolioWrapperComponent,
    SplashScreenComponent,
    FontAwesomeModule,
    TranslateModule,
    LinkMenuComponent,
    AgmCoreModule
  ],
  providers: [
  ]
})
export class SharedModule { }
