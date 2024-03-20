import { Component, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent {
  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

  public counter = signal(10);

  public counterUserEffect = effect( () => {
    console.log(`Counter: ${this.counter()} - ${this.user().first_name}`);
  })

  counterPlus1(){
    this.counter.update( current => current + 1);
  }

  fieldUpdated(field: keyof User, value: string) {
    this.user.update( current => {
      // switch (field){
      //   case 'email': current.email = value;
      //   break;
      //   case 'first_name': current.first_name = value;
      //   break;
      //   case 'last_name': current.last_name = value;
      //   break;
      // }

      current = {...current, [field]:value}
      return current;
    })









  }
}
