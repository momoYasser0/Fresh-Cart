import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient: HttpClient) { }


  getCategories(): Observable<any> {
    return this._HttpClient.get('categories');
  }
  getSpecificCategory(id: any): Observable<any> {
    return this._HttpClient.get(`categories/${id}`);
  }
  getSpecificSubCategory(id: any): Observable<any> {
    return this._HttpClient.get(`categories/${id}/subcategories`);
  }
}
