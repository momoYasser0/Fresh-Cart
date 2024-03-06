import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { Router, RouterLink } from '@angular/router';
import { Category } from 'src/app/Core/Interfaces/category';
import { CategoryService } from 'src/app/Core/Services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private _ProductsService: ProductsService, private _Router: Router, private _CategoryService: CategoryService) { }

  categories: Category[] = [];
  ngOnInit(): void {
    this._CategoryService.getCategories().subscribe({
      next: (response) => {
        this.categories = response.data
      }
    })



  }

}
