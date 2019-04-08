import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messagesList: string[] = [];
 
  activeUser: object;

  constructor(private userSrv: UserService) { }
  ngOnInit() {
    this.activeUser=this.userSrv.activeUser;
  }
  printInBoard(message) {
    console.log(message);
    this.messagesList.push(message);
  }
  
  removeUser() {
    this.activeUser = undefined;
    this.userSrv.activeUser = undefined;
  }
  
}
