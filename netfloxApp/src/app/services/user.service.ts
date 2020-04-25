import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../containers/signup/models/user.models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;
  constructor(private httpClient: HttpClient) { }
  signup(user: User): Observable<any> {
    return this.httpClient.post<User>(environment.API_URL + '/users/register', user);
  }
  login(user: User): Observable<any> {
    return this.httpClient.post(environment.API_URL + '/users/login', user);
  }
  setUser(user: User) {
    this.user = user;
  }
  getUser(): User {
    return this.user;
  }
  getInfo(token): Observable<any> {
    return this.httpClient.get<User>(environment.API_URL + '/users/info', {
      headers: {
        Authorization: token
      }
    });
  }
}
