import { NotificationService } from './../../../services/notification.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  errorMessage: object;
  constructor(private notificationsSrv: NotificationService) { }

  ngOnInit() {
    this.notificationsSrv.errors$.subscribe(data => {
      console.log('printing notification');
      this.errorMessage = data;
    });
  }
  ngOnDestroy(){
    this.notificationsSrv.errors$.unsubscribe();
  }
}
