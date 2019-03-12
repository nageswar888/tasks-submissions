import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators'
import { QueryApi } from "../common/request/QueryApi";
import { of } from "rxjs";

@Injectable()
export class SearchHealthCareProviderService {

  constructor(private queryApi: QueryApi) {}

  /**
   * Fetch autocompleter data from api
   * @param queryParams
   * @returns {Observable<Array|any>}
     */
  getAutoCompleterData = (queryParams: any):Observable<any> => {
      return this.queryApi.doGet('AUTOCOMPLETER', queryParams)
      .pipe(
        catchError(err => of([]))
      );
  }

  /**
   * search for providers
   * @param queryParams
   * @returns {Observable<Array|any>}
     */
  searchProvider = (queryParams: any):Observable<any> => {
    return this.queryApi.doGet('SEARCH_PROVIDER', queryParams)
      .pipe(
        catchError(err => of([]))
      );
  }

  selectedProviders= (queryParams: any):Observable<any> => {
    return this.queryApi.doGet('COMPARE_PROVIDER', queryParams)
      .pipe(
        catchError(err => of([]))
      );
  }
}
