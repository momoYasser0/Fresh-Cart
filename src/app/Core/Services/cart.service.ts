import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartNumber: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(private _HttpClient: HttpClient) { }

  addProductToCart(id: any): Observable<any> {
    return this._HttpClient.post('cart', {
      productId: id
    }

    )
  }
  getProductToCart(): Observable<any> {
    return this._HttpClient.get('cart')
  }
  removeItem(id: any): Observable<any> {
    return this._HttpClient.delete(`cart/${id}`,
    )
  }
  updateCount(id: any, count: any): Observable<any> {
    return this._HttpClient.put(`cart/${id}`, {
      count: count
    },
    )
  }
  removeAllItems(): Observable<any> {
    return this._HttpClient.delete('cart',
    )
  }


}
