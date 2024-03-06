import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { Pdt } from 'src/app/Core/Interfaces/products';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/Core/pipes/cuttext.pipe';
import { Category } from 'src/app/Core/Interfaces/category';
import { CartService } from 'src/app/Core/Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/Core/pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from 'src/app/Core/Services/category.service';
import { WishlistService } from 'src/app/Core/Services/wishlist.service';
import { wishlist } from 'src/app/Core/Interfaces/wishlist';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterLink, CuttextPipe, SearchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  term: string = ''
  products: Pdt[] = []
  category: Category[] = []
  wishListData: string[] = []
  constructor(private _WishlistService: WishlistService, private _ProductsService: ProductsService, private _CartService: CartService, private _ToastrService: ToastrService, private _Renderer2: Renderer2, private _CategoryService: CategoryService) { }
  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response.data
      }
    })
    this._CategoryService.getCategories().subscribe({
      next: (response) => {
        this.category = response.data
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
          this._ToastrService.success('Product removed successfuly from your wish List');
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

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplaySpeed: 1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
  mainSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }
}
