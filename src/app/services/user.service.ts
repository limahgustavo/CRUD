import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL: string  = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/users/${id}`);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/users`);
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/users/create`, user);
  }
  deleteUser(id?: number): Observable<User> {
    console.log(id);
    return this.http.delete<User>(`${this.BASE_URL}/users/${id}`);
  }
  updateUser(id: number, user: User): Observable<User> {
    return this.http.patch<User>(`${this.BASE_URL}/users/${id}`, user);
  }
}
