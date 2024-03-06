import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) { }

  getAllProducts(pageNum: number = 1): Observable<any> {
    return this._HttpClient.get(`products?page=${pageNum}&limit=24`);
  }


  getProductDetails(id: string): Observable<any> {
    return this._HttpClient.get(`products/${id}`);
  }

}
