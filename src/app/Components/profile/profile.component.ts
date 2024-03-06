import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { UserAddressService } from 'src/app/Core/Services/user-address.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData: object = {}
  userName: string = ''
  constructor(private _FormBuilder: FormBuilder, private _UserAddressService: UserAddressService, private _ToastrService: ToastrService, private _AuthService: AuthService) {
  }
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: (data) => {
        console.log(data);
        this.userName = data.name
      }
    })

  }
  addressForm: FormGroup = this._FormBuilder.group({
    name: ['', Validators.required],
    details: ['', Validators.required],
    phone: ['', Validators.required],
    city: ['', Validators.required]
  })

  handleForm(): void {
    this.userData = this.addressForm.value
    if (this.addressForm.valid) {
      this._UserAddressService.addAddress(this.userData).subscribe({
        next: (Response) => {
          if (Response.status = "success") {
            console.log(Response);
            this._ToastrService.success(Response.message)

          }

        }, error: (err) => {
          console.log(err);

        }
      })
    }

  }
}
