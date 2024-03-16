import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styles: ``
})
export class ProductPageComponent {
  // constructor (private fb: FormBuilder) {}
  private fb = inject( FormBuilder );
  public color: string = 'blue';

  public myForm = this.fb.group({
    name: ['', [Validators.required ,Validators.minLength(6), Validators.email]]
  });

  changeColor(){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
