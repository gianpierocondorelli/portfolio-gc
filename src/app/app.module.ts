import { NgtUniversalModule } from '@ng-toolkit/universal'
import { CommonModule } from '@angular/common'
import { TransferHttpCacheModule } from '@nguniversal/common'
import { NgModule } from '@angular/core'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { Angulartics2Module } from 'angulartics2'

import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module'
import { environment } from 'environments/environment'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    Angulartics2Module.forRoot({
      pageTracking: {
        clearIds: true,
        clearQueryParams: true,
      },
      developerMode: !environment.production
    }),
    SharedModule.forRoot(),
  ],
})
export class AppModule {}
