import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './search-filter.pipe';
import { SortDirective } from './sort.directive';

@NgModule({
  declarations: [SearchFilterPipe, SortDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchFilterPipe,
    SortDirective
  ]
})
export class PipesModule { }
