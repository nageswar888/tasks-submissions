
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators'
import { QueryApi } from "../common/request/QueryApi";
import { of } from "rxjs";
import { OpenStreetMapProvider, GoogleProvider, EsriProvider } from 'leaflet-geosearch';


@Injectable()
export class DataService {

  private searchObject = new Subject<any>();
  private showSearchBar = new Subject<any>();
  public mapProvider: any = new EsriProvider();
  public searchLocation: any;

  searchObjectObservable = this.searchObject.asObservable();
  showSearchBarObservable = this.showSearchBar.asObservable();

  constructor(private queryApi: QueryApi) { }

  public setSearchObject(object: any) {
    this.searchObject.next(object);
  }

  public setSearchLocation(object: any) {
    this.searchLocation = object;
  }

  public setShowSearchBar(value: any) {
    this.showSearchBar.next(value);
  }

  public getLocationResults = ( queryObj: any ): Observable<any> => {
    return this.queryApi.doGet('CITY_ZIP_AUTOCOMPLETER', queryObj)
      .pipe(
        catchError(err => of([]))
      );
  };

  /**
   *
   * @param address
   * @returns {any}
   */
  public getLatLongByAddress = (address: string) : any => {
    return this.mapProvider
      .search({ query: address });
  };

  public rad = (x) => {
    return x * Math.PI / 180;
  };

  public getDistance = (p1, p2) : number => {
    let R = 6378137; // Earth’s mean radius in meter
    let dLat = this.rad(p2.lat - p1.lat);
    let dLong = this.rad(p2.lng - p1.lng);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d: number = R * c;
    return d; // returns the distance in meter
  };

}
