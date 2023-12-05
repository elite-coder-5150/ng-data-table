import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(page: any): Observable<any> {
    return page;
  }
}
