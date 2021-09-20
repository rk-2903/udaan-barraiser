import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private _carCrashInfo = new Subject<any>();
  public carCrash$ = this._carCrashInfo.asObservable();
  set carCrash(carshData: any) {
    this._carCrashInfo.next(carshData);
  }


  private _fetchCrashDetails = 'https://data.cityofnewyork.us/resource/h9gi-nx95.json';
  private pageUrl = 'https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=2014-01-21T00:00:00.000';
  constructor(private httpClient: HttpClient) { }


  fetchCrashDetails() {
    return this.httpClient.get<any>(this._fetchCrashDetails,  { observe: 'response' });
  }

  paginationrecord(req:any) {
    const options = createRequestOption(req);
    return this.httpClient.get<any>(this.pageUrl, {params: options})
  }
}


export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();

  if (req) {
    Object.keys(req).forEach(key => {
      if (key !== 'sort') {
        options = options.set(key, req[key]);
      }
    });

    if (req.sort) {
      req.sort.forEach((val: string) => {
        options = options.append('sort', val);
      });
    }
  }

  return options;
};
