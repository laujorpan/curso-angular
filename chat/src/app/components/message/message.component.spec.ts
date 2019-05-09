import { environment } from './../../../environments/environment.dev';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatFormFieldControl, MatInputModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from '../../reducers/users.reducer';
import { messageReducer } from '../../reducers/message.reducer';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NoopAnimationsModule,
        MatInputModule,
        MatIconModule,
        StoreModule.forRoot({
          messages: messageReducer,
          users: usersReducer
        }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
      ],
      declarations: [ MessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('should be disabled if no text wrote', () => {
    expect(component.isDisabled()).toBeTruthy();
  });
  fit('should be disabled if text empty', () => {
    component.textWrote = '';
    expect(component.isDisabled()).toBeTruthy();
  });
  fit('should be enabled', () => {
    component.textWrote = 'TextoEscrito';
    expect(component.isDisabled()).toBeFalsy();
  });
});
