import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBlankComponent } from 'src/app/Components/nav-blank/nav-blank.component';
import { FooterComponent } from 'src/app/Components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from 'src/app/Components/loader/loader.component';


@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule, NavBlankComponent, FooterComponent, RouterOutlet,LoaderComponent],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent {
  isScroll: boolean = false
  goUp(): void {
    scrollTo(0, 0)
  }
  @HostListener('window:scroll')
  isScrollingFn() {
    window.scrollY > 50 ? this.isScroll = true : this.isScroll = false
  }
}
