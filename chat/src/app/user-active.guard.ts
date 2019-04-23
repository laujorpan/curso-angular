import { NotificationService } from './services/notification.service';
import { UserService } from './services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserActiveGuard implements CanActivate {
  constructor(private userSrv: UserService, private notificationsSrv: NotificationService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isActive = this.userSrv.activeUser !== undefined;
      console.log('active user: ' + isActive);
      //this.notificationsSrv.sendError('No user selected to chat');
      if (!isActive) {
        this.router.navigate(['contact']);
      }
      return isActive;
  }
}
