import { Injectable } from '@angular/core';
import { Notification } from './notification';

@Injectable()
export class NotificationService {
  notifications: Notification[] = [];


  /**
   * Service method to fetch all the notifications
   */
  getNotifications(): Notification[] {
    return this.notifications;
  }

  /**
   * Service method to push a notification to the collection
   */
  pushNotification(notification: Notification): void {
    this.notifications.unshift(notification);
  }
  
  /**
   * Service method to remove a notification from the collection
   */
  clearNotification(index: number): void {
    this.notifications.splice(index, 1);
  }
}