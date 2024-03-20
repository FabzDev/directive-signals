import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User, SingleUser } from '../interfaces/user-request.interface';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  public http: HttpClient = inject(HttpClient);
  public baseUrl: string = 'https://reqres.in/api/users';

  getUser(id: number): Observable<User> {
    return this.http
      .get<SingleUser>(`${this.baseUrl}/${id}`)
      .pipe(map((resp) => resp.user));
  }
}

