import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MODULES } from '@testapp/shared/exports/export-modules';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { DashboardStore } from './dashboard.store';
import { provideComponentStore } from '@ngrx/component-store';

export interface State {
  flag: string;
  name: string;
  population: string;
}

export interface Section {
  name: string;
  population: string;
}

@Component({
  selector: 'lib-testapp-frontend-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,

  imports: [MODULES],
  providers: [provideComponentStore(DashboardStore)],
})
export class TestappFrontendDashboardComponent {
  dashboardStore = inject(DashboardStore);
  stateCtrl = new FormControl('');
}
