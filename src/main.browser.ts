import { enableProdMode } from '@angular/core'
import { environment } from './environments/environment'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppBrowserModule } from './app/app.browser.module'

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppBrowserModule)
