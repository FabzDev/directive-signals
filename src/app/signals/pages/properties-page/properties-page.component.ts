import { Component } from '@angular/core';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {


  fieldUpdated(html: string, value: string){
    console.log({html}, {value});


  }
}
