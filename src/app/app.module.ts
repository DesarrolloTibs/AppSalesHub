import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";
import { environment } from '../environments/environment';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import { LoadingSvgComponent } from './components/loading-svg/loading-svg.component';
// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ServiceWorkerModule } from '@angular/service-worker';

export function playerFactory() {
  return player;
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [ //TODO:Declaraciones, Directivas,Componentes,pipes
    AppComponent,
    LoadingSvgComponent
  ],
  imports: [ //TODO: Solo se importan otros modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
   LoadingBarModule,
   LoadingBarHttpClientModule,
   LoadingBarRouterModule,

    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

   LottieModule.forRoot({player: playerFactory}),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
  
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
