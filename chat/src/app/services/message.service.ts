import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages = [];
  messages$ = new Subject();
  
  constructor() { }

  addMessage(message) {
    this.messages = [ message ];
    this.messages$.next(message);
  }
  
}
