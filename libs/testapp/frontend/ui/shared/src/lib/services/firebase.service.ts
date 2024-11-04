import { from, Observable, of } from 'rxjs';
import { sendEmailVerification, User, UserCredential } from 'firebase/auth';
import { Injectable, inject } from '@angular/core';
import { Credentials } from '../types/general-types';
import {
  Auth,
  user,
  signOut,
  authState,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);

  readonly user$ = user(this.auth);
  readonly authState$ = authState(this.auth);

  signOut() {
    return from(signOut(this.auth));
  }

  login({ user, pass }: Credentials): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, user, pass));
  }

  sendEmailVerification(user: User) {
    return from(sendEmailVerification(user));
  }

  googleSignin(): Observable<UserCredential> {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
  }
}
