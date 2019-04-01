import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../message.service';

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
  /* Option 1: With inputs and outputs */
  /*
  sendMessage(){
    this.messageSent.emit(this.textWrote);
    this.textWrote='';
  }
  */
 
  /* Option 2: With a service */
  sendMessage(){
    this._messageSrv.addMessage(this.textWrote);
    this.textWrote='';
  }

  isDisabled(){
    return !this.textWrote || this.textWrote==='';
  }
}
