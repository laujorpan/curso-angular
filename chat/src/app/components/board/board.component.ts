import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import {  Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

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

  constructor(private store: Store<string[]>, private db: AngularFirestore) { }

  ngOnInit() {
    console.log('oninit board');
    if (this.activeUser['login']['uuid'] === 'general') {
      this.db.collection('messages').valueChanges().subscribe((data) => {
        this.messages = data.map(messageInfo => messageInfo['username'] + ": " + messageInfo['message']);
      });
    } else {
      this.store.select('messages').pipe(takeUntil(this.ngDestroy$)).subscribe((data) => {
        if (data) {
          this.messages = data.find((user) => (user['id'] === this.activeUser['login']['uuid'])).messages;
        }
      });
    }
    
  }

  ngOnDestroy() {
    this.ngDestroy$.next();
  }

  removeActive() {
    this.activeUser = undefined;
    this.userRemoved.emit();
  }
}
