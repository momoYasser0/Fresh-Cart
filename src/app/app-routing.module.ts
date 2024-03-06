import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Core/Guard/auth.guard';

const routes: Routes = [
  {
    path: '', canActivate: [authGuard], loadComponent: () => import('./Layouts/blank-layout/blank-layout.component').then(c => c.BlankLayoutComponent), children: [
      {
        path: "", redirectTo: 'home', pathMatch: 'full'
      }, {
        path: 'home', loadComponent: () => import('./Components/home/home.component').then(c => c.HomeComponent), title: 'Home'
      },
      {
        path: 'categories', loadComponent: () => import('./Components/categories/categories.component').then(c => c.CategoriesComponent), title: 'Categories'
      }
      ,
      {
        path: 'categorydetails/:id', loadComponent: () => import('./Components/category-details/category-details.component').then(c => c.CategoryDetailsComponent), title: 'Categories Details'
      }
      ,
      {
        path: 'products', loadComponent: () => import('./Components/products/products.component').then(c => c.ProductsComponent), title: 'Products'
      }
      ,
      {
        path: 'cart', loadComponent: () => import('./Components/cart/cart.component').then(c => c.CartComponent), title: 'Cart'
      }
      ,
      {
        path: 'wishlist', loadComponent: () => import('./Components/wishlist/wishlist.component').then(c => c.WishlistComponent), title: 'Wish List'
      }
      ,
      {
        path: 'brands', loadComponent: () => import('./Components/brands/brands.component').then(c => c.BrandsComponent), title: 'Brands'
      }
      ,
      {
        path: 'brands/:id', loadComponent: () => import('./Components/brand-details/brand-details.component').then(c => c.BrandDetailsComponent), title: 'Brands'
      }, {
        path: 'details/:id', loadComponent: () => import('./Components/product-details/product-details.component').then(c => c.ProductDetailsComponent),
      },
      {
        path: 'payment/:id', loadComponent: () => import('./Components/ship-address/ship-address.component').then(c => c.ShipAddressComponent), title: 'Payment'
      }

      ,
      {
        path: 'allorders', loadComponent: () => import('./Components/all-orders/all-orders.component').then(c => c.AllOrdersComponent), title: 'Order'
      },
      {
        path: 'updatepassword', loadComponent: () => import('./Components/updatepass/updatepass.component').then(c => c.UpdatepassComponent), title: 'Update Password'
      }
      ,
      {
        path: 'profile', loadComponent: () => import('./Components/profile/profile.component').then(c => c.ProfileComponent), title: 'My Profile'
      }




    ]
  }, {
    path: '', loadComponent: () => import('./Layouts/auth-layout/auth-layout.component').then(c => c.AuthLayoutComponent), children: [
      {
        path: 'login', loadComponent: () => import('./Components/login/login.component').then(c => c.LoginComponent), title: 'Login'
      },
      {
        path: 'register', loadComponent: () => import('./Components/register/register.component').then(c => c.RegisterComponent), title: 'Register'
      },
      {
        path: 'forgetpassword', loadComponent: () => import('./Components/forget-pass/forget-pass.component').then(c => c.ForgetPassComponent), title: 'Forget Password'
      }

    ]
  },
  {
    path: '**', loadComponent: () => import('./Components/not-found/not-found.component').then(c => c.NotFoundComponent), title: 'Not Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
