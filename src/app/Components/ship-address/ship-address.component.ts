import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from 'src/app/Core/Services/cart.service';
import { OrdersService } from 'src/app/Core/Services/orders.service';

@Component({
  selector: 'app-ship-address',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ship-address.component.html',
  styleUrls: ['./ship-address.component.scss']
})
export class ShipAddressComponent implements OnInit {
  cartID: any
  constructor(private _ActivatedRoute: ActivatedRoute, private _OrdersService: OrdersService) { }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.cartID = params.get('id')

      }
    })
  }
  handleForm(orderForm: any): void {
    if (this.orderForm.valid) {
      this._OrdersService.checkOut(this.cartID, orderForm.value).subscribe({
        next: (Response) => {
          if (Response.status == 'success') {
            window.open(Response.session.url, '_self')
          }
        }, error: (err) => {
          console.log(err);

        }
      })
    }
  }
  orderForm: FormGroup = new FormGroup({
    details: new FormControl('',
      [Validators.required, Validators.minLength(3)]
    ),
    phone: new FormControl('',
      [Validators.required, Validators.pattern(/^01[0-9]{9}$/gm)]),
    city: new FormControl('',
      [Validators.required, Validators.minLength(3)]),
  })
}
