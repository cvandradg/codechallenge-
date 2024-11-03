import { Route } from '@angular/router';
import { TestappFrontendAppComponent } from './testapp-frontend-app/testapp-frontend-app.component';

export const testappFrontendAppRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    component: TestappFrontendAppComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@testapp/login').then((m) => m.testappFrontendLoginRoutes),
      },
    ],
  },
];
