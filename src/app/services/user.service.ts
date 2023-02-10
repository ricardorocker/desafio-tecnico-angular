import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${username}`);
  }

  getRepositories(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${username}/repos`);
  }
}
