import { NotificationService } from './../../../services/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  errorMessage: object;
  constructor(private notificationsSrv: NotificationService) { }

  ngOnInit() {
    this.notificationsSrv.errors$.subscribe(data => {
      console.log('printing notification');
      this.errorMessage = data;
    });
  }

}
