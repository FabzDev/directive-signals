import { Component, OnInit, WritableSignal, computed, inject, signal } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { Data } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit{
  public user = signal(1);
  public currentUser =  signal<Data | undefined>(undefined);
  public userWasFound = signal(true);

  public fullName = computed<string>( () => {
    if(!this.userWasFound()) return 'El usuario no fue encontrado';
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });

  public userService = inject(UserService);

  ngOnInit(): void {
    this.loadUser(this.user());
  }

  loadUser(id: number){
    if (id <=0) return;

    this.user.set(id);

    this.currentUser.set(undefined);

    this.userService.getUser(id).subscribe({
      next: user => {
        if (!user) return 'Usuario no existe';

        this.userWasFound.set(true);
        return this.currentUser.set(user);
      },
      error: () => {
        this.currentUser.set(undefined);
        this.userWasFound.set(false);
      }
    })
  }
}
