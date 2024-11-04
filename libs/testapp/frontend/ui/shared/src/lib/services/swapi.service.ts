import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface Person {
  name: string;
  birth_year: string;
  height: string;
  mass: string;
}

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private readonly API_URL = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) {}

  searchPeople(query: string): Observable<{ results: Person[] }> {
    return this.http.get<{ results: Person[] }>(
      `${this.API_URL}?search=${query}`
    );
  }
}
