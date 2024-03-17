import { Component, WritableSignal, signal } from '@angular/core';

interface MenuItem{
  name: string,
  route: string,
}

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  // public menuItems: MenuItem[] = [
  //   {name: 'Contador', route:'counter'},
  //   {name: 'Usuario', route:'user-info'},
  //   {name: 'Mutaciones', route:'properties'},
  // ];

  public menuItems: WritableSignal<MenuItem[]> = signal([
    {name: 'Contador', route:'counter'},
    {name: 'Usuario', route:'user-info'},
    {name: 'Mutaciones', route:'properties'},
  ])

}
