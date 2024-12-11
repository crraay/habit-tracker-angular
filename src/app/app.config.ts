import { ApplicationConfig, enableProdMode, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApiModule } from './web-api/api.module';
import { environment } from 'environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { refreshTokenInterceptor, tokenInterceptor } from './interceptors';

if (environment.production) {
  enableProdMode();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        tokenInterceptor,
        refreshTokenInterceptor
      ])
    ),
    importProvidersFrom([
      BrowserAnimationsModule,
      ApiModule.forRoot({ rootUrl: environment.apiUrl })
    ])
  ]
};
