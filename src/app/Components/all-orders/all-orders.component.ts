import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Core/Interfaces/order';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { OrdersService } from 'src/app/Core/Services/orders.service';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {
  orderData: Order[] = []
  userID: string = ''
  constructor(private _OrdersService: OrdersService, private _AuthService: AuthService) { }
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: (data) => {
        if (data != null) {
          this.userID = data.id
          this._OrdersService.getUserOrders(this.userID).subscribe({
            next: (Response) => {
              this.orderData = Response
              window.scrollTo(0, 0)
            }
          })
        }
      }
    })



  }



}

