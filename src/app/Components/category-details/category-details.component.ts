import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Category, Subcategory } from 'src/app/Core/Interfaces/products';
import { CategoryService } from 'src/app/Core/Services/category.service';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  CategoryID: any
  categoryDetails: Category = {
    _id: '',
    name: '',
    slug: '',
    image: ''
  }
  Subcategory: Subcategory[] = [];
  constructor(private _ProductsService: ProductsService, private _ActivatedRoute: ActivatedRoute, private _CategoryService: CategoryService) { }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.CategoryID = params.get('id')
      }
    })
    this._CategoryService.getSpecificCategory(this.CategoryID).subscribe({
      next: (response) => {
        this.categoryDetails = response.data
      }
    })
    this._CategoryService.getSpecificSubCategory(this.CategoryID).subscribe({
      next: (Response) => {
        this.Subcategory = Response.data

      }
    })
  }

}
