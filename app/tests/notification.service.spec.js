"use strict";
var notification_service_1 = require('../notification/notification.service');
describe('Notification service', function () {
    var service;
    beforeEach(function () {
        service = new notification_service_1.NotificationService();
        service.notifications = [
            {
                title: 'notification title 1',
                body: 'notification body 1',
                type: 0
            },
            {
                title: 'notification title 2',
                body: 'notification body 2',
                type: 1
            },
            {
                title: 'notification title 3',
                body: 'notification body 3',
                type: 2
            }
        ];
    });
    it('#getNotifications() should get all the notifications from the notifications array', function () {
        var notifications = service.getNotifications();
        expect(notifications.length).toEqual(3);
    });
    it('#pushNotification() should push items into notifications array', function () {
        var notification = {
            title: 'notification title',
            body: 'notification body',
            type: 1
        };
        service.pushNotification(notification);
        expect(service.notifications.length).toEqual(4);
    });
    it('#clearNotification() should clear notification at a specific index', function () {
        service.clearNotification(1);
        expect(service.notifications.length).toEqual(2);
    });
});
//# sourceMappingURL=notification.service.spec.js.map