import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chat';
  messagesList:string[]=[];
  // users:string[]=["jnroji","rojorubi"]; Firs version with two known users
  users:Observable<object>;
  activeUser:object;
  constructor(private _userSrv: UserService){

  }

  ngOnInit(){
    this.users=this._userSrv.getHttpUsers();
  }
  

  setTitle(event){
    this.title = event;
  }
  printInBoard(message){
    console.log(message)
    this.messagesList.push(message)
  }

  selectUser(user:object){
    console.log(user);
    this.activeUser=user;
    console.log(this.activeUser);
  }
}
