import { Route } from '@angular/router';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '@testapp/shared/environments/environment';
import { TestappFrontendAppComponent } from './testapp-frontend-app/testapp-frontend-app.component';

export const testappFrontendAppRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    component: TestappFrontendAppComponent,
    providers: [
      provideAuth(() => getAuth()),
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    ],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@testapp/login').then((m) => m.testappFrontendLoginRoutes),
      },
    ],
  },
];
