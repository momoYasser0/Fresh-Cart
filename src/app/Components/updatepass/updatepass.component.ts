import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatepass',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './updatepass.component.html',
  styleUrls: ['./updatepass.component.scss']
})
export class UpdatepassComponent {
  showPass: boolean = false;
  isLoading: boolean = false;
  userData: object = {}
  constructor(private _AuthService: AuthService, private _Router: Router, private _FormBuilder: FormBuilder, private _ToastrService: ToastrService) { }

  updatePassForm: FormGroup = this._FormBuilder.group({
    currentPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
    rePassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]]

  }, {
    validators: [this.confirmPassword]
  } as FormControlOptions)

  handleForm() {
    this.isLoading = true;
    if (this.updatePassForm.valid) {
      this.userData = this.updatePassForm.value;

      this._AuthService.updatePassword(this.userData).subscribe({
        next: (Response) => {
          if (Response.message == "success") {
            this.isLoading = false
            localStorage.setItem('token', Response.token)
            this._ToastrService.success("Your Password Has been updated")
            this._Router.navigate(['/home'])
          }

        }, error: (err) => {
          if (err.error.message == 'fail') {
            this.isLoading = false
            this._ToastrService.error(err.error.errors.msg)
          }
        }
      })

    } else {
      this.updatePassForm.markAllAsTouched()
    }
  }
  confirmPassword(group: FormGroup): void {
    const password = group.get('password')
    const rePassword = group.get('rePassword')
    if (rePassword?.value == '') {
      rePassword?.setErrors({
        required: true
      })
    }
    else if (password?.value != rePassword?.value) {
      rePassword?.setErrors({
        misMatach: true
      })
    }

  }
}
