import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('@testapp/app').then((m) => m.testappFrontendAppRoutes),
  },
];
