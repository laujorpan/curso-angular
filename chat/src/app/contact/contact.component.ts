import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // users:string[]=["jnroji","rojorubi"]; First version with two known users
  users$: Observable<object>; // Second one, sending observable to front
  activeUser: object;
  constructor(private userSrv: UserService) {  }
  ngOnInit() {
    this.users$ = this.userSrv.getHttpUsers();
  }
  selectUser(user: object) {
    this.activeUser = user;
    this.userSrv.saveActiveUser(user);
    console.log('Active user:' + this.activeUser);
  }
  isActiveUser(user: object) {
    return user === this.activeUser;
  }
}
