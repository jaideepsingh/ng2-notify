import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification/notification.service';
import { Notification } from './notification/notification';

@Component({
  selector: 'my-app',
  template: `
    <h1>Notifications via Angular2</h1>
    <div class="form-row">
      <label>Notification title</label>
      <input type="text" [(ngModel)]="newTitle" />
    </div>

    <div class="form-row">
      <label>Notification body</label>
      <input type="text" [(ngModel)]="newBody" />
    </div>

    <div class="form-row">
      <label>Notification type</label>
      <select [(ngModel)]="newType">
        <option value="0">Info</option>
        <option value="1">Warning</option>
        <option value="2">Error</option>
      </select>
    </div>
    <div class="form-row">
      <button (click)="onNotify()">Notify</button>
    </div>

    <notifier [notifications]="notifications"></notifier>
  `
})
export class AppComponent implements OnInit  { 
  name: string = 'Angular';
  newTitle: string = '';
  newBody: string = '';
  newType: number = 0;
  notifications: Notification[];

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notifications = this.notificationService.getNotifications();
  }

  /**
   * Method to handle adding a new notification from the form
   */
  onNotify(): void {
    const newNotification: Notification = {
      title: this.newTitle,
      body: this.newBody,
      type: this.newType
    }
    this.notificationService.pushNotification(newNotification);
    this.newTitle = this.newBody = '';
  }
  
}
