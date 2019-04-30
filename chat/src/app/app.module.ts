import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/commons/avatar/avatar.component';
import { BoardComponent } from './components/board/board.component';
import { MessageComponent } from './components/message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationComponent } from './components/commons/notification/notification.component';
import { StoreModule } from '@ngrx/store';
import { messageReducer } from './reducers/message.reducer';
import { usersReducer } from './reducers/users.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NewContactComponent } from './contact/new-contact/new-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    BoardComponent,
    MessageComponent,
    ChatComponent,
    ContactComponent,
    NotificationComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    StoreModule.forRoot({
      messages: messageReducer,
      users: usersReducer
    }),
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
