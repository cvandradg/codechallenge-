import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@testapp/app').then((m) => m.testappFrontendAppRoutes),
  },
];
