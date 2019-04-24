import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Output() messageSent = new EventEmitter();
  textWrote:string;
  constructor(private _messageSrv: MessageService) { }

  ngOnInit() {
  }
  
  sendMessage() {
    console.log('Message: ' + this.textWrote);
    this.messageSent.emit(this.textWrote);
    this.textWrote = '';
  }
  
  isDisabled() {
    return !this.textWrote || this.textWrote === '';
  }
}
