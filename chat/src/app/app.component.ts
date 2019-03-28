import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat';
  messagesList:string[]=[];
  users:string[]=["jnroji","rojorubi"];
  
  setTitle(event){
    this.title = event;
  }
  printInBoard(message){
    console.log(message)
    this.messagesList.push(message)

  }
}
