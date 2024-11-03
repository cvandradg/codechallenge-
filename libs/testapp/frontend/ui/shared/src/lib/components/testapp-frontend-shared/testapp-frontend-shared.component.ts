import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'testapp-testapp-frontend-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testapp-frontend-shared.component.html',
  styleUrl: './testapp-frontend-shared.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestappFrontendSharedComponent {}
