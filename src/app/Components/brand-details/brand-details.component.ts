import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { brands } from 'src/app/Core/Interfaces/brand';
import { BrandsService } from 'src/app/Core/Services/brands.service';

@Component({
  selector: 'app-brand-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent implements OnInit {
  brandDetailsData: brands = {
    _id: '',
    name: '',
    slug: '',
    image: ''
  }
  constructor(private _ActivatedRoute: ActivatedRoute, private _BrandsService: BrandsService) { }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let brandID = params.get('id');
        this._BrandsService.getSpecificBrand(brandID).subscribe({
          next: (Response) => {
            this.brandDetailsData = Response.data

          }
        })
      }
    })
  }
}
