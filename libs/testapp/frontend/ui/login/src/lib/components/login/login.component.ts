import { LoginStore } from './login.store';
import { provideComponentStore } from '@ngrx/component-store';
import { MODULES } from '@testapp/shared/exports/export-modules';
import { BaseComponent } from '@testapp/shared/helpers/component-mixin';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'testapp-testapp-frontend-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MODULES],
  providers: [provideComponentStore(LoginStore)],
})
export class LoginComponent extends BaseComponent {
  loginStore = inject(LoginStore);
}
