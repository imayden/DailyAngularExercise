import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingFilter',
  pure: false
})
export class SortingFilterPipe implements PipeTransform {

  transform(cityNames: string[]): string[] {
    if(!cityNames){
      return [];
    };

    let result: string[] = [];

    result = cityNames.slice().sort();

    return result;
  }

}
