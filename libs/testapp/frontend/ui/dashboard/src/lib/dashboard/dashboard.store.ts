import { tapResponse } from '@ngrx/operators';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { switchMap, Observable, tap, debounceTime, pipe } from 'rxjs';
import { SwapiService } from '@testapp/shared/services/swapi.service';
import { ComponentStoreMixinHelper } from '@testapp/shared/helpers/component-store-mixin';

interface person {
  name: string;
  birth_year: string;
}

@Injectable()
export class DashboardStore extends ComponentStoreMixinHelper<{
  searchList: person[] | null;
  selectedList: person[] | null;
}> {
  constructor(private http: HttpClient) {
    super({ searchList: null, selectedList: null });
  }

  swapiService = inject(SwapiService);

  readonly searchList$ = this.select((state) => state['searchList']);
  readonly selectedList$ = this.select((state) => state['selectedList']);

  readonly setSearchList = this.updater(
    (state, searchList: person[] | null) => ({
      ...state,
      searchList,
    })
  );

  readonly setselectedList = this.updater((state, selected: person) => ({
    ...state,
    selectedList: state.selectedList
      ? [...state.selectedList, selected]
      : [selected],
  }));

  readonly search$ = this.effect((searchValue$: Observable<any>) =>
    searchValue$.pipe(
      tap(() => this.setSearchList(null)),
      debounceTime(400),
      this.responseHandler(
        switchMap((searchValue: string) =>
          this.swapiService.searchPeople(searchValue)
        )
      ),
      tapResponse(this.onSuccess, this.handleError)
    )
  );

  readonly selectedPerson$ = this.effect((selected$: Observable<person>) =>
    selected$.pipe(tap((selected) => this.setselectedList(selected)))
  );

  readonly logout$ = this.effect<void>(
    pipe(
      this.responseHandler(
        switchMap(() =>
          this.authService.signOut().pipe(tap(() => this.router.navigate([''])))
        )
      )
    )
  );

  get onSuccess() {
    return (result: { results: [] }) => this.setSearchList(result.results);
  }
}
