import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLoading: boolean = false;
  errMsg: string = '';
  showPass: boolean = false;
  constructor(private _Router: Router, private _AuthService: AuthService, private _Renderer2: Renderer2) { }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required, Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    ]),
  })

  handleLogin() {
    this.isLoading = true;
    const userData = this.loginForm.value;
    if (this.loginForm.valid) {
      this._AuthService.signin(userData).subscribe({
        next: (response) => {
          this.isLoading = false
          if (response.message === 'success') {
            localStorage.setItem('token', response.token);
            this._AuthService.decodeToken()
            this._Router.navigate(['/home'])
          }
        }, error: (error: HttpErrorResponse) => {
          if (error.error.statusMsg === 'fail') {
            this.isLoading = false;
            this.errMsg = error.error.message


          }
        }
      })
    }
    else {
      this.loginForm.markAllAsTouched()
    }
  }

  passtype(element1: any, element2: any): void {
    let inputElement = document.querySelector('#password')
    this._Renderer2.setAttribute(inputElement, 'type', 'text')

    this._Renderer2.addClass(element1, 'd-none')
    this._Renderer2.removeClass(element2, 'd-none')
    this._Renderer2.addClass(element2, 'd-block')
  }
}
