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
var notification_service_1 = require('./notification/notification.service');
var AppComponent = (function () {
    function AppComponent(notificationService) {
        this.notificationService = notificationService;
        this.name = 'Angular';
        this.newTitle = '';
        this.newBody = '';
        this.newType = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.notifications = this.notificationService.getNotifications();
    };
    AppComponent.prototype.onNotify = function () {
        var newNotification = {
            title: this.newTitle,
            body: this.newBody,
            type: this.newType
        };
        this.notificationService.pushNotification(newNotification);
        this.newTitle = this.newBody = '';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>Notifications via Angular2</h1>\n    <div class=\"form-row\">\n      <label>Notification title</label>\n      <input type=\"text\" [(ngModel)]=\"newTitle\" />\n    </div>\n\n    <div class=\"form-row\">\n      <label>Notification body</label>\n      <input type=\"text\" [(ngModel)]=\"newBody\" />\n    </div>\n\n    <div class=\"form-row\">\n      <label>Notification type</label>\n      <select [(ngModel)]=\"newType\">\n        <option value=\"0\">Info</option>\n        <option value=\"1\">Warning</option>\n        <option value=\"2\">Error</option>\n      </select>\n    </div>\n    <div class=\"form-row\">\n      <button (click)=\"onNotify()\">Notify</button>\n    </div>\n\n    <notifier [notifications]=\"notifications\"></notifier>\n  "
        }), 
        __metadata('design:paramtypes', [notification_service_1.NotificationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map