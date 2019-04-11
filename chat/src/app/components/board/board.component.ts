import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import {  Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

  messages = [];
  @Input() activeUser: object;
  @Output() userRemoved = new EventEmitter();
  ngDestroy$: Subject<object> = new Subject();

  constructor(private store: Store<string[]>) { }

  ngOnInit() {
    console.log('oninit board');
    this.store.select('messages').pipe(takeUntil(this.ngDestroy$)).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.ngDestroy$.next();
  }

  removeActive() {
    this.activeUser = undefined;
    this.userRemoved.emit();
  }
}
