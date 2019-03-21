import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Output() messageSent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendMessage(messageText){
    this.messageSent.emit(messageText);
  }
}
