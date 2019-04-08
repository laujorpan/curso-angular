import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  /* Option 1: With inputs and outputs */
  /* @Input() messages:string[]; */

  /* Option 2: With services */
  messages = [];
  @Input() activeUser: object;
  @Output() userRemoved = new EventEmitter();
  subscription$:Subscription;
  constructor(private messageSrv: MessageService) { }

  ngOnInit() {
    this.subscription$=this.messageSrv.messages$.subscribe(data => {
      this.messages.push(data);
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  getUser(user) {
    // console.log(user);
  }
  removeActive() {
    this.activeUser = undefined;
    this.userRemoved.emit();
  }
}
