import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  /* Option 1: With inputs and outputs */
  /* @Input() messages:string[]; */

  /* Option 2: With services */
  messages = [];
  constructor(private messageSrv: MessageService) { }

  ngOnInit() {
    this.messageSrv.messages$.subscribe(data => {
      this.messages.push(data)
    });
  }
 
  
}
