import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { pdtDetails } from 'src/app/Core/Interfaces/product-details';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CuttextPipe } from 'src/app/Core/pipes/cuttext.pipe';
import { CartService } from 'src/app/Core/Services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, CarouselModule, CuttextPipe],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  productDetails: any = null
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsService: ProductsService, private _CartService: CartService, private _ToastrService: ToastrService, private _Renderer2: Renderer2) { }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (parms) => {
        let productID: any = parms.get('id');
        this._ProductsService.getProductDetails(productID).subscribe({
          next: (Response) => {
            this.productDetails = Response.data
          }
        })

      }
    })
  }
  addToCart(id: any, element: HTMLButtonElement) {
    this._Renderer2.setAttribute(element, 'disabled', 'true')
    this._CartService.addProductToCart(id).subscribe({
      next: (Response) => {
        if (Response.status == 'success') {
          this._ToastrService.success("Product added successfully to your cart");
          this._CartService.cartNumber.next(Response.numOfCartItems);
        }
      }
      , error: (err) => {

      }
    })
  }

  DetailsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000,
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
