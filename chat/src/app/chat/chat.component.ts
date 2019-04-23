import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MessageActions } from '../reducers/message.actions';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  activeUser: object;

  constructor(private userSrv: UserService, private store: Store<string[]>, private router: Router, private db: AngularFirestore) { }
  ngOnInit() {
    this.activeUser = this.userSrv.activeUser;
  }
  printInBoard(text) {
    if (this.activeUser['login']['uuid'] === 'general') {
      const messageInfo = {
        message : text,
        username: 'Laura'
      }
      this.db.collection('messages').add(messageInfo);
    } else {
      console.log(`Message to board: ${text}`);
      const action = {
        type: MessageActions.SAVE,
        data: text,
        userId: this.activeUser['login']['uuid']
      };
      console.log(`action dispatched ${action}`);
      this.store.dispatch(action);
    }
    
  }
  removeUser() {
    this.activeUser = undefined;
    this.userSrv.activeUser = undefined;
    this.router.navigate(['contact']);
  }
}
