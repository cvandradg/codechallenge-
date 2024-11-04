import { inject, Injectable } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { Credentials } from '@testapp/shared/types/general-types';
import { switchMap, Observable, tap } from 'rxjs';
import { ComponentStoreMixinHelper } from '@testapp/shared/helpers/component-store-mixin';
import { HttpClient } from '@angular/common/http';
import { SwapiService } from '@testapp/shared/services/swapi.service';

@Injectable()
export class DashboardStore extends ComponentStoreMixinHelper<{
  searchList: { name: string; birthDate: string }[];
  selectedList: { name: string; birthDate: string }[];
}> {
  constructor(private http: HttpClient) {
    super({ searchList: [], selectedList: [] });
  }

  swapiService = inject(SwapiService);

  readonly searchList$ = this.select((state) => state['searchList']);
  readonly selectedList$ = this.select((state) => state['selectedList']);

//   readonly setSearchList = this.updater((state, name: boolean) => ({
//     ...state,
//     name: name,
//   }));

//   readonly setBirthDate = this.updater((state, name: boolean) => ({
//     ...state,
//     name: name,
//   }));



  readonly accessAccount$ = this.effect(
    (searchValue$: Observable<''>) =>
      searchValue$.pipe(
        this.responseHandler(
          switchMap((searchValue: string) =>
            this.swapiService.searchPeople(searchValue).pipe(
                tap(x=> console.log('resulted in x,',x))
            )
          )
        )
      )
  );



}
