import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideCharts(withDefaultRegisterables()),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideStore(),
    provideEffects(),
  ],
};
