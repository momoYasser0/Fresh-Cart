import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    this.decodeToken()

  }
  decodeToken(): any {
    const encode = localStorage.getItem('token')
    if (encode) {
      try {
        const decoded: any = jwtDecode(encode);
        this.userData.next(decoded);

      } catch (error: any) {
        if (error.message.includes('Invalid token')) {
          localStorage.removeItem('token');
          this._Router.navigate(['/login']);
        }
      }
    }
  }
  signup(userData: object): Observable<any> {
    return this._HttpClient.post('auth/signup', userData)
  }
  signin(userData: object): Observable<any> {
    return this._HttpClient.post('auth/signin', userData)
  }
  forgetPassword(userEmail: object): Observable<any> {
    return this._HttpClient.post('auth/forgotPasswords', userEmail)
  }
  resetCode(resetCode: object): Observable<any> {
    return this._HttpClient.post('auth/verifyResetCode', resetCode)
  }
  newPassword(userData: object): Observable<any> {
    return this._HttpClient.put('auth/resetPassword', userData)
  }
  updatePassword(userData: object): Observable<any> {
    return this._HttpClient.put('users/changeMyPassword', userData)
  }

}
