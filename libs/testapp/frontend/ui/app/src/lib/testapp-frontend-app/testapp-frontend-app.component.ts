import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'testapp-testapp-frontend-app',
  templateUrl: './testapp-frontend-app.component.html',
  styleUrl: './testapp-frontend-app.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
})
export class TestappFrontendAppComponent {}
