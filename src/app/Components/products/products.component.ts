import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import { Pdt } from 'src/app/Core/Interfaces/products';
import { CartService } from 'src/app/Core/Services/cart.service';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { WishlistService } from 'src/app/Core/Services/wishlist.service';
import { CuttextPipe } from 'src/app/Core/pipes/cuttext.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe, NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Pdt[] = []
  wishListData: string[] = []
  pageItems: number = 0;
  currentPage: number = 1;
  totalItems: number = 0
  constructor(private _ProductsService: ProductsService, private _WishlistService: WishlistService, private _Renderer2: Renderer2, private _CartService: CartService, private _ToastrService: ToastrService) { }
  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response.data
        this.pageItems = response.metadata.limit
        this.currentPage = response.metadata.currentPage;
        this.totalItems = response.results;

      }
    })
    this._WishlistService.getWishList().subscribe({
      next: (Response) => {
        if (Response.status == "success") {
          const NewData = Response.data.map((item: any) => item._id)
          this.wishListData = NewData

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
  pageChanged(event: any): void {
    this._ProductsService.getAllProducts(event).subscribe({
      next: (response) => {
        this.products = response.data
        this.pageItems = response.metadata.limit
        this.currentPage = response.metadata.currentPage;
        this.totalItems = response.results;
        window.scrollTo(0, 0)
      }
    })

  }
  addFav(id: any): void {
    this._WishlistService.addToWishList(id).subscribe({
      next: (Response) => {
        if (Response.status == 'success') {
          this._ToastrService.success(Response.message);
          this._WishlistService.FavNumber.next(Response.data.length);
          this.wishListData = Response.data
        }
      }
      , error: (err) => {
        if (err.error.statusMsg = 'fail') {
          this._ToastrService.error(err.error.message)
        }

      }
    })
  }
  removeFav(id: any): void {
    this._WishlistService.removeItem(id).subscribe({
      next: (Response) => {
        if (Response.status == 'success') {
          this._ToastrService.success(Response.message);
          this._WishlistService.FavNumber.next(Response.data.length)
          this.wishListData = Response.data
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
