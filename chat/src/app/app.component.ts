import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chat';
  messagesList: string[] = [];
  // users:string[]=["jnroji","rojorubi"]; Firs version with two known users
  users: Observable<object>;
  activeUser: object;
  constructor(private userSrv: UserService) {

  }

  ngOnInit() {
    this.users = this.userSrv.getHttpUsers();
  }

  setTitle(event) {
    this.title = event;
  }
  printInBoard(message) {
    console.log(message);
    this.messagesList.push(message);
  }

  selectUser(user: object) {
    this.activeUser = user;
    this.userSrv.saveActiveUser(user);
    console.log('Active user:' + this.activeUser);
  }
  removeUser() {
    this.activeUser = undefined;
    this.userSrv.activeUser = undefined;
  }
}
