import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(officer: any[], searchText: string): any[] {
    if(!officer) 
        return [];

    if(!searchText) 
        return officer;
    searchText = searchText.toLowerCase();
         return officer.filter( it =>
           {
                       return it.state.toLowerCase().includes(searchText)||it.name.toLowerCase().includes(searchText) ;
}
);
  }

}
