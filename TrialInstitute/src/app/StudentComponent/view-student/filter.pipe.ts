import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
name: 'filterStu'
})
export class FilterPipeStudent implements PipeTransform {
transform(student: any[], searchText: string): any[] {
if(!student) return [];
if(!searchText) return student;
searchText = searchText.toLowerCase();
return student.filter( it => {
return it.fullName.toLowerCase().includes(searchText) || it?.institution?.name.toLowerCase().includes(searchText)
 ||it.field.toLowerCase().includes(searchText);
});
}
}