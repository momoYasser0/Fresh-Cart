import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/Core/Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartData: any;
  constructor(private _CartService: CartService, private _ToastrService: ToastrService, private _Renderer2: Renderer2) { }


  ngOnInit(): void {
    this._CartService.getProductToCart().subscribe({
      next: (Response) => {
        if (Response.status == 'success') {
          this.cartData = Response
        }
      }
    })
  }
  removeItem(id: any, element: HTMLButtonElement) {
    this._Renderer2.setAttribute(element, 'disabled', 'true')
    this._CartService.removeItem(id).subscribe({
      next: (Response) => {
        if (Response.status == "success") {
          this._ToastrService.success('item removed successfully')
          this.cartData = Response
          this._CartService.cartNumber.next(Response.numOfCartItems)
          this._Renderer2.removeAttribute(element, 'disabled')
        }
      },
      error: (err) => {
        this._Renderer2.removeAttribute(element, 'disabled')

      }
    })
  }
  updateCount(id: any, count: any, element1: HTMLButtonElement, element2: HTMLButtonElement) {
    if (count >= 1) {
      this._Renderer2.setAttribute(element1, 'disabled', 'true')
      this._Renderer2.setAttribute(element2, 'disabled', 'true')
      this._CartService.updateCount(id, count).subscribe({
        next: (Response) => {
          if (Response.status == 'success') {
            this._Renderer2.removeAttribute(element1, 'disabled')
            this._Renderer2.removeAttribute(element2, 'disabled')
            this.cartData = Response
          }
        }, error: (err) => {
          this._Renderer2.removeAttribute(element1, 'disabled')
          this._Renderer2.removeAttribute(element2, 'disabled')

        }
      })
    }
  }
  removeAllItems() {
    this._CartService.removeAllItems().subscribe({
      next: (Response) => {
        if (Response.message == 'success') {
          this.cartData = null
          this._CartService.cartNumber.next(Response.numOfCartItems)

        }
      }
    })
  }
}
