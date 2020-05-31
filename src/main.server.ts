import { enableProdMode } from '@angular/core'
import { environment } from './environments/environment'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'

if (environment.production) {
  enableProdMode()
}

export { AppServerModule } from './app/app.server.module'

export { renderModule, renderModuleFactory } from '@angular/platform-server'

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err))