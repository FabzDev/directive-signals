import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelCustomDirective } from './directives/label-custom.directive';



@NgModule({
  declarations: [
    LabelCustomDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LabelCustomDirective
  ]
})
export class SharedModule { }
