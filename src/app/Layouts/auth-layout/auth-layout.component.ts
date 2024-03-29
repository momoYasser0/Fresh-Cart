import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavAuthComponent } from 'src/app/Components/nav-auth/nav-auth.component';
import { FooterComponent } from 'src/app/Components/footer/footer.component';
import { LoaderComponent } from 'src/app/Components/loader/loader.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule, NavAuthComponent, RouterOutlet, FooterComponent,LoaderComponent],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {

}
