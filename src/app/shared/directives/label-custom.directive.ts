import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[label-custom]',
})
export class LabelCustomDirective implements OnInit {
  public _color: string = 'green';
  public _errors?: ValidationErrors;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(errors: ValidationErrors | undefined | null) {
    if (!errors) {
      this.htmlElement.nativeElement.innerHTML = '';
      return;
    }
    this._errors = errors;
    this.printErrors();
  }

  constructor(public htmlElement: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if (!this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  printErrors() {
    let errorKeys: string[] = Object.keys(this._errors!);

    if (errorKeys.includes('required')){
      this.htmlElement.nativeElement.innerHTML = 'El campo es requerido <br>';
    }
    if (errorKeys.includes('email')) {
      this.htmlElement.nativeElement.innerHTML = 'El email no es valido';
    };
    if (errorKeys.includes('minlength')) {
      this.htmlElement.nativeElement.innerHTML = 'El nombre debe tener 6 caracteres minimo';
    };
  }
}
