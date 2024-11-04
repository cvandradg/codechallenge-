import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@testapp/dashboard').then(
        (m) => m.testappFrontendDashboardRoutes
      ),
  },
  {
    path: '',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('@testapp/app').then((m) => m.testappFrontendAppRoutes),
  },
];
