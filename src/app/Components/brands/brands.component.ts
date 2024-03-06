import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { brands } from 'src/app/Core/Interfaces/brand';
import { BrandsService } from 'src/app/Core/Services/brands.service';


@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxPaginationModule, RouterLink],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brandsData: brands[] = []
  numsOfPages: number = 0
  currentPage: number = 1
  pageLimit: number = 0
  totalBrands: number = 0
  constructor(private _BrandsService: BrandsService) { }
  ngOnInit(): void {
    this._BrandsService.getAllBrands().subscribe({
      next: (Response) => {
        this.brandsData = Response.data
        this.totalBrands = Response.results
        this.numsOfPages = Response.metadata.numberOfPages
        this.currentPage = Response.metadata.currentPage
        this.pageLimit = Response.metadata.limit
      }, error: (err) => {
        console.log(err);

      }
    })
  }

  pageChanged(event: any): void {
    console.log(event);

    this._BrandsService.getAllBrands(event).subscribe({
      next: (response) => {
        console.log(response);
        this.brandsData = response.data
        this.totalBrands = response.results
        this.numsOfPages = response.metadata.numberOfPages
        this.currentPage = response.metadata.currentPage
        this.pageLimit = response.metadata.limit
      }
    })

  }
}
