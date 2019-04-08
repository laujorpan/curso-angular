import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUser:object;
  constructor(private http: HttpClient) { }

  getHttpUsers(): Observable<object> {
    return this.http.get('https://randomuser.me/api/?results=5&seed=laura');
  }
  saveActiveUser(user) {
    this.activeUser = user;
  }
}
