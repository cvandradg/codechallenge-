import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const testappFrontendLoginRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: LoginComponent },
];
