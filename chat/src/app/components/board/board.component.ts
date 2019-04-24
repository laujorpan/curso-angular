import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{

  @Input() messages: string[];
  @Input() activeUser: object;
  @Output() userRemoved = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeActive() {
    this.activeUser = undefined;
    this.userRemoved.emit();
  }
}
