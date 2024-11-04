import { Injectable } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { UserCredential } from 'firebase/auth';
import { Credentials } from '@testapp/shared/types/general-types';
import { pipe, from, EMPTY, forkJoin, switchMap, Observable } from 'rxjs';
import { ComponentStoreMixinHelper } from '@testapp/shared/helpers/component-store-mixin';

@Injectable({
  providedIn: 'root'
})
export class LoginStore extends ComponentStoreMixinHelper<
  Record<string, unknown>
> {
  constructor() {
    super({});
  }

  readonly googleSignin$ = this.effect<void>(
    pipe(
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
        this.onSigninError$(user);
        this.handleError(error);
      })
    );
  }

  get onSuccess() {
    return (user: UserCredential) => {
      console.log('User:', user);
      return user.user.emailVerified
        ? this.router.navigate(['dashboard'])
        : this.authService.sendEmailVerification(user.user);
    };
  }

  readonly onSigninError$ = this.effect((user$: Observable<UserCredential>) =>
    user$.pipe(
      switchMap((user: UserCredential) => {
        return this.authService.additionalUserInfo(user)?.isNewUser
          ? forkJoin([from(this.authService.deleteCurrentUser(user.user))])
          : EMPTY;
      })
    )
  );
}
