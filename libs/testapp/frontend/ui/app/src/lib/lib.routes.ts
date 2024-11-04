import { Route } from '@angular/router';
import { AppComponent } from './app/app.component';

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
      },
    ],
  },
];
