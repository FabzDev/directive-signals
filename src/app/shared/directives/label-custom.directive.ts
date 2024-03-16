import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[label-custom]'
})
export class LabelCustomDirective implements OnInit{
  public _color: string = 'green';

  @Input()
  set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  constructor( public htmlElement: ElementRef<HTMLElement>) { console.log('Directive Constructor');
   }

  ngOnInit(): void {
    this.htmlElement.nativeElement.innerHTML = 'El error es fatal'
  }

  setStyle(): void {
    if( !this.htmlElement ) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }


}
