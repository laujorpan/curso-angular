import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  users: User[]; 
  activeUser: User;
  constructor(private userSrv: UserService, private router: Router) {  }
  ngOnInit() {
    this.users = this.userSrv.getUsers();
   
  }
  selectUser(user: User) {
    this.activeUser = user;
    this.userSrv.saveActiveUser(user);
    console.log('Active user:' + this.activeUser.key);
    this.router.navigate(['chat']);
  }
}
