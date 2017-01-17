"use strict";
var app_component_1 = require('../app.component');
var notification_component_1 = require('../notification/notification.component');
var forms_1 = require('@angular/forms');
var notification_service_1 = require('../notification/notification.service');
var testing_1 = require('@angular/core/testing');
describe('AppComponent', function () {
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, notification_component_1.NotificationComponent],
            providers: [notification_service_1.NotificationService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
    });
    it('should fetch the notifications from the notifications service when the compoment loads', function () {
        fixture.detectChanges();
        expect(comp.notifications.length).toEqual(0);
    });
    it('should push the notifications to the notifications service when user clicks on Notify', function () {
        fixture.detectChanges();
        comp.newTitle = 'New notification title';
        comp.newBody = 'New notification body';
        comp.newType = 1;
        comp.onNotify();
        expect(comp.notifications.length).toEqual(1);
    });
});
//# sourceMappingURL=app.component.spec.js.map