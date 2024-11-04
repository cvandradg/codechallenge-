import { inject, Injectable } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { Credentials } from '@testapp/shared/types/general-types';
import { switchMap, Observable, tap } from 'rxjs';
import { ComponentStoreMixinHelper } from '@testapp/shared/helpers/component-store-mixin';
import { HttpClient } from '@angular/common/http';
import { SwapiService } from '@testapp/shared/services/swapi.service';

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

  readonly setSearchList = this.updater((state, searchList: person[]) => ({
    ...state,
    searchList,
  }));

  //   readonly setBirthDate = this.updater((state, name: boolean) => ({
  //     ...state,
  //     name: name,
  //   }));

  readonly search$ = this.effect((searchValue$: Observable<any>) =>
    searchValue$.pipe(
      tap((value: any) => console.log('value', value)),
      this.responseHandler(
        switchMap((searchValue: string) =>
          this.swapiService
            .searchPeople(searchValue)
            .pipe(tap((x) => console.log('resulted in x,', x)))
        )
      ),
      tapResponse(this.onSuccess, this.handleError)
    )
  );

  get onSuccess() {
    return (result: { results: [] }) => {
      console.log('result', result.results);
      this.setSearchList(result.results);
    };
  }
}
