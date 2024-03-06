import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  payURL: string = 'https://momoyasser0.github.io/Fresh-Cart'
  constructor(private _HttpClient: HttpClient) { }

  checkOut(cartID: string, orderInfo: object): Observable<any> {
    return this._HttpClient.post(`orders/checkout-session/${cartID}?url=${this.payURL}`, {
      shippingAddress: orderInfo
    })
  }

  getUserOrders(cartID: any): Observable<any> {
    return this._HttpClient.get(`orders/user/${cartID}`)
  }


}
