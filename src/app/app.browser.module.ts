import { AppComponent } from './app.component'
import { AppModule } from './app.module'
import { NgModule } from '@angular/core'
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser'
import { REQUEST } from '@nguniversal/express-engine/tokens'

export function getRequest(): any {
  return { headers: { cookie: document.cookie } };
}

@NgModule({
  bootstrap: [AppComponent],

  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),

    BrowserTransferStateModule,

    AppModule,
  ],
  providers: [
    {
      // The server provides these in main.server
      provide: REQUEST,
      useFactory: getRequest,
    },
    { provide: 'ORIGIN_URL', useValue: location.origin },
  ],
})
export class AppBrowserModule {}
