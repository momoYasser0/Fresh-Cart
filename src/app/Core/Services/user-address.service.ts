import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {
  constructor(private _HttpClient: HttpClient) { }
  addAddress(userData: object): Observable<any> {
    return this._HttpClient.post(`addresses`, userData)
  }
  removeAddress(id: any): Observable<any> {
    return this._HttpClient.delete(`addresses/${id}`)
  }
}
