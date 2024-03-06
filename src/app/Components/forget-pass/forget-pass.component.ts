import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-forget-pass',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent {
  step1: boolean = true
  step2: boolean = false
  step3: boolean = false;
  email: string = ''
  constructor(private _AuthService: AuthService, private _ToastrService: ToastrService, private _Router: Router) { }
  forgetForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })
  resetForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required, Validators.pattern(/^[0-9A-Za-z]{5,}$/)])
  })
  newPassForm: FormGroup = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)])
  })

  forgetPassword(): void {
    let userEmail = this.forgetForm.value;
    this.email = userEmail.email

    this._AuthService.forgetPassword(userEmail).subscribe({
      next: (Response) => {
        console.log(Response);

        if (Response.statusMsg == 'success') {
          this.step1 = false;
          this.step2 = true;
          this._ToastrService.success(Response.message)
        }

      }, error: (err) => {
        if (err.error.statusMsg = 'fail') {
          this._ToastrService.error('There is no user registered with this email address')
        }


      }
    })
  }
  resetCode(): void {
    this._AuthService.resetCode(this.resetForm.value).subscribe({
      next: (Response) => {
        if (Response.status == "Success") {
          this.step2 = false;
          this.step3 = true;
          this._ToastrService.success('Reset code is correct')
        }

      }, error: (err) => {
        if (err.error.statusMsg == 'fail') {
          this._ToastrService.error(err.error.message)
        }
      }
    })
  }
  resetPassword(): void {
    let resetForm = this.newPassForm.value; /* {NewPassword} */
    resetForm.email = this.email; /* it will add email to resetForm object */

    this._AuthService.newPassword(resetForm).subscribe({
      next: (Response) => {
        console.log(Response);
        if (localStorage.getItem('token') != null) {
          this._Router.navigate(['/home'])
        } else {
          this._Router.navigate(['/login'])

        }
      }, error: (err) => {
        console.log(err);

      }
    })
  }

}
