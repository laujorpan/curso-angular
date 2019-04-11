import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  activeUser: object;

  constructor(private userSrv: UserService, private store: Store<string[]>, private router: Router) { }
  ngOnInit() {
    this.activeUser = this.userSrv.activeUser;
  }
  printInBoard(message) {
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
    this.router.navigate(['contact']);
  }
}
