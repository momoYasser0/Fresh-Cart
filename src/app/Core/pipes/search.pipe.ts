import { Pipe, PipeTransform } from '@angular/core';
import { Pdt } from '../Interfaces/products';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products: Pdt[], term: string): Pdt[] {
    return products.filter((item) => item.title.toLowerCase().includes(term.toLowerCase()));
  }

}
