import {
  ApplicationConfig,
  ErrorHandler,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { appRoutes } from './app.routes';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '@testapp/shared/environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ErrorHandlerService } from '@testapp/shared/services/error-handler.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideRouter(appRoutes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(BrowserModule, BrowserAnimationsModule),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideHttpClient(withFetch()),
    {
      provide: FIREBASE_OPTIONS,
      useValue: environment.firebaseConfig,
    },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
    },
  ],
};
