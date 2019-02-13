import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioWrapperComponent } from './portfolio-wrapper/portfolio-wrapper.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PortfolioWrapperComponent, SplashScreenComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    PortfolioWrapperComponent,
    SplashScreenComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
