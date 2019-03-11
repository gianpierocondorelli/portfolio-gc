import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';


import { UniversalInterceptor } from '@shared/http-interceptors/universal.interceptor';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
    bootstrap: [AppComponent],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: UniversalInterceptor,
        /* Multi is important or you will delete all the other interceptors */
        multi: true
    }],
    imports: [
        BrowserModule.withServerTransition({ appId: 'app-root' }),
        AppModule,
        ServerModule,
        NoopAnimationsModule,
        ModuleMapLoaderModule,
        ServerTransferStateModule, // comment
    ]
})
export class AppServerModule { }
