import { NewContactComponent } from './contact/new-contact/new-contact.component';
import { UserActiveGuard } from './user-active.guard';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'contact/newContact',
        component: NewContactComponent
    },
    {
        path: 'chat',
        component: ChatComponent,
        canActivate: [UserActiveGuard]
    },
    {
        path: '**',
        redirectTo: '/contact'
    }
];
