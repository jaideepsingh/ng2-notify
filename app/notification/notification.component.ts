import { Component, Input } from '@angular/core';
import { Notification } from './notification';
import { NotificationService } from './notification.service';

@Component({
  selector: 'notifier',
  template: `
    <div class="notifications-container">
      <div *ngFor="let notification of notifications; let i = index;" class="notification" [ngClass]="notificationTypes[notification.type]">
        <h3 class="notification-title">{{ notification.title }}</h3>
        <p class="notification-body">{{ notification.body }}</p> 
        <button class="notification-close" (click)="clearNotification(i)">&times;</button>
      </div>
    </div>
  `
})

export class NotificationComponent {
  @Input()
  notifications: Notification[];
  notificationTypes: string[] = ["info", "warning", "error"];

  constructor(private notificationService: NotificationService) { }
  /**
   * Method to handle the 'close' interaction for a specific notification
   */
  clearNotification(index: number): void {
    this.notificationService.clearNotification(index);
  }
}