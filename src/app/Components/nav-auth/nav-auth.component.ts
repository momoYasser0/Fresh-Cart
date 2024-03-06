import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.scss']
})
export class NavAuthComponent implements OnInit {
  ngOnInit(): void {
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
