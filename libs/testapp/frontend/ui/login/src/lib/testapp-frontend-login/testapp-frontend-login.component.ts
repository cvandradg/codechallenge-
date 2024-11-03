import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'testapp-testapp-frontend-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testapp-frontend-login.component.html',
  styleUrl: './testapp-frontend-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestappFrontendLoginComponent {}
