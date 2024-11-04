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
  filteredStates: Observable<State[]> = this.stateCtrl.valueChanges.pipe(
    startWith(''),
    map((state) => (state ? this._filterStates(state) : this.states.slice()))
  );

  folders: Section[] = [];

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  onItemSelected(event: any) {
    const selectedStateName = event.option.value;
    const selectedState = this.states.find(
      (state) => state.name === selectedStateName
    );

    if (selectedState) {
      this.folders.push({
        name: selectedState.name,
        population: selectedState.population,
      });
      console.log('Updated folders:', this.folders);
    }
  }
  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter((state) =>
      state.name.toLowerCase().includes(filterValue)
    );
  }
}
