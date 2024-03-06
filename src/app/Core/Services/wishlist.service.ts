import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  FavNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private _HttpClient: HttpClient) { }

  addToWishList(id: any): Observable<any> {
    return this._HttpClient.post(`wishlist`, {
      productId: id
    })
  }
  getWishList(): Observable<any> {
    return this._HttpClient.get(`wishlist`)
  }
  removeItem(pdtId: any): Observable<any> {
    return this._HttpClient.delete(`wishlist/${pdtId}`)
  }
}
