import { Pipe, PipeTransform } from '@angular/core';
import { Dress } from "./dress";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<Dress>, filter_dress: string): Array<Dress>  {
    if(!filter_dress){ return value }
    return value.filter(
      dress => {
        console.log("in search: ", dress)
        return dress.name.toLowerCase().includes(filter_dress.toLowerCase()) || dress.description.toLowerCase().includes(filter_dress.toLowerCase()) 
      }
    );
  }

}

