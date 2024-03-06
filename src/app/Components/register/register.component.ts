import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Core/Services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router, private _FormBuilder: FormBuilder, private _ToastrService: ToastrService) { }
  isLoading: boolean = false;
  showPass: boolean = false;
  showRepass: boolean = false;
  accountExists: string = '';
  registerForm: FormGroup = this._FormBuilder.group({
    name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]{3,}$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
    rePassword: ['', Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)],
    phone: ['', [Validators.required, Validators.pattern(/^01[0-9]{9}$/gm)]]
  }, {
    validators: [this.confirmPassword]
  } as FormControlOptions)


  handleForm() {
    this.isLoading = true;
    const userData = this.registerForm.value
    if (this.registerForm.valid) {
      this._AuthService.signup(userData).subscribe({
        next: (response) => {
          this.isLoading = false
          if (response.message === 'success') {
            this._ToastrService.success('Successfully registered');
            this._Router.navigate(['/login'])

          }
        }, error: (err) => {
          if (err.error.statusMsg === 'fail') {
            this.isLoading = false;
            this.accountExists = err.error.message
            this._ToastrService.error(err.error.message)

          }
        }
      })
    } else {
      this.registerForm.markAllAsTouched()
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
