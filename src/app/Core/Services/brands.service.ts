import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  constructor(private _HttpClient: HttpClient) { }

  getAllBrands(pagenum: number = 1): Observable<any> {
    return this._HttpClient.get(`brands/?limit=16&page=${pagenum}`)
  }
  getSpecificBrand(id: any): Observable<any> {
    return this._HttpClient.get(`brands/${id}`)
  }
}

