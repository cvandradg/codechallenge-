import { Injectable } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { UserCredential } from 'firebase/auth';
import { pipe, switchMap, Observable, tap } from 'rxjs';
import { Credentials } from '@testapp/shared/types/general-types';
import { ComponentStoreMixinHelper } from '@testapp/shared/helpers/component-store-mixin';

@Injectable()
export class LoginStore extends ComponentStoreMixinHelper<
  Record<string, unknown>
> {
  constructor() {
    super({});
  }

  readonly googleSignin$ = this.effect<void>(
    pipe(
      tap(() => console.log('Google Signin')),
      this.responseHandler(
        switchMap(() => this.authService.googleSignin().pipe(this.onLogin))
      )
    )
  );

  readonly accessAccount$ = this.effect(
    (credentials$: Observable<Credentials>) =>
      credentials$.pipe(
        this.responseHandler(
          switchMap((credentials: Credentials) =>
            this.authService.login(credentials).pipe(this.onLogin)
          )
        )
      )
  );

  get onLogin() {
    return pipe(
      tapResponse(this.onSuccess, ({ error, user }) => {
        this.handleError(error);
      })
    );
  }

  get onSuccess() {
    return (user: UserCredential) =>
      user.user.emailVerified && this.router.navigate(['dashboard']);
  }
}
