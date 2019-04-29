import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../model/user.model';
import { MessageActions } from '../reducers/message.actions';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //messages: string[] =[];
  constructor(private store: Store<string[]>,  private db: AngularFirestore) { 
    this.db.collection('messages').valueChanges().subscribe((data) => {
      //this.messages= data.map(messageInfo => messageInfo['username'] + ": " + messageInfo['message']);
      //console.log(this.messages);
      let messages= data.map(
        messageInfo =>{
        let text=messageInfo['username'] + ": " + messageInfo['message']
        const action = {
          type: MessageActions.SAVE,
          username: 'general',
          message: text
        };
        console.log(`action dispatched ${action}`);
        this.store.dispatch(action);
      });
    });
  }

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

  getMessages(activeUser:User): Observable<object[]>{ //string[] {
    let messages;//=this.messages;
    //if(activeUser.name !== 'general') {
      
    //}
    return this.store.select('messages');// messages;
  }

  
   
}
