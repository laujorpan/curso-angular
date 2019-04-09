import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  //messagesList: string[] = []; // Esto se usaba en la opcion 1 del board en la que recibia los mensajes como input
  activeUser: object;

  constructor(private userSrv: UserService, private store: Store<string[]>) { }
  ngOnInit() {
    this.activeUser = this.userSrv.activeUser;
  }
  printInBoard(message) {
    //this.messagesList.push(message);
    console.log(message);
    const action = {
      type: 'hello'
    };
    console.log(`action dispatched ${action}`);
    this.store.dispatch(action);
  }
  removeUser() {
    this.activeUser = undefined;
    this.userSrv.activeUser = undefined;
  }
}
