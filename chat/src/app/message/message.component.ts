import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Output() messageSent = new EventEmitter();
  textWrote:string;
  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    this.messageSent.emit(this.textWrote);
    this.textWrote='';
  }
  isDisabled(){
    return !this.textWrote || this.textWrote==='';
  }
}
