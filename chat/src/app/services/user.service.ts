import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getHttpUsers(): Observable<object>{
    return this._http.get('https://randomuser.me/api/?results=5&seed=laura');
  }
}
