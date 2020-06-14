import { NgModule } from '@angular/core'
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server'
import { BrowserModule } from '@angular/platform-browser'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'

import { UniversalInterceptor } from './shared/http-interceptors/universal.interceptor'
import { AppComponent } from './app.component'
import { AppModule } from './app.module'
import { Observable, Observer } from 'rxjs' 
import { readFileSync } from 'fs'

export function universalLoader(): TranslateLoader {
  return {
      getTranslation: (lang: string) => {
          return Observable.create((observer: Observer<unknown>) => {
              observer.next(JSON.parse(readFileSync(`./dist/browser/assets/i18n/${lang}.json`, 'utf8')));
              observer.complete();
          });
      }
  } as TranslateLoader;
}

@NgModule({
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptor,
      /* Multi is important or you will delete all the other interceptors */
      multi: true,
    },
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ServerTransferStateModule, // comment
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useFactory: universalLoader}
  })
  ],
})
export class AppServerModule {}
