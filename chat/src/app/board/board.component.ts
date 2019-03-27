import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  messages:Array<string> =new Array();;

  constructor() { }

  ngOnInit() {
  }
 
  @Input() 
  set message (message:string){
    if (message){
      this.messages.push(message);

    }
  }
}
