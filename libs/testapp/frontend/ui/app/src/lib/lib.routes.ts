import { Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { canActivate } from '@angular/fire/auth-guard';
import { redirectLoggedIn,redirectUnauthorized } from "@testapp/shared/helpers/firebase-helpers";

export const testappFrontendAppRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@testapp/login').then((m) => m.testappFrontendLoginRoutes),
        ...canActivate(redirectLoggedIn),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@testapp/dashboard').then(
            (m) => m.testappFrontendDashboardRoutes
          ),
        ...canActivate(redirectUnauthorized),
      },
    ],
  },
];
