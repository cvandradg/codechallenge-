import { SwapiService } from '../services/swapi.service';
import { BaseComponent } from '../helpers/component-mixin';
import { AuthService } from '../services/firebase.service';
import { ErrorHandlerService } from '../services/error-handler.service';

export const SERVICES = [
  AuthService,
  SwapiService,
  BaseComponent,
  ErrorHandlerService,
];
