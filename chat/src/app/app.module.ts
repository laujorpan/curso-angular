import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/commons/avatar/avatar.component';
import { BoardComponent } from './components/board/board.component';
import { MessageComponent } from './components/message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationComponent } from './components/commons/notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    BoardComponent,
    MessageComponent,
    ChatComponent,
    ContactComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
