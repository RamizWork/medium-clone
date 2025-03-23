import {ApplicationConfig, provideZoneChangeDetection, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideStore, StoreRootModule} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideStore(),
    StoreRootModule,
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
    }),
  ],
};
