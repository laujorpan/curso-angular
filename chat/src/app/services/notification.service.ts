import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  errors$ = new Subject();
  constructor() { }
  sendError(message: string) {
    console.log('Message: ' + message);
    this.errors$.next(message);
  }
}
