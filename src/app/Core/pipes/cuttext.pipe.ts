import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuttext',
  standalone: true
})
export class CuttextPipe implements PipeTransform {

  transform(text: string, Start: number, End: number): unknown {

    return text.split(' ').slice(Start, End).join(' ');
  }

}
