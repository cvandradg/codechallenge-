import { emailVerified } from "@angular/fire/auth-guard";
import { map, pipe } from "rxjs";

export const unverifiedTo = (redirect: string[]) =>
    pipe(
      emailVerified,
      map((emailVerified) => emailVerified || redirect)
    );
  
  export const verifiedTo = (redirect: string[]) =>
    pipe(
      emailVerified,
      map((emailVerified) => !emailVerified || redirect)
    );
  
  export const redirectLoggedIn = () => verifiedTo(['dashboard']);
  export const redirectUnauthorized = () => unverifiedTo(['']);
  