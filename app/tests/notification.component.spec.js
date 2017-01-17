"use strict";
var app_component_1 = require('../app.component');
var notification_component_1 = require('../notification/notification.component');
var forms_1 = require('@angular/forms');
var notification_service_1 = require('../notification/notification.service');
var testing_1 = require('@angular/core/testing');
describe('NotificationComponent', function () {
    var comp;
    var fixture;
    var notificationService;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, notification_component_1.NotificationComponent],
            providers: [notification_service_1.NotificationService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(notification_component_1.NotificationComponent);
        comp = fixture.componentInstance;
        notificationService = testing_1.TestBed.get(notification_service_1.NotificationService);
    });
    it('should clear the specific notification when close is clicked', function () {
        spyOn(notificationService, 'clearNotification');
        comp.clearNotification(0);
        expect(notificationService.clearNotification).toHaveBeenCalled();
    });
});
//# sourceMappingURL=notification.component.spec.js.map