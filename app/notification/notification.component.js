"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var notification_service_1 = require('./notification.service');
var NotificationComponent = (function () {
    function NotificationComponent(notificationService) {
        this.notificationService = notificationService;
        this.notificationTypes = ["info", "warning", "error"];
    }
    /**
     * Method to handle the 'close' interaction for a specific notification
     */
    NotificationComponent.prototype.clearNotification = function (index) {
        this.notificationService.clearNotification(index);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], NotificationComponent.prototype, "notifications", void 0);
    NotificationComponent = __decorate([
        core_1.Component({
            selector: 'notifier',
            template: "\n    <div class=\"notifications-container\">\n      <div *ngFor=\"let notification of notifications; let i = index;\" class=\"notification\" [ngClass]=\"notificationTypes[notification.type]\">\n        <h3 class=\"notification-title\">{{ notification.title }}</h3>\n        <p class=\"notification-body\">{{ notification.body }}</p> \n        <button class=\"notification-close\" (click)=\"clearNotification(i)\">&times;</button>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [notification_service_1.NotificationService])
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=notification.component.js.map