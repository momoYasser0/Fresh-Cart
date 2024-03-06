import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/Core/Services/cart.service';
import { WishlistService } from 'src/app/Core/Services/wishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
  constructor(private _Router: Router, private _CartService: CartService, private _WishlistService: WishlistService) { }
  isScroll: boolean = false;
  cartNumb: number = 0
  wishNum: number = 0

  @HostListener('window:scroll')
  isScrollingFn() {
    window.scrollY > 300 ? this.isScroll = true : this.isScroll = false
  }

  signout(): void {
    localStorage.removeItem('token');
    this._Router.navigate(['/login'])
  }

  ngOnInit(): void {

    this._CartService.cartNumber.subscribe({
      next: (num) => {
        this.cartNumb = num

      }, error: (err) => {
        console.log(err);


      }
    })
    this._CartService.getProductToCart().subscribe({
      next: (data) => {
        if (data.numOfCartItems > 0) {
          this.cartNumb = data.numOfCartItems
        }
      }, error: (err) => {
        if (err.error.statusMsg == 'fail') {
          console.log("No Cart Exists for this user");
        }


      }
    })
    this._WishlistService.FavNumber.subscribe({
      next: (num) => {
        this.wishNum = num
      }
    })
    this._WishlistService.getWishList().subscribe({
      next: (response) => {
        this.wishNum = response.count
      }
    })
    navbar()
  }



}
function navbar() {
  document.querySelectorAll('.nav-item').forEach((item) => item.addEventListener('click', function () {
    document.getElementById('btn')?.classList.add('collapsed')
    document.getElementById('navbarNav')?.classList.remove('show')
    document.getElementById('btn')?.setAttribute('aria-expanded', 'false')
  }))
}
