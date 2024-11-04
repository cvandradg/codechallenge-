import { Directive, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Credentials, validations } from '../types/general-types';

@Directive()
export class BaseComponent {
  router = inject(Router);
  formBuilder = inject(FormBuilder);

  loginInputForm = this.formBuilder.group({
    user: validations(Validators.email),
    pass: validations(),
  });

  get credentials(): Credentials {
    return {
      user: this.loginInputForm.get('user')?.value as string,
      pass: this.loginInputForm.get('pass')?.value as string,
    };
  }
}
