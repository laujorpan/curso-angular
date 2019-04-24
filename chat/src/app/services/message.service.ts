import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../model/user.model';
import { MessageActions } from '../reducers/message.actions';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private store: Store<string[]>,  private db: AngularFirestore) { }

  saveMessageToUser(user:User, text:string){
    if (user.name === 'general') {
      const messageInfo = {
        message : text,
        username: 'Laura'
      }
      console.log(messageInfo);
      this.db.collection('messages').add(messageInfo);
    } else {
      console.log(`Message to board: ${text}`);
      const action = {
        type: MessageActions.SAVE,
        username: user.name,
        message: text
      };
      console.log(`action dispatched ${action}`);
      this.store.dispatch(action);
    }
  }

  getMessages(activeUser:User): string[] {
    let messages: string[] =[];
    if(activeUser.name === 'general') {
      this.db.collection('messages').valueChanges().subscribe((data) => {
        console.log(data);
        messages= data.map(messageInfo => messageInfo['username'] + ": " + messageInfo['message']);
        console.log(messages);
      });
    }else{
      this.store.select('messages').subscribe((data) => {
        if (data) {
          let userMessages=data.find((elem) => (elem.username === activeUser.name));
          messages = userMessages?userMessages.messages:[];
        }
      });
    }
    console.log(messages);
    return messages;
  }
   
}
