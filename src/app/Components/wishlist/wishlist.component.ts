import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/Core/Services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { wishlist } from 'src/app/Core/Interfaces/wishlist';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/Core/pipes/cuttext.pipe';
import { CartService } from 'src/app/Core/Services/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishList: wishlist[] = []
  wishListID: string[] = []
  constructor(private _WishlistService: WishlistService, private _ToastrService: ToastrService, private _Renderer2: Renderer2, private _CartService: CartService) { }
  ngOnInit(): void {
    this._WishlistService.getWishList().subscribe({
      next: (Response) => {
        if (Response.status == "success") {
          this.wishList = Response.data
          const NewData = Response.data.map((item: any) => item._id)
          this.wishListID = NewData


        }
      }, error: (err) => {
        if (err.statusMsg == 'fail') {
          this._ToastrService.error(err.message)
        }

      }
    })
  }

  addToCart(id: any, element: HTMLButtonElement) {
    this._Renderer2.setAttribute(element, 'disabled', 'true')
    this._CartService.addProductToCart(id).subscribe({
      next: (Response) => {
        if (Response.status == 'success') {
          this._Renderer2.removeAttribute(element, 'disabled')
          this._ToastrService.success("Product added successfully to your cart");
          this._CartService.cartNumber.next(Response.numOfCartItems);
        }
      }
      , error: (err) => {
        this._Renderer2.removeAttribute(element, 'disabled')

      }
    })
  }
  removeFav(id: any): void {
    this._WishlistService.removeItem(id).subscribe({
      next: (Response) => {
        if (Response.status == 'success') {
          this._ToastrService.success(Response.message);
          this._WishlistService.FavNumber.next(Response.data.length);
          this.wishListID = Response.data
          const NewID = this.wishList.filter((item: any) => this.wishListID.includes(item._id))
          this.wishList = NewID



        }
      }
      , error: (err) => {
        if (err.error.statusMsg = 'fail') {
          this._ToastrService.error(err.error.message)
        }
      }
    })
  }
}
