import { Subject } from 'rxjs';
import { MODULES } from '@testapp/shared/exports/export-modules';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'testapp-testapp-frontend-login',
  templateUrl: './testapp-frontend-login.component.html',
  styleUrl: './testapp-frontend-login.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MODULES],
})
export class TestappFrontendLoginComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';

  private _destroySub$ = new Subject<void>();

  public ngOnInit(): void {
    console.log('init');
    // this._authService.isAuthenticated$.pipe(
    //   filter((isAuthenticated: boolean) => isAuthenticated),
    //   takeUntil(this._destroySub$)
    // ).subscribe( _ => this._router.navigateByUrl(this.returnUrl));
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public onSubmit(): void {
    this.loginValid = true;

    // this._authService.login(this.username, this.password).pipe(
    //   take(1)
    // ).subscribe({
    //   next: _ => {
    //     this.loginValid = true;
    //     this._router.navigateByUrl('/game');
    //   },
    //   error: _ => this.loginValid = false
    // });
  }
}
