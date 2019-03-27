import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat';
  lastMsg:string;
  setTitle(event){
    this.title=event;
  }
  printInBoard(message){
    this.lastMsg=message
  }
}
