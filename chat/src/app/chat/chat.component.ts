import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { User } from '../model/user.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  activeUser: User;
  messages: string[]

  constructor(private userSrv: UserService, private msgSrv: MessageService, private router: Router) { }
  ngOnInit() {
    this.activeUser = this.userSrv.activeUser;
    this.msgSrv.getMessages(this.activeUser).subscribe((data) => {
      if (data) {
        let userMessages=data.find((elem) => (elem.username === this.activeUser.name));
        this.messages= userMessages?userMessages.messages:[];
      }
    });
    //console.log('Chat messages :'+this.messages)
  }
  printInBoard(text) {
    this.msgSrv.saveMessageToUser(this.activeUser,text);
    this.messages=this.msgSrv.getMessages(this.activeUser);
  }
  removeUser() {
    this.activeUser = undefined;
    this.userSrv.activeUser = undefined;
    this.router.navigate(['contact']);
  }
}
